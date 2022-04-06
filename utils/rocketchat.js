const axios = require('axios');

const config = require('../config');


const url = config.rocketchat.url;
const alertBot = config.rocketchat.alertBot;
const errorBot = config.rocketchat.errorBot;


class rocketchat {

  async sendError(text) {
    await axios.post(`${url}/hooks/${errorBot}`, { text });
  }
  async sendAlert(text) {
    await axios.post(`${url}/hooks/${alertBot}`, { text });
  }
}


module.exports = new rocketchat();