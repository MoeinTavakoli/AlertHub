const express = require('express');
const app = express();


// middleware

// 


// controller
const controller = require('../controller/monitoringAdmin');
// 




app.post('/user/create', controller.createMonitoringAdmin);
app.delete('/user/delete/:username', controller.deleteMonitoringAdmin);


module.exports = app;