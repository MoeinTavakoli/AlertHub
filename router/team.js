const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/isAdmin');
const validator = require('../middleware/validator/team');
// 

// controller
const controller = require('../controller/team');
// 


app.post('/create', validator.createTeam, verifyToken, IsAdmin,  controller.createTeam);
app.put('/user/add', validator.addUserToTeam, verifyToken, IsAdmin, controller.insertUserToTeam);
app.delete('/user/remove', validator.removeUserFromTeam, verifyToken, IsAdmin, controller.removeUserFromTeam);
app.get('/info', verifyToken, IsAdmin , controller.getAllTeam );


module.exports = app;