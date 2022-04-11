const serverInit = require('./loader/server');
const cronAlertingService = require('./cron');


/**
 * 
 */
async function main() {
  await serverInit();
  await cronAlertingService();
}

main();