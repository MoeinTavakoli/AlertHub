const expres = require('express');
const app = expres();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/target');
const checkRole = require('../middleware/checkRole');
// 

// controller
const controller = require('../controller/target');
// 


app.post('/create', validator.createTarget, verifyToken, IsAdmin, checkRole, controller.createTarget);
app.delete('/delete', validator.deleteTarget, verifyToken, IsAdmin, checkRole, controller.deleteTarget);


module.exports = app;