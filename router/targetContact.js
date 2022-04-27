const express = require('express');
const app = express();

// middlware
const verifyToken = require('../middleware/auth');
const isAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/targetContact');
const checkRole = require('../middleware/checkRole');
// 


// controller
const controller = require('../controller/targetContact');
// 


app.post('/create', validator.adduserToTarget, verifyToken, isAdmin, checkRole, controller.assignUserToTarget);
app.delete('/delete', validator.removeUserToTarget, verifyToken, isAdmin, checkRole, controller.deleteUserToTarget);


module.exports = app;