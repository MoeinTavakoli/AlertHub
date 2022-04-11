const sms = require('../utils/sms');
const axios = require('axios');
const { addTarget } = require('../db/target');
const { getContact } = require('../db/targetContact');

/**
 * 
 */
async function fetchAlert() {
  try {
    const response = await axios('http://172.30.201.88:9090/api/v1/alerts');
    const result = response.data;
    const alerts = result.status == 'success' ? result.data.alerts : false;
    console.log(alerts);
    return alerts;
  }
  catch (error) {
    return error;
  }
}






(async () => {
  try {
    const alerts = await fetchAlert();

    for (const alert of alerts) {
      const job = alert.labels.job;
      const target = alert.labels.instance;
      const value = parseInt(alert.value);

      // insert to database
      await addTarget(target);

      const contacts = await getContact(target);

      const message = `
      title  : ${job}
      target : ${target}
      value  : ${value}
     `;

      sms.send(message, contacts);


    }

  }
  catch (error) {
    console.log(error);
    return error;
  }
})();


