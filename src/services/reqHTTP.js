'use strict';

const axios = require('axios').default;
require('dotenv').config();

const URL = 'https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&e=Coinbase';

exports.getMinHistAPI = async ({ timestamp = 0, limit = 1 }) => {
    const { data } = await axios.get(`${URL}&toTs=${timestamp}&limit=${limit}`, {
        headers: { authorization: `Apikey ${process.env.API_KEY}` },
    });

    return data;
};
