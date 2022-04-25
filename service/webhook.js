const { addTargetWithoutError } = require('../db/target');
const { insertAlertLog } = require('../db/alertLogs');
const { getPhoneNumberContacts } = require('../db/targetContact');
const { getAllPhoneNumberUserByTeam } = require('../db/teamTarget');
const sms = require('../utils/sms');
const removeUrlCharachter = require('../utils/removeURL');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function webhook(req) {

  try {
    const alerts = req.body.alerts;
    for (const alert of alerts) {
      const status = alert.status;
      const instance = alert.labels.instance;
      const job = alert.labels.job;
      const activeAt = alert.startsAt;
      const value = alert.labels.value || -1;
      const method = alert.labels.job.toLowerCase().indexOf('http') > -1 ? 'http_request' : 'ping'; 

      

      await Promise.allSettled([addTargetWithoutError(instance , method), insertAlertLog(job, instance, activeAt, value)]);


      const userPhoneNumber = await getPhoneNumberContacts(instance);

      const teamUserPhoneNumber = await getAllPhoneNumberUserByTeam(instance);

      const phoneNumbers = Array.from(new Set(userPhoneNumber.concat(teamUserPhoneNumber)));

      const message = `
      title  : ${job} 
      target : ${removeUrlCharachter(instance)} 
      value  : ${value} 
      status : ${status}`;

      sms.send(message, phoneNumbers);
    }
  }
  catch (error) {
    console.log(error);
  }
}


module.exports = webhook;