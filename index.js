const serverInit = require('./loader/server');
const cronAlertingService = require('./cron');


/**
 * 
 */
async function main() {
  console.log('start');

  await serverInit();

  console.log('middle');

  await cronAlertingService();

  console.log('finish');

}

main();