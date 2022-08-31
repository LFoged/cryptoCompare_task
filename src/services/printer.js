'use strict';

exports.printResults = ({ timestamp, timeReadable, volWS, volAPI, volDiff, volDiffReadable }) => {
    console.log(`
    -------------------------------------------------------
    Time: ${timeReadable} | Timestamp: ${timestamp}

    Total streaming (WS) minute quantity: ${volWS}
    Total historical (API) minute volume: ${volAPI}
    Total volume difference: ${volDiff}

    Summary: ${volDiffReadable}
    -------------------------------------------------------
    `);
};
