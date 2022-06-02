const axios = require('axios');

const apiKey = 'KZ6HWGQUPBGCNAYI'
const simbol = 'IBM'

const getUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${simbol}&interval=5min&apikey=${apiKey}`

axios.get(getUrl).then((res)=>console.log(res.data)).catch(console.error);
