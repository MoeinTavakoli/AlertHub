const { Router } = require('express');
const app = Router();

// controller
const alertsController = require('../controller/alert.js');
const webhookController = require('../controller/webhook');

// 


// routes
app.get('/alerts', alertsController);
// app.post('/webhook', webhookController);
// 

module.exports = app;