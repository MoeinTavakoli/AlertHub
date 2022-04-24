require('dotenv').config();

const config = {
  httpServer: {
    port: process.env.PORT || 3002
  },
  databse: {
    url: process.env.DATABASE_URL,
  },
  sms: {
    apiKey: process.env.SMS_APIKEY,
    number: process.env.SMS_NUMBER,
  },
  rocketchat: {
    url: process.env.ROCKETCHAT_URL,
    alertBot: process.env.ROCKETCHAT_GP_ALERT_TOKEN,
    errorBot: process.env.ROCKETCHAT_GP_ERROR_TOKEN
  },
  JWT: {
    secretKey : process.env.JWT_SECRET
  },
  prometheus : {
    ip: process.env.PROMETHEUS_IP ,
    port : process.env.PROMETHEUS_PORT
  },
  ROOT: {
    password: process.env.ROOT_PASSWORD
  }
};


module.exports = config;