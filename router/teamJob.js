const express = require('express');
const app = express();


// midlleware
const IsAdmin = require('../middleware/isAdmin');
const auth = require('../middleware/auth');
const validator = require('../middleware/validator/teamJob');
// 

// controller
const controller = require('../controller/teamJob');
// 


app.post('/create', validator.createTeamTarget, auth,IsAdmin, controller.createTeamJob);
app.delete('/delete', validator.removeTeamTarget, auth, IsAdmin, controller.removeTeamJob);


module.exports = app;