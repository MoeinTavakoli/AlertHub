const express = require("express");
const app = express();

const webhookController = require('../controller/webhook');


app.post('/webhook', webhookController);



module.exports = app;