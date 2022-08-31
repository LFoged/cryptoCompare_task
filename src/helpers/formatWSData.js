'use strict';

exports.formatWSData = (rawData = []) => rawData.reduce((previous, current) => {
    const { RTS, Q } = current;

    if (!(RTS && Q)) {
        return previous;
    }
    // convert RTS timestamp (s -> ms (RTS * 1000)) to create JS date & get minute
    const RTSMinute = new Date(RTS * 1000).getMinutes();

    // @returns: { [min]: {data: [{}], totalQ: 0 } }
    return {
        ...previous,
        [RTSMinute]: !previous[RTSMinute]
            ? { data: [current], totalQ: Q }
            : {
                data: [...previous[RTSMinute].data, current],
                totalQ: Number(previous[RTSMinute].totalQ + Q),
            },
    };
}, {});
