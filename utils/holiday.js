const holidays = require('../config/holidays');
const momentJalali = require('moment-jalaali');
const _ = require('lodash');

/**
 * determines that today is holiday or not
 * @param {Date} date
 * @return {Boolean}
 */
function isHoliday(date) {
  if (!date) {
    date = new Date();
  }
  const isFriday = date.getDay() == 5;
  const isThursday = date.getDay() == 4; 
  if (isFriday || isThursday) {
    return true;
  }
  const jalaliDate = momentJalali(date.getTime());
  const holiday = _.find(holidays, {
    day: jalaliDate.jDate(),
    month: jalaliDate.jMonth() + 1,
  });
  return holiday !== undefined;
}

module.exports = isHoliday;
