const prisma = require('../loader/prisma');

/* eslint-disable no-useless-catch */
/**
 * 
 * @param {Array.<Object>} alerts - list of alerts from service 
 */
async function insertAlertLog(job, instance, activeAt, value) {
  try {
    await prisma.alertLogs.create({
      data: {
        job,
        instance,
        activeAt,
        value: parseInt(value),
      }
    });
  }
  catch (error) {
    console.log(error);
    return error;
  }
}


module.exports = { insertAlertLog };