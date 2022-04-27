const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/teamTarget');
const checkRole = require('../middleware/checkRole');
// 

// controller
const controller = require('../controller/teamTarget');
// 


app.post('/create', validator.createTeamTarget, verifyToken, IsAdmin, checkRole, controller.createTeamTarget);
app.delete('/delete', validator.removeTeamTarget, verifyToken, IsAdmin, checkRole, controller.removeTeamTarget);


module.exports = app;