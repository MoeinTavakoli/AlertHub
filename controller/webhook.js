const { addTarget } = require('../db/target');
const { insertAlertLog } = require('../db/alertLogs');
const { getPhoneNumberContacts } = require('../db/targetContact');
const { getAllPhoneNumberUserByTeam } = require('../db/teamTarget');
const sms = require('../utils/sms');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function webhook(req, res) {

  try {
    const alerts = req.body.alerts;
    for (const alert of alerts) {
      const status = alert.status;
      const target = alert.labels.instance;
      const from = alert.labels.job;
      const startedAt = alert.startsAt;
      const value = alert.labels.value || -1;


      await Promise.allSettled([addTarget(target), insertAlertLog(from, target, startedAt, value)]);


      const userPhoneNumber = await getPhoneNumberContacts(target);

      console.log(`userPhoneNumber : ${userPhoneNumber}`);

      const teamUserPhoneNumber = await getAllPhoneNumberUserByTeam(target);

      console.log(`teamUserPhoneNumber : ${teamUserPhoneNumber}`);

      const phoneNumbers = Array.from(new Set(userPhoneNumber.concat(teamUserPhoneNumber)));

      const message = `title  : ${from} - target : ${target.replace('https://', '').replace('www.', '').replace('.com', '')}
     - value  : ${value} - status : ${status}`;

      // sms.send(message, phoneNumbers);


    }
  }
  catch (error) {
    console.log(error);
  }
}


module.exports = webhook;