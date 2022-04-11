const cron = require('node-cron');

const alerting = require('./service/alert');

/**
 * cron init is for alerting service
 */
async function cronAlertingService() {
  cron.schedule('* */2 * * * *', alerting);
}



module.exports = cronAlertingService;