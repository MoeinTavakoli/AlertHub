const express = require('express');
const app = express();

// middleware
const auth = require('../middleware/auth');
const isRoot = require('../middleware/isRoot');
const schemaValdator = require('../middleware/validator/root');
const checkRole = require('../middleware/checkRole');
// 

// controller
const controller = require('../controller/root');
// 

app.post('/login', schemaValdator.login, controller.loginRoot);
app.post('/admin-monia/create', schemaValdator.createMoniaAdmin, auth, isRoot, checkRole, controller.createMoniaAdmin);
app.delete('/admin-monia/delete', schemaValdator.removeMoniaAdmin, auth, isRoot, checkRole, controller.removeMoniaAdmin);


module.exports = app;