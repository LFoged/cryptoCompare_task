'use strict';

const { getMinHistAPI, printResults, subPairWS } = require('./services/index.js');
const { formatResults } = require('./helpers/index.js');

const ACTION = 'SubAdd';
const CHANNELS = ['0~Coinbase~BTC~USD'];
const CONNECT_TIME_MS = 60000;

const init = async () => {
    try {
        const WSData = await subPairWS({ action: ACTION, subs: CHANNELS, closeMs: CONNECT_TIME_MS });
        // convert timestamp from ms to s, and include full current second
        const APIData = await getMinHistAPI({ timestamp: Math.ceil(Date.now() / 1000), limit: 1 });
        const formattedResults = formatResults({ WSData, APIData: APIData.Data.Data });

        formattedResults.forEach(printResults);
    } catch (error) {
        console.log(error);
    }
};

init();
