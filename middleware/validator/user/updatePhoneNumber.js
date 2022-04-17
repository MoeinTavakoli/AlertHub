/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function updatePhoneNumber(req, res, next) {
  if (!req.body.phoneNumber) {
    return res.status(400).send('phone number must be enter !!!');
  }
  if (req.body.phoneNumber.length !== 11) {
    return res.status(400).send('phone number must be 11 number digit ');
  }
  const reg = /^\d+$/;
  if (!reg.test(req.body.phoneNumber)) {
    return res.status(400).send('all the numbers of phone must be digit ');
  }
  next();
}


module.exports = updatePhoneNumber;