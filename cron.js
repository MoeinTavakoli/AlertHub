const cron = require('node-cron');

const alerting = require('./service/alert');



cron.schedule('* * * * * *', alerting);