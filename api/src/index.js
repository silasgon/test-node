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
  .then(function (dados) {

    console.log(dados);
    
    return response.json(dados.data)
  })
  .catch(function (error) {

    console.log(error);
    
    return response.json(error);
  })

});

// histórico da ação
app.get('/history', (request, response) => {
  axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}`)
.then(function (dados) {

  console.log(dados);

  return response.json(dados.data)
})
.catch(function (error) {

  console.log(error);
  
  return response.json(error);
})

});

// Comparação entre ações


// Projeção de ganhos com dados do passado




app.listen(8080,() => console.log("Server is running"))

