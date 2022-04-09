const axios = require('axios');
const sms = require('../utils/sms');

const insertAlerts = require('../db/alertLogs');

/**
 * get alerts and send to contacts
 */
async function alertingService() {
  try {
    const response = await axios('http://172.30.201.88:9090/api/v1/alerts');
    const result = response.data;
    const alerts = result.status == 'success' ? result.data.alerts : false;

    // TODO: add function to insert to database 

    await insertAlerts(alerts);

    // TODO: change this lines to function
    for (const packet of alerts) {
      const message = `${packet.annotations.title}
       ${packet.annotations.description}
     value :  ${parseInt(packet.value)}
     alert startedAt  ${packet.activeAt}
     `;
      // console.log(message);
      sms.send(message, '09111111111');
    }
  }
  catch (err) {
    console.log(err);
  }
}


alertingService();



module.exports = alertingService;
