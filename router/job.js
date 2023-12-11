const express = require('express');
const app = express();


// midlleware
const verifyToken = require('../middleware/auth');
const IsAdmin = require('../middleware/isAdmin');
// 

// controller
const controller = require('../controller/job');
// 


app.get('/info', verifyToken, IsAdmin , controller.getAllJobs );


module.exports = app;