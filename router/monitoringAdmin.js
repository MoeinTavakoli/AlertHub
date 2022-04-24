const express = require('express');
const app = express();


// middleware
const validator = require('../middleware/validator/monitorAdmin');
// 


// controller
const controller = require('../controller/monitoringAdmin');
// 




app.post('/user/create', validator.createUser, controller.createMonitoringAdmin);
app.delete('/user/delete/:username', controller.deleteMonitoringAdmin);
app.put('/user/update/username/:username', controller.changeUsername);
app.put('/user/update/password/:username', controller.changePassword);
app.put('/user/update/phone/:username', controller.updatePhoneNumber);


module.exports = app;