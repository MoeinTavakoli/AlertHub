const express = require('express');
const app = express();


// midlleware
// 


// controller
const controller = require('../controller/user');
// 

app.post('/login' , controller.login);

module.exports = app;