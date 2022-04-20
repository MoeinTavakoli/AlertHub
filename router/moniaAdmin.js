const express = require('express');
const app = express();


// midlleware

// 


// controller
const controller = require('../controller/moniaAdmin');
// 

app.post('/login', controller.loginMoniaAdmin);
app.put('/phone/:username', controller.updatePhoneUsers);
app.post('/create', controller.createUser);
app.delete('/user/delete' , controller.deleteUser);

module.exports = app;