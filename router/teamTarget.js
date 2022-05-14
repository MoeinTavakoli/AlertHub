const express = require('express');
const app = express();


// midlleware
const IsAdmin = require('../middleware/isAdmin');
const auth = require('../middleware/auth');
const validator = require('../middleware/validator/teamTarget');
// 

// controller
const controller = require('../controller/teamJob');
// 


app.post('/create', validator.createTeamTarget, auth,IsAdmin, controller.createTeamTarget);
app.delete('/delete', validator.removeTeamTarget, auth, IsAdmin, controller.removeTeamTarget);


module.exports = app;