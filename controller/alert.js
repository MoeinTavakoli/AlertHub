const axios = require('axios');

const {prometheus} = require("../config");

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function alertingService(req, res) {

  try {
    const url = `http://${prometheus.ip}:${prometheus.port}/api/v1/alerts`;
    const response = await axios.get(url);
    const result = response.data;
    const alerts = result.status == 'success' ? result.data.alerts : false;
    res.send(alerts);
  }
  catch (err) {
    res.send(err.message);
  }
}


module.exports = alertingService;