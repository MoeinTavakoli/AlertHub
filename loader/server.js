const express = require('express');
const app = express();

const bodyParser = require('body-parser');

require('../db/_connection');   

// middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//

app.use('/webhook', require('../router/webhook'));

app.use('/userRel', require('../router/userJob'));

app.use('/team', require('../router/team'));

app.use('/teamRel', require('../router/teamJob'));

app.use('/user' , require('../router/user'));

app.use('/job' , require('../router/job'));

app.use('*' , (req,res)=>{
  res.status(404).send('not found !!!');
});

module.exports = app;