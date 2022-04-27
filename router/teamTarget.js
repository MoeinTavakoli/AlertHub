const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/teamTarget');
// 

// controller
const controller = require('../controller/teamTarget');
// 


app.post('/create', validator.createTeamTarget, verifyToken, IsAdmin, controller.createTeamTarget);
app.delete('/delete', validator.removeTeamTarget, verifyToken, IsAdmin, controller.removeTeamTarget);


module.exports = app;