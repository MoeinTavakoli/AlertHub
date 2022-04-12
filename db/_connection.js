const { Client } = require('pg');

const config = require('../config');


const client = new Client(config.databse);


client.connect().catch((err) => {
    console.log(err);
  });

module.exports = client;