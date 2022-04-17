const express = require('express');
const app = express();

// middlware
const verifyToken = require('../middleware/auth');
const isAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/targetContact');
// 


// controller
const controller = require('../controller/targetContact');
// 


app.post('/',validator.adduserToTarget ,verifyToken, isAdmin, controller.assignUserToTarget);
app.delete('/',validator.removeUserToTarget ,verifyToken, isAdmin, controller.deleteUserToTarget);


module.exports = app;