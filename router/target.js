const expres = require('express');
const app = expres();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
// 

// controller
const controller = require('../controller/target');
// 


app.post('/', verifyToken, IsAdmin, controller.createTarget);
app.delete('/', verifyToken, IsAdmin, controller.deleteTarget);


module.exports = app;