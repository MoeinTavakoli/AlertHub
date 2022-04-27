const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
const validator = require('../middleware/validator/team');
const checkRole = require('../middleware/checkRole');
// 

// controller
const controller = require('../controller/team');
// 


app.post('/create', validator.createTeam, verifyToken, IsAdmin, checkRole, controller.createTeam);
app.put('/user/add', validator.addUserToTeam, verifyToken, IsAdmin, checkRole, controller.insertUserToTeam);
app.delete('/user/remove', validator.removeUserFromTeam, verifyToken, IsAdmin, checkRole, controller.removeUserFromTeam);



module.exports = app;