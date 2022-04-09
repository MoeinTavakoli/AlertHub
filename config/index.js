require('dotenv').config();

const config = {
  httpServer: {
    port: process.env.PORT || 3002
  },
  databse: {
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
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
  }
};



module.exports = config;