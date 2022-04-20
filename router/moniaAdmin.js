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
app.post('/user/create', auth, isMoniaAdmin, controller.createUser);
app.put('/phone/:username', auth, isMoniaAdmin, controller.updatePhoneUsers);
app.put('/username/:username', auth, isMoniaAdmin, controller.changeUsername);
app.put('/password/:username', auth, isMoniaAdmin , controller.changePassword);
app.delete('/user/delete', auth, isMoniaAdmin, controller.deleteUser);

module.exports = app;