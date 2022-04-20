const express = require('express');
const app = express();

// middleware

// 


// controller
const controller = require('../controller/root');
// 

app.post('/login' , controller.loginRoot);
app.post('/admin-monia/create', controller.createMoniaAdmin);
app.delete('/admin-monia/delete', controller.removeMoniaAdmin);


module.exports = app;