const { Router } = require('express');
const app = Router();

// controller
const alertsController = require('../controller/alert.js');
// 


// routes
app.get('/alerts', alertsController);
// 

module.exports = app;