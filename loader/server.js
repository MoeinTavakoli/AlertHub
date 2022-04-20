const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const { httpServer } = require('../config');

// middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//

app.use('/api', require('../router'));

app.use('/user', require('../router/user'));

app.use('/admin', require('../router/admin'));

app.use('/target', require('../router/target'));

app.use('/target/user', require('../router/targetContact'));

app.use('/team', require('../router/team'));

app.use('/target/team', require('../router/teamTarget'));

app.use('/root' , require('../router/root'));


module.exports = () => {
  app.listen(httpServer.port, () => {
    return console.log(`server running on http://127.0.0.1:${httpServer.port}`);
  });
};