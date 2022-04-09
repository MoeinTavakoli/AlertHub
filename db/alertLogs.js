const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * 
 * @param {Array.<Object>} alerts - list of alerts from service 
 */
async function insertAlerts(alerts) {
  for (const alert of alerts) {
    try {
      await prisma.alertLogs.create({
        data: {
          nodeName: alert.labels.job,
          targetName: alert.labels.instance,
          sendBy: 'notYetSend',
          isSend: false,
          activeAt: alert.activeAt,
          value: parseInt(alert.value)
        }
      });
    }
    catch (error) {
      console.log(error);
    }
  }
}


module.exports = insertAlerts;