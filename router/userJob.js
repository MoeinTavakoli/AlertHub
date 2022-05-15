const express = require('express');
const app = express();

// middlware
const verifyToken = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const validator = require('../middleware/validator/targetContact');
// 


// controller
const controller = require('../controller/userJob');
// 


app.post('/create', validator.adduserToTarget, verifyToken, isAdmin, controller.assignUserToJob);
app.delete('/delete', validator.removeUserToTarget, verifyToken, isAdmin, controller.revokeUserFromTarget);


module.exports = app;