const express = require('express');
const app = express();


const webhookService = require('../service/webhook');


app.post('/', webhookService);


module.exports = app;