const express = require("express");
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
// 

// controller
const controller = require('../controller/team');
// 


app.post('/', verifyToken, IsAdmin, controller.createTeam);
app.put('/user', verifyToken, IsAdmin, controller.insertUser);



module.exports = app;