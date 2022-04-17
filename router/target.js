const expres = require('express');
const app = expres();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/target');
// 

// controller
const controller = require('../controller/target');
// 


app.post('/', validator.createTarget, verifyToken, IsAdmin, controller.createTarget);
app.delete('/', validator.deleteTarget, verifyToken, IsAdmin, controller.deleteTarget);


module.exports = app;