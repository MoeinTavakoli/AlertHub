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
app.post('/create', auth, checkPermission, controller.createUser);
app.delete('/delete/:username', auth, checkPermission, controller.deleteUser);
app.put('/phone/:username', auth, checkPermission, controller.updatePhoneNumber);
app.put('/password/:username', auth, checkPermission, controller.updatePassword);
app.put('/username/:username', auth, checkPermission, controller.updateUsername);


module.exports = app;