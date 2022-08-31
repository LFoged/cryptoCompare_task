'use strict';

const { getMinHistAPI } = require('./reqHTTP.js');
const { printResults } = require('./printer.js');
const { subPairWS } = require('./reqWS.js');

module.exports = {
    getMinHistAPI,
    printResults,
    subPairWS,
};
