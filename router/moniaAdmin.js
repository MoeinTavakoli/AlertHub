const express = require('express');
const app = express();


// midlleware
const auth = require('../middleware/auth');
const isMoniaAdmin = require('../middleware/isMoniaAdmin');
const schemaValidator = require('../middleware/validator/moniaAdmin');
// 


// controller
const controller = require('../controller/moniaAdmin');
// 

app.post('/login', schemaValidator.login, controller.loginMoniaAdmin);
app.post('/user/create', schemaValidator.createUser, auth, isMoniaAdmin, controller.createUser);
app.put('/phone/:username', schemaValidator.changePhoneNumber, auth, isMoniaAdmin, controller.updatePhoneUsers);
app.put('/username/:username', schemaValidator.changeUsername, auth, isMoniaAdmin, controller.changeUsername);
app.put('/password/:username', auth, schemaValidator.changePassword, isMoniaAdmin, controller.changePassword);
app.delete('/user/delete', schemaValidator.removeUser, auth, isMoniaAdmin, controller.deleteUser);

module.exports = app;