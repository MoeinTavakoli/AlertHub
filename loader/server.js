const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const { httpServer } = require('../config');

// middleware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use('/api', require('../router'));

// app.use((err, req, res, next) => {
//     console.log(err.message);
//     res.send('eror');
// });



module.exports = () => {
  app.listen(httpServer.port, () => {
    return console.log(`server running on http://127.0.0.1:${httpServer.port}`);
  });
};