const express = require('express');
const app = express();

// middlware

// 


// controller
const controller = require('../controller/targetContact');
// 


app.post('/' ,controller.assignUserToTarget );


module.exports = app;