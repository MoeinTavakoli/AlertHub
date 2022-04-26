const express = require('express');
const app = express();


// middleware
const schemaValidator = require('../middleware/validator/monitorAdmin');
const auth = require('../middleware/auth');
const isMonitorAdmin = require('../middleware/isMonitorAdmin');
// 


// controller
const controller = require('../controller/monitoringAdmin');
// 



app.post('/login', schemaValidator.login, controller.login);
app.post('/create', schemaValidator.createUser, auth, isMonitorAdmin, controller.createMonitoringAdmin);
app.delete('/delete/:username', auth, isMonitorAdmin, controller.deleteMonitoringAdmin);
app.put('/username/:username', schemaValidator.changeUsername, auth, isMonitorAdmin, controller.changeUsername);
app.put('/password/:username', schemaValidator.changePassword, auth, isMonitorAdmin, controller.changePassword);
app.put('/phone/:username', schemaValidator.changePhoneNumber, auth, isMonitorAdmin, controller.updatePhoneNumber);


module.exports = app;