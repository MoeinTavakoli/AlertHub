const axios = require('axios');



/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function alertingService(req, res) {

  try {
    const response = await axios.get('http://172.30.201.88:9090/api/v1/alerts');
    const result = response.data;
    const alerts = result.status == 'success' ? result.data.alerts : false;
    res.send(alerts);
  }
  catch (err) {
    res.send(err.message);
  }
}


module.exports = alertingService;