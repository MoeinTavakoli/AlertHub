const express = require('express');
const app = express();


// middleware
const schemaValidator = require('../middleware/validator/monitorAdmin');
// 


// controller
const controller = require('../controller/monitoringAdmin');
// 




app.post('/user/create', schemaValidator.createUser, controller.createMonitoringAdmin);
app.delete('/user/delete/:username', schemaValidator.deleteUser, controller.deleteMonitoringAdmin);
app.put('/user/update/username/:username', schemaValidator.changeUsername, controller.changeUsername);
app.put('/user/update/password/:username', schemaValidator.changePassword, controller.changePassword);
app.put('/user/update/phone/:username', controller.updatePhoneNumber);


module.exports = app;