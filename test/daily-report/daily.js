require('dotenv').config();
const { handleIqOption } = require('./library.js');

(async function run() {
	let signalsInfo = {
		close: 0,
		qty: 0,
		signal: 'info',
		newPosition: '-1',
		trueSignal: 'info',
		pair: 'BTCUSDT'
	}

	let signals = {
		close: 0,
		qty: 0,
		signal: 'call',
		newPosition: '-1',
		trueSignal: 'info',
		pair: 'BTCUSDT'
	}

	let user = process.env.IO_USER;
	let ssid = process.env.IO_SSID;
	let userBalanceType = 'sandbox';
	let symbol = 'BTCUSD';
	let leverage = 3;
	let signalClose = 0;
	let digitalSymbol = null;
	let stopAtProfit = 'auto';
	let maxPercent = 8128;

	var options = await handleIqOption(signalsInfo, symbol, ssid, userBalanceType, maxPercent, leverage, signals.close, digitalSymbol, stopAtProfit);

	// get available digital symbol
	digitalSymbol = options[0].name;

	console.log({digitalSymbol});

	var options = await handleIqOption(signals, symbol, ssid, userBalanceType, maxPercent, leverage, signals.close, digitalSymbol, stopAtProfit);
	console.log({options, user});

})();