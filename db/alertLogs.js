const prisma = require('../loader/prisma');

/* eslint-disable no-useless-catch */
/**
 * 
 * @param {Array.<Object>} alerts - list of alerts from service 
 */
async function insertAlertLog(alert) {
  try {
    await prisma.alertLogs.create({
      data: {
        nodeName: alert.labels.job,
        targetName: alert.labels.instance,
        activeAt: alert.activeAt,
        value: parseInt(alert.value),
        method: alert.labels.job.indexOf('http') > -1 ? 'http_request' : 'ping'
      }
    });
  }
  catch (error) {
    throw error;
  }
}


module.exports = { insertAlertLog };