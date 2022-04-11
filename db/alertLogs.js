const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

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
    console.log(error);
  }
}


module.exports = { insertAlertLog };