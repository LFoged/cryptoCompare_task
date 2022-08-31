'use strict';

const WebSocket = require('ws');
require('dotenv').config();
const { formatWSData } = require('../helpers/index.js');

const WS_URL = `wss://streamer.cryptocompare.com/v2?api_key=${process.env.API_KEY}`;

exports.subPairWS = ({ action = '', subs = [''], closeMs = 0 }) => new Promise((resolve, reject) => {
    const rawData = [];
    const ccStreamer = new WebSocket(WS_URL);
    
    ccStreamer.on('open', () => {
        ccStreamer.send(JSON.stringify({ action, subs }));
        setTimeout(() => ccStreamer.close(), closeMs).unref();
    });
    ccStreamer.on('message', (data) => rawData.push(JSON.parse(data.toString('utf8'))));
    ccStreamer.on('close', () => resolve(formatWSData(rawData)));
    ccStreamer.on('error', reject);
});
