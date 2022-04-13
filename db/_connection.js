const { Client } = require('pg');

const config = require('../config');


const client = new Client(config.databse);


client.connect().catch((err) => {
  throw new Error('unable to connect to database !!!' , err);
});

module.exports = client;