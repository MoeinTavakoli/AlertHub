const prisma = require('../loader/prisma');

/* eslint-disable no-useless-catch */
/**
 * 
 * @param {Array.<Object>} alerts - list of alerts from service 
 */
async function insertAlertLog(from, target, activeAt, value,) {
  try {
    await prisma.alertLogs.create({
      data: {
        nodeName: from,
        targetName: target,
        activeAt: activeAt,
        value: parseInt(value),
        method: from.indexOf('http') > -1 ? 'http_request' : 'ping'
      }
    });
  }
  catch (error) {
    return error;
  }
}


module.exports = { insertAlertLog };