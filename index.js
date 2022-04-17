const serverInit = require('./loader/server');
const cronAlertingService = require('./cron');

require('./db/_connection');


(async()=> {
  await serverInit();
  // await cronAlertingService();
})();