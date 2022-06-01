const axios = require('axios');

const apiKey = 'KZ6HWGQUPBGCNAYI'

const getUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`

const getAll = () => axios.get(getUrl).then((res)=>console.log(res.data)).catch(console.error);

getAll()
