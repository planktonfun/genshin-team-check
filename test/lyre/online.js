var groupOfKeysToBeSent = [];
var groupOfKeysToBePlayed = [];
var keyStartTimeStamp = null;
var reconnecting = false;
var connected = false;
let timeSync= null;
let timeOffset = null;
let currentTime = Date.now();
let pingTime = null;
let requestLogs = {};
let login, register;

addEvent(document, "keydown", function (e) {
    e = e || window.event;

    simulateKeyPress(e);


    groupOfKeysToBeSent.push(e.keyCode);

    if(keyStartTimeStamp != null) {
        let delays = (Date.now() - keyStartTimeStamp);
        if(delays < 1000) {
            groupOfKeysToBeSent.push(`d${delays}`);
        }
    }

    keyStartTimeStamp = Date.now();

});

// timeStamp that is synced from server
function getUserTime() {
    if(timeSync != null) {
        return Date.now() - timeOffset; // should be Date.now
    }

    return Date.now(); // should be Date.now
}

function getLocalTime() {
    return Math.round((getUserTime()-currentTime)/10); // should be Date.now
}


(async function() {
    // const domain = 'ws://ip172-18-0-22-c6q00vnqf8u0008cugj0-1880.direct.labs.play-with-docker.com'; // 330 ms
    // const domain = 'wss://1880-amaranth-termite-bpw5rs2p.ws-us23.gitpod.io'; // 301 ms
    const domain = 'wss://game-dev-node.herokuapp.com'; // 260 ms
    // const domain = 'ws://localhost:1880'; // 0 ms
    var ws = await connectToServer();
    const user = uuidv4();
    const sendIntervalPerSecond = 10;

    async function sleep(ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }

    // to save bandwidth make sending keys by groups in a specific interval
    setInterval(()=>{
        if(groupOfKeysToBeSent.length > 0) {

            if ($('#online-self').prop('checked') == true)
                sendMessageToMe(groupOfKeysToBeSent.join(','));
            if ($('#online-everyone').prop('checked') == true)
                sendMessageToEveryone(groupOfKeysToBeSent.join(','));
            if ($('#online-other').prop('checked') == true)
                sendMessageToEveryoneElse(groupOfKeysToBeSent.join(','));

            groupOfKeysToBeSent = [];
        }
    }, 1000/sendIntervalPerSecond);

    sendMessage = (messageBody) => {
        try {
            ws.send(JSON.stringify({payload: messageBody, localTime:getLocalTime()}));
        } catch(e) {
            console.log(e);
            reconnect();
        }
    };

    sendMessageToEveryoneElse = (evt) => {
        const messageBody = { id: user, key: evt, type: 'other' };

        sendMessage(messageBody);
    };

    sendMessageToEveryone = (evt) => {
        const messageBody = { id: user, key: evt, type: 'everyone' };

        sendMessage(messageBody);
    };

    sendMessageToMe = (evt) => {
        const messageBody = { id: user, key: evt, type: 'self' };

        sendMessage(messageBody);
    };

    ws.onopen = async () => {
        reconnecting = false;
        await sendMessageToMe(['hi'].join(','));
    }

    ws.onclose = async () => {
        await reconnect();
    }

    ws.onmessage = async (webSocketMessage) => {
        const response = JSON.parse(webSocketMessage.data);
        const messageBody = JSON.parse(response.payload);
        console.log({messageBody});

        if(response.requestId != undefined)
            requestLogs[response.requestId] = response;

        if (messageBody['pong'] != undefined) {

            latency = Date.now() - pingTime;
            console.log({latency});
            $('.online-status').text(` connected (${latency} ms)`)
            return;
        }

        if (messageBody['heartBeat'] != undefined) {

            timeSync = messageBody['heartBeat'];
            timeOffset = Date.now()-timeSync; // should be Date.now

            console.log({now: Date.now(), server: timeSync, diff: getUserTime()-timeSync, localTime: getLocalTime()});

            return;
        }

        if (messageBody.type == "other" && messageBody.sender == user) {
            return;
        }

        if(messageBody.key != undefined) {
            let keysToPress = messageBody.key.split(',');

            for (var i = 0; i < keysToPress.length; i++) {
                groupOfKeysToBePlayed.push(keysToPress[i]);
            }
        }
    };

    async function reconnect() {
        var ws2 = await connectToServer();
        ws2.onopen = ws.onopen;
        ws2.onmessage = ws.onmessage;
        ws2.onclose = ws.onclose;
        ws2.onerror = ws.onerror;
        ws = ws2
    }

    async function playLoop() {
        if(groupOfKeysToBePlayed.length > 0) {
            groupOfKeysToBePlayedCopy = [...groupOfKeysToBePlayed];
            groupOfKeysToBePlayed = [];
            for (var i = 0; i < groupOfKeysToBePlayedCopy.length; i++) {
                if(/d(\d+)/.test(groupOfKeysToBePlayedCopy[i])) {
                    await sleep(groupOfKeysToBePlayedCopy[i].match(/d(\d+)/)[1]*1);
                } else {
                    await simulateKeyPress({
                        keyCode: groupOfKeysToBePlayedCopy[i]
                    });
                }
            }
        }

        await setTimeout(playLoop, 1000/60);
    };

    playLoop();

    async function connectToServer() {
        const ws = new WebSocket(domain + "/ws/game");

        $('.online-status').text(' connecting..')

        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {

                if(ws.readyState === 1) {
                    clearInterval(timer);
                    $('.online-status').text(' connected')
                    resolve(ws);
                }

                if(ws.readyState === 3) {
                    clearInterval(timer);
                    $('.online-status').text(' retrying..');
                    reject('cant connect!');
                }
            }, 1000);
        }).catch((e) => {
            return connectToServer();
        });
    }

    function uuidv4() {
        if (localStorage.getItem('uuid') == null)
            localStorage.setItem('uuid', generateUuid())
        return localStorage.getItem('uuid');
    }

    function generateUuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    async function syncedMessage(msg) {
        return await new Promise(async (resolve) => {
            let requestId = sendMessage(msg);
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

    login = async function() {
        // await register();
        const messageBody = { name: 'authenticate', ssid: uuidv4(),  type: 'self' };
        let response = await syncedMessage(messageBody);

        if(response.status == 500) {
            authenticated = false;
            throw new Error(response.error);
        }

        authenticated = true;
        let message = JSON.parse(response.payload)

        console.log({loginResponse: message.result});
    }

    register = async function(person) {
        const messageBody = { name: 'register', ssid: uuidv4(), user: { name: person }, type: 'self' };
        let response = await syncedMessage(messageBody);

        if(response.status == 500) {
            throw new Error(response.error);
        }

        let message = JSON.parse(response.payload)

        console.log({registerResponse: message.result});
    }

    setInterval(function() {
      pingTime = Date.now();
      const messageBody = { id: user, ping:'ping', type: 'self' };

       sendMessage(messageBody);
    }, 2000);

})();

setTimeout(()=>{ register() }, 2000);
setTimeout(()=>{ login() }, 5000);