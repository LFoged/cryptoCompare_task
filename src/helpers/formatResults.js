'use strict';

exports.formatResults = ({ WSData = {}, APIData = [] }) => APIData
    .filter((dataObj) => WSData[new Date(dataObj.time * 1000).getMinutes()])
    .map(({ time, volumefrom }) => {
        const timeAsDate = new Date(time * 1000);
        const totalVolWS = WSData[timeAsDate.getMinutes()].totalQ;
        const volDiff = Math.abs(totalVolWS - volumefrom);
        
        return {
            volDiff,
            timestamp: time,
            timeReadable: timeAsDate.toString(),
            volWS: totalVolWS,
            volAPI: volumefrom,
            volDiffReadable: `The quantity captured from streaming was ${volDiff} ${totalVolWS > volumefrom ? 'more' : 'less'} than the volume retrieved from the API.`,
        };
    });
