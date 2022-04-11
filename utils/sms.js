const { KavenegarApi } = require('kavenegar');
const config = require('../config');

const apiKey = config.sms.apiKey;
const sender = config.sms.number;


const api = KavenegarApi({ apiKey });

const rocketchat = require('../utils/rocketchat');
const isHoliday = require('./holiday');

class sms {
  /**
     * send text message to receptors
     * @param {string} message
     * @param {array<string>} receptors
     */
  send(message, receptors) {
    if (isHoliday()) {
      api.Send(
        {
          message,
          sender,
          receptor: receptors.toString(),
        },
        (response, status) => {
          if (status != 200) {
            console.log(response);
            rocketchat.sendError((`failed to send sms \n
                   status kavenegar : ${status}\n
                   message : ${message} `));
          }
        },
      );
    }
    else {
      console.log(message);
      // rocketchat.sendError((`
      // ${message} `));
    }
  }
}



module.exports = new sms();


