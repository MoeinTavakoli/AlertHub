const cron = require('node-cron');

const alerting = require('./service/alert');

/**
 * cron init is for alerting service
 */
async function cronAlertingService() {
  cron.schedule(' * * * * *',  alerting );
}



module.exports = cronAlertingService;