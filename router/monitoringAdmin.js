const express = require('express');
const app = express();


// middleware

// 


// controller
const controller = require('../controller/monitoringAdmin');
// 




app.post('/user/create', controller.createMonitoringAdmin);
app.delete('/user/delete/:username', controller.deleteMonitoringAdmin);
app.put('/user/update/username/:username', controller.changeUsername);

module.exports = app;