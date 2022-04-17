const { Router } = require('express');
const app = Router();


// middleware
const auth = require('../middleware/auth');
const validator = require('../middleware/validator/user');
// 


// controller
const controller = require('../controller/user');
// 




// routes
app.post('/signup', validator.signup, controller.signup);
app.post('/login', validator.login, controller.login);
app.put('/phone', validator.UpdatePhoneNumber, auth, controller.changePhoneNumber);
// 

module.exports = app;