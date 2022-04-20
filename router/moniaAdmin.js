const express = require('express');
const app = express();


// midlleware
const auth = require('../middleware/auth');
const isMoniaAdmin = require('../middleware/isMoniaAdmin');
// 


// controller
const controller = require('../controller/moniaAdmin');
// 

app.post('/login', controller.loginMoniaAdmin);
app.put('/phone/:username', auth, isMoniaAdmin, controller.updatePhoneUsers);
app.post('/user/create', auth, isMoniaAdmin, controller.createUser);
app.delete('/user/delete', auth, isMoniaAdmin, controller.deleteUser);

module.exports = app;