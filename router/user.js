const express = require('express');
const app = express();


// midlleware
const auth = require('../middleware/auth');
const checkPermission = require('../middleware/checkPermission');
// 


// controller
const controller = require('../controller/user');
// 

app.post('/login', controller.login);
app.post('/create', auth,checkPermission, controller.createUser);

module.exports = app;