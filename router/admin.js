const express = require('express');
const app = express();


// midlleware
const validator = require('../middleware/validator/admin');
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
// 


// controller
const controller = require('../controller/admin');
// 

app.post('/login', validator.login, controller.login);
app.put('/phone/:username', verifyToken , IsAdmin ,   controller.updatePhoneUsers);
app.post('/create', controller.createUser);


module.exports = app;