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



app.post('/login', controller.login);
app.post('/user/create', schemaValidator.createUser, auth, isMonitorAdmin, controller.createMonitoringAdmin);
app.delete('/user/delete/:username', auth, isMonitorAdmin, controller.deleteMonitoringAdmin);
app.put('/user/update/username/:username', schemaValidator.changeUsername, auth, isMonitorAdmin, controller.changeUsername);
app.put('/user/update/password/:username', schemaValidator.changePassword, auth, isMonitorAdmin, controller.changePassword);
app.put('/user/update/phone/:username', auth, isMonitorAdmin, controller.updatePhoneNumber);


module.exports = app;