const { KavenegarApi } = require('kavenegar');
const config = require('../config');

const apikey = config.sms.apiKey;
const sender = config.sms.number;


const api = KavenegarApi({ apikey });

const rocketchat = require('./rocketchat');
const isHoliday = require('./holiday');

class sms {
  /**
     * send text message to receptors
     * @param {String} message
     * @param {array<string>} receptors
     */
  send(message, receptors) {
    if (isHoliday() && receptors && receptors.length) {
      api.Send(
        {
          message,
          sender,
          receptor: receptors.toString(),
        },
        (response, status) => {
          if (status != 200) {
            rocketchat.sendError((`failed to send sms \n
                   status kavenegar : ${status}\n
                   message : ${message} `));
          }
        },
      );
    }
    else {
      rocketchat.sendError(message);
    }
  }
}



module.exports = new sms();