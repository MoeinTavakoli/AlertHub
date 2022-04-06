const { Client } = require('pg');

const config = require('../config');


const client = new Client(config.databse);

client.connect();

module.exports = client;