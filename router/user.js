const { Router } = require('express');
const app = Router();


// middleware
const auth = require('../middleware/auth');
// 


// controller
const controller = require('../controller/user');
// 




// routes
app.post('/signup', controller.signup);
app.post('/login', controller.login);
app.put('/update', auth, controller.changePhoneNumber);
// 

module.exports = app;