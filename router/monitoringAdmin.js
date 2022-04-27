const express = require('express');
const app = express();


// middleware
const schemaValidator = require('../middleware/validator/monitorAdmin');
const auth = require('../middleware/auth');
const isMonitorAdmin = require('../middleware/isMonitorAdmin');
const checkRole = require('../middleware/checkRole');
// 


// controller
const controller = require('../controller/monitoringAdmin');
// 



app.post('/login', schemaValidator.login, controller.login);
app.post('/user/create', schemaValidator.createUser, auth, isMonitorAdmin, checkRole, controller.createMonitoringAdmin);
app.delete('/delete/:username', auth, isMonitorAdmin, checkRole, controller.deleteMonitoringAdmin);
app.put('/username/:username', schemaValidator.changeUsername, auth, isMonitorAdmin, checkRole, controller.changeUsername);
app.put('/password/:username', schemaValidator.changePassword, auth, isMonitorAdmin, checkRole, controller.changePassword);
app.put('/phone/:username', schemaValidator.changePhoneNumber, auth, isMonitorAdmin, checkRole, controller.updatePhoneNumber);


module.exports = app;