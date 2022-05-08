const expres = require('express');
const app = expres();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/isAdmin');
const validator = require('../middleware/validator/target');
// 

// controller
const controller = require('../controller/target');
// 


app.post('/create', validator.createTarget, verifyToken, IsAdmin, controller.createTarget);
app.delete('/delete', validator.deleteTarget, verifyToken, IsAdmin, controller.deleteTarget);


module.exports = app;