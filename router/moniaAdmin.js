const express = require('express');
const app = express();


// midlleware
const auth = require('../middleware/auth');
const isMoniaAdmin = require('../middleware/isMoniaAdmin');
const schemaValidator = require('../middleware/validator/moniaAdmin');
const checkRole = require('../middleware/checkRole');
// 


// controller
const controller = require('../controller/moniaAdmin');
// 

app.post('/user/create', schemaValidator.createUser, auth, isMoniaAdmin, checkRole, controller.createUser);
app.put('/phone/:username', schemaValidator.changePhoneNumber, auth, isMoniaAdmin, checkRole, controller.updatePhoneUsers);
app.put('/username/:username', schemaValidator.changeUsername, auth, isMoniaAdmin, checkRole, controller.changeUsername);
app.put('/password/:username', auth, schemaValidator.changePassword, isMoniaAdmin, checkRole, controller.changePassword);
app.delete('/user/delete', schemaValidator.removeUser, auth, isMoniaAdmin, checkRole, controller.deleteUser);

module.exports = app;