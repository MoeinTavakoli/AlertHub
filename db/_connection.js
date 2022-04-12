const { Client } = require('pg');

const config = require('../config');


const client = new Client(config.databse);


client.connect().catch(() => {
  throw new Error('unable to connect to database !!!');
});

module.exports = client;