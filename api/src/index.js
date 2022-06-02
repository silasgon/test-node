const api = require('./services');
const axios = require('axios')
const { request, response } = require('express');
const express = require('express');

const app = express();

const apiKey = 'KZ6HWGQUPBGCNAYI'
const simbol = 'IBM'

app.use(express.json());

// função verificar simbolos


// Preço atual da ação
app.get('/quote', (request, response) => {
    axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}`)
  .then(function (data) {
    return response.json(data)
    console.log(data);
  })
  .catch(function (error) {
    return response.json(error)
    console.log(error);
  })

});

// histórico da ação

// Comparação entre ações


// Projeção de ganhos com dados do passado




app.listen(8080);

