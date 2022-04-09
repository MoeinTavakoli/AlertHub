const { Router } = require('express');
const app = Router();


// middleware

// 


// controller
const controller = require('../controller/user');
// 




// routes
app.post('/signup', controller.signup);
app.post('/login', controller.login);
// 

module.exports = app;