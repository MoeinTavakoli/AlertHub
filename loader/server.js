const express = require('express');
const app = express();

const bodyParser = require('body-parser');

require('../db/_connection');   

// middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//

app.use('/api', require('../router'));

app.use('/webhook', require('../router/webhook'));

app.use('/monia-admin', require('../router/moniaAdmin'));

app.use('/target', require('../router/target'));

app.use('/target/user', require('../router/targetContact'));

app.use('/team', require('../router/team'));

app.use('/target/team', require('../router/teamTarget'));

app.use('/root', require('../router/root'));

app.use('/monitoring-admin', require('../router/monitoringAdmin'));

app.use('*' , (req,res)=>{
  res.status(404).send('not found !!!');
});

module.exports = app;