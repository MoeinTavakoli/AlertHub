const express = require('express');
const app = express();

// middlware
const verifyToken = require('../middleware/auth');
const isAdmin = require('../middleware/checkAdmin');
// 


// controller
const controller = require('../controller/targetContact');
// 


app.post('/', verifyToken, isAdmin, controller.assignUserToTarget);
app.delete('/', verifyToken, isAdmin, controller.deleteUserToTarget);


module.exports = app;