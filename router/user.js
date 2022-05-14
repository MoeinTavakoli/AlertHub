const express = require('express');
const app = express();


// midlleware
const schemaValidator = require('../middleware/validator/user');
const auth = require('../middleware/auth');
const checkPermission = require('../middleware/checkPermission');
const defineAccessRoles = require('../middleware/accessRoles');
// 


// controller
const controller = require('../controller/user');
// 
app.get('/info' ,auth ,defineAccessRoles,  controller.getAllUsers);
app.post('/login', schemaValidator.login, controller.login);
app.post('/create', schemaValidator.createUser, auth, checkPermission, controller.createUser);
app.delete('/delete/:username', auth, checkPermission, controller.deleteUser);
app.put('/phone/:userID', schemaValidator.updatePhone, auth, checkPermission, controller.updatePhoneNumber);
app.put('/password/:userID', schemaValidator.updatePassword, auth, checkPermission, controller.updatePassword);
app.put('/username/:userID', schemaValidator.updateUsername, auth, checkPermission, controller.updateUsername);


module.exports = app;