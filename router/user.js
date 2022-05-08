const express = require('express');
const app = express();


// midlleware
const schemaValidator = require('../middleware/validator/user');
const auth = require('../middleware/auth');
const checkPermission = require('../middleware/checkPermission');
// 


// controller
const controller = require('../controller/user');
// 

app.post('/login', schemaValidator.login, controller.login);
app.post('/create', schemaValidator.createUser, auth, checkPermission, controller.createUser);
app.delete('/delete/:username', auth, checkPermission, controller.deleteUser);
app.put('/phone/:username', schemaValidator.updatePhone, auth, checkPermission, controller.updatePhoneNumber);
app.put('/password/:username', schemaValidator.updatePassword, auth, checkPermission, controller.updatePassword);
app.put('/username/:username', schemaValidator.updateUsername, auth, checkPermission, controller.updateUsername);


module.exports = app;