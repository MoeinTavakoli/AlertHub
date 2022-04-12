const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/checkAdmin');
// 

// controller
const controller = require('../controller/teamTarget');
// 


app.post('/' , verifyToken , IsAdmin , controller.createTeamTarget);
app.delete('/' , verifyToken , IsAdmin , controller.removeTeamTarget);


module.exports = app;