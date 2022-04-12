/* eslint-disable require-jsdoc */
const sms = require('../utils/sms');
const axios = require('axios');
const { addTarget } = require('../db/target');
const { getPhoneNumberContacts } = require('../db/targetContact');
const { prometheus } = require('../config');
const { insertAlertLog } = require('../db/alertLogs');

async function fetchAlert() {
  try {

    const response = await axios(`http://${prometheus.ip}:${prometheus.port}/api/v1/alerts`);
    const result = response.data;
    const alerts = result.status == 'success' ? result.data.alerts : false;
    return alerts;
  }
  catch (error) {
    return error;
  }
}






async function alertingService() {
  try {
    const alerts = await fetchAlert();

    for (const alert of alerts) {
      const job = alert.labels.job;
      const target = alert.labels.instance;
      const value = parseInt(alert.value);

      // insert to database
      Promise.allSettled([addTarget(target), insertAlertLog(alert)]);
      // fetch contact for each alert
      const contacts = await getPhoneNumberContacts(target);

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
}

module.exports = alertingService;