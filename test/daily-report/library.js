const WebSocket = require('ws');

var handleIqOption = async function(payload, iqOptionSymbol, ssid, userBalanceType, maxPercent, leverage, closingPrice, argumentSymbol, argumentStopProfit) {

    let userBalanceAccount = null;

    if(iqOptionSymbol == undefined) throw new Error('Undefined Symbol ' + iqOptionSymbol);

    const ws = new WebSocket('wss://ws.iqoption.com/echo/websocket');

    let isConnected = false;
    let isLoggedOn = false;
    let clientSessionId = '';
    let currentTime = Date.now(); // should be Date.now
    let requestCount = 0;
    let subscriptionCount = 0;

    // User decision inputs
    let positionIds = [];
    let positionIdsIndex = {};
    let newPosition = payload.newPosition;
    let signal = payload.signal;
    const percentQty = payload.qty;
    let requestLogs = {};

    let capital = 20000; // change this to your current capital
    let capitalCoveredRisk = capital/3; // save it from 300% liquidation
    let minimalNotation = capitalCoveredRisk/maxPercent; // accept percent equity
    let qty = Math.round(percentQty*minimalNotation);

    console.log({qty});

    // timeStamp that is synced from server
    function getUserTime() {
        if(timeSync != null) {
            return Date.now() - timeOffset; // should be Date.now
        }

        return Date.now(); // should be Date.now
    }

    function getLocalTime() {
        let response = Math.round((getUserTime()-currentTime)/10);

        return response;
    }

    function authenticate() {
        console.log(`attempting to login using ssid ${ssid}`);
        sendMessage('authenticate', {"ssid":ssid,"protocol":3,"session_id":"","client_session_id":""});
    }

    function sendMessage(action, msg) {
        requestCount++;
        ws.send(JSON.stringify({
            name: action,
            request_id: requestCount.toString(),
            local_time: getLocalTime(),
            msg: msg
        }));

        return requestCount;
    }

    function subscribe(action, msg) {
        subscriptionCount++;
        ws.send(JSON.stringify({
            name: action,
            request_id: 's_' + subscriptionCount.toString(),
            local_time: getLocalTime(),
            msg: msg
        }));
    }

    // after connecting
    ws.on('open', function open() {
        isConnected = true;

        // login
        if(!isLoggedOn) {
            authenticate();
        }
    });

    // after recieving a message
    let heartbeat = null;
    let timeSync = null;
    let timeOffset = null;
    let candleGenerated = null;
    let globalMaxPrice = -Infinity;
    let globalMinPrice = Infinity;
    let globalExpirationData = null;

    ws.on('message', function incoming(message) {
        let response = message.toString('utf-8');
        let parsed = JSON.parse(response);

        if(parsed.request_id != undefined)
            requestLogs[parsed.request_id] = parsed;

        if( parsed.name != "training-balance-reset" &&
            parsed.name != "digital-option-placed" &&
            parsed.name != 'instruments' &&
            parsed.name != 'instrument-generated' &&
            parsed.name != 'heartbeat' &&
            parsed.name != 'timeSync' &&
            parsed.name != 'balances' &&
            parsed.name != 'top-assets' &&
            parsed.name != 'option' &&
            parsed.name != 'candle-generated' &&
            parsed.name != 'underlying-list'
        )
            console.log(`
                received: %s`, response);

        // save login creds
        if(parsed.name == "authenticated") {
            if(parsed.msg == true) {
                isLoggedOn = true;
                clientSessionId = parsed.client_session_id;
                processQueries();
            }
        }
        if(parsed.name == "order-placed-temp") {
            console.log(signal.toUpperCase() + ' ORDER ID ==== ' + parsed.msg.id + ' ===========')
        }
        if(parsed.name == "heartbeat") {
            heartbeat = parsed.msg;
        }

        if(parsed.name == "timeSync") {
            timeSync = parsed.msg;
            timeOffset = Date.now()-timeSync; // should be Date.now
        }

        if(parsed.name == "instrument-generated") {
            let expirationData = parsed.msg;
            let instrument = parseInstrument(expirationData);

            // find the 1 min one
            if(instrument.instrument_id.match(/T1MCSPT/g)) {
                globalExpirationData = instrument;
                // console.log(globalExpirationData);
            }

        }

        if(parsed.name == "candle-generated") {
            candleGenerated = parsed.msg;

            // update min max just because
            if(candleGenerated != null) {
                globalMaxPrice = Math.max(globalMaxPrice, candleGenerated.close);
                globalMinPrice = Math.min(globalMinPrice, candleGenerated.close);
            }
        }

        if(heartbeat !== null && timeSync !== null) {
            sendMessage('heartbeat', {"userTime":timeSync.toString(),"heartbeatTime":heartbeat.toString()});
            timeSync == null;
            heartbeat == null;
        }
    });

    function processQueries() {

        // set currency to usd
        sendMessage('sendMessage',{"name": "get-currency","version": "5.0","body": { "name": "USD" }});

        // subscribe to position change
        // {"name":"subscribeMessage","request_id":"s_161","local_time":11693,"msg":{"name":"candle-generated","params":{"routingFilters":{"active_id":1,"size":1}}}}
        
        // subscribe('subscribeMessage', {"name":"portfolio.order-changed","version":"2.0","params":{"routingFilters":{"user_id":userId,"instrument_type":"crypto"}}});
        // subscribe('subscribeMessage', {"name":"portfolio.position-changed","version":"3.0","params":{"routingFilters":{"user_id":userId,"user_balance_id":userBalanceAccount,"instrument_type":"crypto"}}});

        // get profile
        // sendMessage('sendMessage',{"name":"core.get-profile","version":"1.0","body":{}});

        // get balance
        // await syncedMessage({"name":"get-balances","version":"1.0","body":{"types_ids":[1,4,2],"tournaments_statuses_ids":[3,2]}});
    }

    async function getAccountInfo() {
        let response = await syncedMessage({
            "name": "get-balances",
            "version": "1.0",
            "body": {
                "types_ids": [
                    1,
                    4,
                    2
                ],
                "tournaments_statuses_ids": [
                    3,
                    2
                ]
            }
        });

        let info = {

        };

        for (var i = 0; i < response.msg.length; i++) {
            let type = response.msg[i].type;

            switch (type) {
                case 4:
                    info['sandbox'] = response.msg[i];
                    break;
                default:
                    info['real'] = response.msg[i];
                    break;
            }
        }

        return info;
    }

    async function sleep(ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    async function syncedMessage(msg) {
        return await new Promise(async (resolve) => {
            let requestId = sendMessage('sendMessage', msg);
            let foundIt = false;

            // console.log('waiting for reply... ');
            while(foundIt == false) {
                await sleep(10);
                if(requestLogs[requestId]) {
                    // console.log('replied!');
                    foundIt = true;
                }
            }

            resolve(requestLogs[requestId]);
        });
    }

    async function waitForLogin() {
        return await new Promise(async (resolve) => {
            console.log('logging in... ');
            while(isLoggedOn == false) {
                await sleep(100);
            }
            console.log('logged in!');
            resolve(true);
        });
    }


    async function closePositions() {
        let response = await syncedMessage({"name":"portfolio.get-positions","version":"4.0","body":{"offset":0,"limit":30,"user_balance_id":userBalanceAccount,"instrument_types":["crypto"]}});
        let positions = response.msg.positions;

        for (var i = 0; i < positions.length; i++) {

            for(var e in positions[i].raw_event) {
                if(positions[i].raw_event[e].id != undefined)
                    if(positions[i].raw_event[e].instrument_id == iqOptionSymbol)
                        if(positionIdsIndex[positions[i].raw_event[e].id] == undefined) {
                            positionIdsIndex[positions[i].raw_event[e].id] = true;
                            positionIds.push(positions[i].raw_event[e].id);
                        }
            }
        }

        let closingMsg = await syncedMessage({"name":"close-position-batch","version":"1.0","body":{"position_ids":positionIds}});

        console.log(closingMsg);
    }

    async function orderPositions() {
        // let limitPrice = 0.0;
        let limitPrice = closingPrice;

        let orderMsg = await syncedMessage({
            "name":"place-order-temp",
            "version":"4.0",
            // "body":{
            //     "user_balance_id":userBalanceAccount,
            //     "client_platform_id":9,"instrument_type":"crypto","instrument_id":"BTCUSD-L",
            //     "side":signal,
            //     "type":"market",
            //     "amount":qty.toString(),
            //     "leverage":100,"limit_price":0.0,"stop_price":0.0,"auto_margin_call":true,"use_trail_stop":true
            // }
            // With stop limit
            "body":{
                "user_balance_id":userBalanceAccount,
                "client_platform_id":9,"instrument_type":"crypto","instrument_id":iqOptionSymbol,
                "side":signal,
                "type":"limit", // "market" or "limit" use limit because broker is sneaky
                "amount":qty.toString(),
                "leverage":leverage,
                "limit_price":limitPrice, // if type is "market" price is 0.0 otherwise use close price
                "stop_price":0,"auto_margin_call":true,"use_trail_stop":false,
                "stop_lose_kind": "percent",
                "stop_lose_value": 300
            }
        });
        console.log(orderMsg);
    }

    async function explicitOrderPositions(qty) {

        let orderMsg = await syncedMessage({
            "name": "place-order-temp",
            "version": "4.0",
            "body": {
                "user_balance_id": userBalanceAccount,
                "client_platform_id": 9,
                "instrument_type": "crypto",
                "instrument_id": "BTCUSD",
                "side": "buy",
                "type": "market",
                "amount": qty.toString(),
                "leverage": 3,
                "limit_price": 0.0,
                "stop_price": 0.0,
                "auto_margin_call": false,
                "use_trail_stop": false,
                "stop_lose_value": 95.0,
                "stop_lose_kind": "percent"
            }
        });

        console.log(orderMsg);
    }

    let isDigitalOption = false;

    async function getExpirationDigitalData(aid) {
        let infoMsg = await syncedMessage({
            "name": "get-top-assets",
            "version": "1.2",
            "body": {
                "instrument_type": "digital-option" // can be digital option, crypto
            }
        });

        var binaryOptions = {};

        for (var i = 0; i < infoMsg.msg.data.length; i++) {
            let active_id = infoMsg.msg.data[i].active_id;

            binaryOptions[active_id] = infoMsg.msg.data[i];
        }

        return {
            expired: Math.ceil(binaryOptions[aid].expiration.value/1000),
            value: (binaryOptions[aid].cur_price.value*1000000),
            diff: binaryOptions[aid].spread.value,
            percent: Math.ceil(binaryOptions[aid].spot_profit.value)-1,
        }
    }

    async function getExpirationBinaryData(aid) {

        if(isDigitalOption) {
            return await getExpirationDigitalData(aid);
        }

        let infoMsg = await syncedMessage({
            "name": "get-top-assets",
            "version": "1.2",
            "body": {
                "instrument_type": "binary-option" // can be digital option
            }
        });

        var binaryOptions = {};

        for (var i = 0; i < infoMsg.msg.data.length; i++) {
            let active_id = infoMsg.msg.data[i].active_id;

            binaryOptions[active_id] = infoMsg.msg.data[i];
        }

        if(binaryOptions[aid] == undefined) {
            isDigitalOption = true;
            return await getExpirationDigitalData(aid);
        }

        isDigitalOption = false;

        return {
            expired: Math.ceil(binaryOptions[aid].expiration.value/1000),
            value: (binaryOptions[aid].cur_price.value*1000000),
            spread: binaryOptions[aid].spread.value,
        }
    }

    async function callBinaryPosition(aid, percent, price) {
        let info = await getExpirationDigitalData(aid);
        let orderMsg = await syncedMessage({
            "name": "binary-options.open-option", // can be digital-options.open-option
            "version": "1.0",
            "body": {
                "user_balance_id": userBalanceAccount,
                "active_id": aid,
                "option_type_id": 3,
                "direction": "call",
                "expired": info.expired,
                "refund_value": 0,
                "price": price,
                "value": info.value, // price without decimal plus 2 decimal places
                "profit_percent": percent // get it from positions changed
            }
        });

        return orderMsg;
    }

    async function callDigitalPosition(aid, percent, price) {
        let orderMsg = await syncedMessage({
            "name": "digital-options.place-digital-option",
            "version": "2.0",
            "body": {
                "user_balance_id": userBalanceAccount,
                "instrument_id": globalExpirationData.instrument_id,
                "amount": price.toString(),
                "instrument_index": globalExpirationData.instrument_index,
                "asset_id": aid
            }
        });

        return orderMsg;
    }

    // might be expired or too much amount or something
    var multipleRetryLimit = 10;
    var multipleRetryCount = 0;
    var purchasingLimit = 10000;
    var stopAllProcess = false;
    var errorMessage = "";

    async function callDigitalPositionWithRetries(aid, percent, price, balance) {
        let priceMultiple =[];

        console.log({purchasing: price});

        let multipleOrders = Math.floor(price/purchasingLimit);

        for (var i = 0; i < multipleOrders; i++) priceMultiple.push(purchasingLimit);

        let remainder = price - (multipleOrders*purchasingLimit);

        if (remainder > 0) priceMultiple.push(remainder);

        console.log({priceMultiple})

        try {
            // Replenish balance first if balance is not enough
            if(price > balance) {
                let remainingBalance = balance;

                for (var i = 0; i < priceMultiple.length; i++) {
                    remainingBalance -= priceMultiple[i];

                    if(remainingBalance < 10000) {
                        await replenishBalance();
                    }

                    callDigitalPositionHigherLevel(aid, percent, priceMultiple[i]);
                }
            } else {
                // Call everything at once
                let orders = [];

                for (var i = 0; i < priceMultiple.length; i++) {
                    orders.push(callDigitalPositionHigherLevel(aid, percent, priceMultiple[i]));
                }

                await Promise.all(orders);
            }
        } catch(e) {
            errorMessage = e;
            stopAllProcess = true;
        }

        return ((globalExpirationData.expiration - Math.ceil(getUserTime()/1000)) + 4) * 1000;
    }

    async function callDigitalPositionHigherLevel(aid, percent, price) {
        let response = 80000;
        let orderPlaced = false;

        while(orderPlaced == false) {
            response = await callDigitalPosition(aid, percent, price);
            if(response.status == 2000) {
                orderPlaced = true;
                multipleRetryCount = 0;
            } else if(response.status == 5000 && multipleRetryCount < multipleRetryLimit) {
                console.log('retrying...');
                multipleRetryCount++;
                await getInstruments(aid);
                await sleep(800);
            } else {
                ws.close();
                console.log({response});
                throw new Error('An error occurred');
                break;
            }
        }

        // add 2 seconds since it keeps evaluating early and getting the wrong balance
        return ((globalExpirationData.expiration - Math.ceil(getUserTime()/1000)) + 4) * 1000;
    }

    async function callBinaryPositionWithRetries(aid, percent, price) {
        let orderPlaced = false;
        let response = 80000;

        console.log({purchasing: price});

        while(orderPlaced == false) {
            response = await callBinaryPosition(aid, percent, price);
            if(response.status == 0) {
                orderPlaced = true;
                // console.log({expiration: response.msg.exp - Math.ceil(getUserTime()/1000)});
            } else if(response.status == 4104) {
                console.log('retrying...');
                await sleep(800);
            } else {
                ws.close();
                console.log({response});
                throw new Error('An error occurred');
                break;
            }
        }

        // add 2 seconds since it keeps evaluating early and getting the wrong balance
        return ((response.msg.exp - Math.ceil(getUserTime()/1000)) + 2) * 1000;
    }

    async function getAllAssetInfo() {
        let response = await syncedMessage({
            "name": "digital-option-instruments.get-underlying-list",
            "version": "1.0",
            "body": {
                "filter_suspended": true
            }
        });

        var assetList = {};

        for (var i = 0; i < response.msg.underlying.length; i++) {
            let symbol = response.msg.underlying[i];

            assetList[symbol.name] = symbol;
        }

        return assetList;
    }

    async function getBalance(type) {
        let response = await getAccountInfo();

        return response[type].amount;
    }

    function parseInstrument(expirationData) {
        let instrument_id = null;

        for (var i = 0; i < expirationData.data.length; i++) {

            let strike = expirationData.data[i].strike;
            let direction = expirationData.data[i].direction;

            if(strike == 'SPT' && direction == 'call') {
                instrument_id = expirationData.data[i].symbol;
                break;
            }
        }

        return {
            instrument_index: expirationData.index,
            expiration: expirationData.expiration,
            generated_at: expirationData.generated_at,
            instrument_id
        };
    }

    function getDateFromTimeZone(timestamp) {
        let myOldDateObj = new Date(timestamp);
        let myTZO = 60*16;
        return new Date(myOldDateObj.getTime() + (60000*(myOldDateObj.getTimezoneOffset()+myTZO)));
    }

    async function getInstruments(aid) {
        let response = await syncedMessage({
            "name": "digital-option-instruments.get-instruments",
            "version": "1.0",
            "body": {
                "instrument_type": "digital-option",
                "asset_id": aid
            }
        });

        for (var i = 0; i < response.msg.instruments.length; i++) {
            let instrument = parseInstrument(response.msg.instruments[i]);

            // find the 1 min one
            if(instrument.instrument_id.match(/T1MCSPT/g)) {
                globalExpirationData = instrument;
            }
        }

        if(globalExpirationData == null) {
            let assets = await getAllAssetInfo();
            let enabledAssets = {};
            for(var i in assets) {
                let schedule = assets[i].schedule;
                let currentDate = getDateFromTimeZone(getUserTime());
                let enabled = false;

                for (var j = 0; j < schedule.length; j++) {
                    let fromDate = getDateFromTimeZone(schedule[j].open*1000);
                    let toDate = getDateFromTimeZone(schedule[j].close*1000);

                    if(currentDate > fromDate && currentDate < toDate) {
                        enabled = true;
                        break;
                    }
                }

                if(enabled) {
                    enabledAssets[i] = i;
                }
            }

            displaySpreadFromAssetList(enabledAssets);
            ws.close();
            throw new Error('Cannot find symbol, please pick one from the list');
        }

        return true;
    }

    async function replenishBalance() {

        return await syncedMessage({
                "name":"reset-training-balance",
                "version":"3.0",
        });

    }

    function getOptimizedDistributionPrice(capital, rewardPercent) {

        let multiplierInc = Math.ceil(1/rewardPercent)+1;

        let prices = []
        let pricesRaw = []
        let price = (capital/(multiplierInc/2));

        prices.push(Math.round(price));

        let temp = 1;

        while(Math.round(temp) > 0) {
            temp = price/multiplierInc;

            if(Math.round(temp) == 0) break;

            price = temp;
            prices.push(Math.round(price));
            pricesRaw.push(price);
        }

        prices.sort((a,b)=>{return a-b});
        pricesRaw.sort((a,b)=>{return a-b});

        let sum = prices.reduce((a, b) => { return a + b }, 0)

        if(sum > capital)  prices[prices.length - 1] -= sum-capital;
        if(sum < capital)  prices[prices.length - 1] += capital-sum;

        sum = prices.reduce((a, b) => { return a + b }, 0)

        let onePercent = (pricesRaw.length > 4) ? pricesRaw[pricesRaw.length-1-4] : pricesRaw[0];

        return {price: pricesRaw[0], prices, sum, onePercent};
    }

    async function createFunds(goalBalance) {
        let tries = Math.floor(initialBalance/20000);

        for (var i = 0; i < tries; i++) {
            goalBalance -= 20000;
            explicitOrderPositions(20000);
        }

        let moreTries = Math.ceil(goalBalance/20000);

        for (var i = 0; i < moreTries; i++) {
            goalBalance -= 10000;
            await replenishBalance();
            explicitOrderPositions(10000);
        }

        ws.close();
        throw new Error('please manually close from the website');
    }

    function displaySpreadFromAssetList(assetList) {
        let theList = [];

        for (var i in assetList) {
            // console.log(i);
            if(spreadListIndex[i] != undefined) {
                theList.push({name: i, 'priceSpread%': spreadListIndex[i]})
            } else if(spreadListIndex[i.replace('-OTC','')] != undefined) {
                theList.push({name: i, 'priceSpread%': spreadListIndex[i]})
            } else {
                theList.push({name: i, 'priceSpread%': 0})
            }
        }

        theList.sort((a,b)=>{return a['priceSpread%']-b['priceSpread%']})
        console.log({theList});

        return theList;
    }

    async function monitorStuff() {
        let accountType = userBalanceType;
        let initialBalance = await getBalance(accountType);
        let assets = await getAllAssetInfo();
        let symbol = argumentSymbol; // 'USDHKD-OTC' XRPUSD, BTCUSD, ETHUSD
        let symbolInfo = assets[symbol];

        if(symbolInfo == undefined) {
            displaySpreadFromAssetList(assets);
            ws.close();
            throw new Error('cannot find asset please pick one');
        }

        var aid = symbolInfo.active_id;
        let info = await getExpirationDigitalData(aid);
        var percent = info.percent;
        var price = 1 // minimum base after win tested with 0.1% of initial balance with the target of 1% of initial balance
        var gatheringSeconds = 175;
        var positionExpiration = 80000;
        var createStarted = getUserTime();
        var lastPosition = null;
        var multiplierIncrements = Math.ceil(1/(percent/100))+1; // calculate martingale multiplier (risk/reward + 1)
        var multiplier = 1; // 1 but change initial multiplier here if the last process stopped midway
        var casualMode = true; // true to not order when price fluctuates (use this if you want to leave it alone overnight)
        var maxStake = 0;

        // Set minimum base to 0.1% and 1% goal
        if(argumentStopProfit == "auto") {
            // price = Math.floor(initialBalance*0.001);
            price = getOptimizedDistributionPrice(initialBalance, percent/100).onePercent; // optimized minimum cost
            argumentStopProfit = Math.floor(initialBalance*0.01);
            casualMode = true;

        }

        if(argumentStopProfit == "infinite") {
            price = Math.floor(initialBalance*0.001);
            argumentStopProfit = Math.floor(initialBalance*10);
            casualMode = true;
        }

        // minimum is 1 there is no zero
        price = (price <= 0) ? 1 : price;

        // handle error
        if(isNaN(argumentStopProfit)) {
            console.log({
                symbol,
                currentBalance: initialBalance,
                argumentStopProfit
            });

            ws.close();
            throw new Error('Your goal is not a number.');
        }

        // subscribe to expirations
        subscribe('subscribeMessage', {
            "name": "digital-option-instruments.instrument-generated",
            "version": "1.0",
            "params": {
                "routingFilters": {
                    "instrument_type": "digital-option",
                    "asset_id": aid
                }
            }
        });

        await getInstruments(aid);

        // subscribe to candles
        subscribe('subscribeMessage', {"name":"candle-generated","params":{"routingFilters":{"active_id":aid,"size":1}}});
        await sleep(1000);

        if(symbolInfo.active_type == "Crypto")
            gatheringSeconds = 1;
        if(casualMode == true)
            gatheringSeconds = 1;

        lastOrder = getUserTime();
        displayStamp = getUserTime();
        suddenPriceStamp = getUserTime();

        let lastBalance = null;
        let diffPrice = null;

        // count statistics
        let priceFluctations = 0;
        let priceExpiry = 0;

        // if there are no positions yet place a position
        if (lastPosition == null) {
            console.log({action: 'initial order'})
            lastBalance = await getBalance(accountType);
            let response = callDigitalPositionWithRetries(aid, percent, Math.round(price*multiplier), lastBalance);
            positionExpiration = ((globalExpirationData.expiration - Math.ceil(getUserTime()/1000)) + 4) * 1000;
            createStarted = getUserTime();
            lastPosition = candleGenerated.close;
            maxStake = Math.max(maxStake, Math.round(price*multiplier))

            console.log({
                symbol,
                currentBalance: lastBalance,
                profit: Math.ceil(lastBalance - initialBalance),
                multiplierIncrements,
                multiplier,
                maxStake,
                action: "waiting..."
            })
        }

        // gather min and max for some seconds
        for (var i = 0; i < gatheringSeconds; i++) {
            await sleep(1000);

            if(candleGenerated == null) continue;

            console.log({secondsLeftAfterGather: (gatheringSeconds-i) });
        }

        let maxPrice = JSON.parse(JSON.stringify(globalMaxPrice));
        let minPrice = JSON.parse(JSON.stringify(globalMinPrice));

        while (true) {

            // calculate distance basis
            if (symbolInfo.active_type == "Crypto")
                diffPrice = info.diff/1.5;
            else
                diffPrice = (maxPrice-minPrice)*2;

            // if the latest position expire and its not a winning position multiply it by 2 the next time or reset back to 1
            if ((getUserTime() - createStarted) > positionExpiration) {
                console.log({action: 'order because of position expiry'})
                priceExpiry++;

                currentBalance = await getBalance(accountType);
                if(lastBalance > currentBalance)
                    multiplier *= multiplierIncrements;
                else
                    multiplier = 1;

                lastBalance = currentBalance;

                // stop trading, goal achieved
                if((Math.ceil(lastBalance - initialBalance)) >= argumentStopProfit) {
                    console.log({
                        symbol,
                        currentBalance: lastBalance,
                        profit: Math.ceil(lastBalance - initialBalance),
                        multiplierIncrements,
                        multiplier,
                        maxStake,
                        priceExpiry,
                        priceFluctations,
                        action: "waiting..."
                    })
                    console.log('goal achieved');
                    ws.close();
                    break;
                }

              /*  // stop trading, no more balance
                if(Math.round(price*multiplier) > lastBalance) {
                    console.log({
                        symbol,
                        currentBalance: lastBalance,
                        profit: Math.ceil(lastBalance - initialBalance),
                        multiplierIncrements,
                        multiplier,
                        maxStake,
                        priceExpiry,
                        priceFluctations,
                        action: "waiting..."
                    })
                    console.log('no more balance');
                    ws.close();
                    break;
                }*/

                // If its the last multiplier for the balanace go all in, since you cannot recover with the remaining balance at all
                if(Math.ceil(price*multiplier*multiplier) > lastBalance) {
                    console.log('this is last balance, going all in');
                    multiplier = 1;
                    price = Math.floor(lastBalance);
                }

                let response = callDigitalPositionWithRetries(aid, percent, Math.round(price*multiplier), lastBalance);
                positionExpiration = ((globalExpirationData.expiration - Math.ceil(getUserTime()/1000)) + 4) * 1000;
                createStarted = getUserTime();
                lastPosition = candleGenerated.close;
                maxStake = Math.max(maxStake, Math.round(price*multiplier))

                console.log({
                    symbol,
                    currentBalance: lastBalance,
                    profit: Math.ceil(lastBalance - initialBalance),
                    multiplierIncrements,
                    multiplier,
                    maxStake,
                    priceExpiry,
                    priceFluctations,
                    action: "waiting..."
                })

            // if there is a position and its less than 10% or over multiply it by 2 and order now.
            } else if ((candleGenerated.close <= (lastPosition-(diffPrice*0.1))) && casualMode == false) {
                if((getUserTime() - suddenPriceStamp) > 1000) {
                    console.log({action: 'order because of sudden price fluctuation'})
                    priceFluctations++;

                    multiplier *= multiplierIncrements;

                    lastBalance = await getBalance(accountType);

                    // stop trading, goal achieved
                    if((Math.ceil(lastBalance - initialBalance)) >= argumentStopProfit) {
                        console.log({
                            symbol,
                            currentBalance: lastBalance,
                            profit: Math.ceil(lastBalance - initialBalance),
                            multiplierIncrements,
                            multiplier,
                            maxStake,
                            priceExpiry,
                            priceFluctations,
                            action: "waiting..."
                        })
                        console.log('goal achieved');
                        ws.close();
                        break;
                    }

               /*     // stop trading, no more balance
                    if(Math.round(price*multiplier) > lastBalance) {
                        console.log({
                            symbol,
                            currentBalance: lastBalance,
                            profit: Math.ceil(lastBalance - initialBalance),
                            multiplierIncrements,
                            multiplier,
                            maxStake,
                            priceExpiry,
                            priceFluctations,
                            action: "waiting..."
                        })
                        console.log('no more balance');
                        ws.close();
                        break;
                    }*/

                    // If its the last multiplier for the balanace go all in, since you cannot recover with the remaining balance at all
                    if(Math.ceil(price*multiplier*multiplier) > lastBalance) {
                        console.log('this is last balance, going all in');
                        multiplier = 1;
                        price = Math.floor(lastBalance);
                    }

                    let response = callDigitalPositionWithRetries(aid, percent, Math.round(price*multiplier), lastBalance);
                    positionExpiration = ((globalExpirationData.expiration - Math.ceil(getUserTime()/1000)) + 4) * 1000;
                    createStarted = getUserTime();
                    lastPosition = candleGenerated.close;
                    suddenPriceStamp = getUserTime();
                    maxStake = Math.max(maxStake, Math.round(price*multiplier))

                    console.log({
                        symbol,
                        currentBalance: lastBalance,
                        profit: Math.ceil(lastBalance - initialBalance),
                        multiplierIncrements,
                        multiplier,
                        maxStake,
                        priceExpiry,
                        priceFluctations,
                        action: "waiting..."
                    })
                }
            } else if((getUserTime() - displayStamp) > 1000){
                displayStamp = getUserTime();
                console.log({
                    expiry: parseFloat(((positionExpiration - (getUserTime() - createStarted))/1000).toFixed(2)),
                })
            }

            // stop trading, goal achieved
            if((Math.ceil(lastBalance - initialBalance)) >= argumentStopProfit) {
                console.log('goal achieved');
                ws.close();
                break;
            }

            if(stopAllProcess) {
                console.log('an error occurred stop everything');
                console.log({errorMessage});
                ws.close();
                break;
            }

            await sleep(500);
        }
    }

    let spreadListIndex = {};

    async function getCryptoSpreads() {

        let assetsInfo = await syncedMessage({
            "name":"get-instruments",
            "version":"4.0",
            "body":{
                "type":"crypto"
            }
        });

        var aids = {};

        for(var i in assetsInfo.msg.instruments){
            if(!assetsInfo.msg.instruments[i].id.match(/\-L/g))
                aids[assetsInfo.msg.instruments[i].active_id] = assetsInfo.msg.instruments[i].id;
        }

        let infoMsg = await syncedMessage({
            "name": "get-top-assets",
            "version": "1.2",
            "body": {
                "instrument_type": "crypto"
            }
        });

        for (var i = 0; i < infoMsg.msg.data.length; i++) {
            let active_id = infoMsg.msg.data[i].active_id;
            let spread = infoMsg.msg.data[i].spread.value;
            let cur_price = infoMsg.msg.data[i].cur_price.value;

            if(aids[active_id] != undefined) {
                spreadListIndex[aids[active_id]] = parseFloat(spread/cur_price).toFixed(5)*1;
            }
        }
    }

    async function getDigitalSpreads() {

        let assetsInfo = await syncedMessage({
            "name":"get-instruments",
            "version":"4.0",
            "body":{
                "type":"forex"
            }
        });

        var aids = {};

        for(var i in assetsInfo.msg.instruments){
            aids[assetsInfo.msg.instruments[i].active_id] = assetsInfo.msg.instruments[i].id;
        }

        let infoMsg = await syncedMessage({
            "name": "get-top-assets",
            "version": "1.2",
            "body": {
                "instrument_type": "digital-option" // can be digital option, crypto
            }
        });

        for (var i = 0; i < infoMsg.msg.data.length; i++) {
            let active_id = infoMsg.msg.data[i].active_id;
            let spread = infoMsg.msg.data[i].spread.value;
            let cur_price = infoMsg.msg.data[i].cur_price.value;

            if(aids[active_id] != undefined) {
                spreadListIndex[aids[active_id]] = parseFloat(spread/cur_price).toFixed(5)*1;
            }
        }
    }

    await waitForLogin();

    // display crypto and forex spreads
    await getCryptoSpreads();
    await getDigitalSpreads();

    console.log('Pick the highest spread for binary and lowest spread for crypto');
    displaySpreadFromAssetList(spreadListIndex);

    // display account info
    let accountInfo = await getAccountInfo();
    console.log({userBalanceType});

    userBalanceAccount = accountInfo[userBalanceType].id;

    if (signal == 'buy' && newPosition == '0')
        signal = 'buyAll'

    if (signal == 'sell' && newPosition == '0')
        signal = 'sellAll'

    let info = {};

    switch(signal) {
        case 'sellAll':
        case 'buyAll':
            await closePositions();
            break;
        case 'buy':
        case 'sell':
            await orderPositions();
            break;
        case 'call':
            await monitorStuff();
            break;
        case 'info':
            let assets = await getAllAssetInfo();
            info = await displaySpreadFromAssetList(assets);
            break;
    }

    console.log('done closing');
    ws.close(); // disconnect after done

    return info;
}

module.exports = {
  handleIqOption
};