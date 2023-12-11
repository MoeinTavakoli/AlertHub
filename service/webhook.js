const { addJob } = require('../db/job');
const { insertAlertLog } = require('../db/alertLogs');
const { getPhoneNumberContacts } = require('../db/userJob');
const { getAllPhoneNumberUserByTeam } = require('../db/teamJob');
const sms = require('../utils/sms');
const removeUrlCharachter = require('../utils/removeURL');
const rocketchat = require('../utils/rocketchat');

/**
 * 
 * @param {import('express').Request} req 
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

      await Promise.allSettled([addJob(job), insertAlertLog(job, instance, activeAt, value)]);


      const userPhoneNumber = await getPhoneNumberContacts(job);

      const teamUserPhoneNumber = await getAllPhoneNumberUserByTeam(job);

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
    rocketchat.sendError(error);
  }
}


module.exports = webhook;