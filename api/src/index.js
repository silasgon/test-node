const api = require('./api');
const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.listen(8001);

app.get('/', await (request, response) => {
    return 
})