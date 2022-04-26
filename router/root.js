const express = require('express');
const app = express();

// middleware
const auth = require('../middleware/auth');
const isRoot = require('../middleware/isRoot');
const schemaValdator = require('../middleware/validator/root');
// 

// controller
const controller = require('../controller/root');
// 

app.post('/login', schemaValdator.login, controller.loginRoot);
app.post('/admin-monia/create', schemaValdator.createMoniaAdmin, auth, isRoot, controller.createMoniaAdmin);
app.delete('/admin-monia/delete', schemaValdator.removeMoniaAdmin, auth, isRoot, controller.removeMoniaAdmin);


module.exports = app;