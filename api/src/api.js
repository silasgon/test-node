const axios = require('axios');

const api = axios.create({
    baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=G7B0POVE0HEXIJ2E'
});

module.exports = api;