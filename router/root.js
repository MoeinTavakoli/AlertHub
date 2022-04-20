const express = require('express');
const app = express();

// middleware
const auth = require('../middleware/auth');
const isRoot = require('../middleware/isRoot');
// 


// controller
const controller = require('../controller/root');
// 

app.post('/login', controller.loginRoot);
app.post('/admin-monia/create', auth, isRoot, controller.createMoniaAdmin);
app.delete('/admin-monia/delete', auth, isRoot, controller.removeMoniaAdmin);


module.exports = app;