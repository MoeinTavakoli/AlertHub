const express = require('express');
const app = express();


// midlleware
const verifyToken  = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
// 


// controller
const controller = require('../controller/admin');
// 

app.post('/login', controller.login);
app.put('/update/phone/:username', verifyToken , IsAdmin ,   controller.updatePhoneUsers);


module.exports = app;