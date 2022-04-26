/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
function changePhoneNumberValidator(req, res, next) {
  if (!req.body.phoneNumber) return res.status(400).send('please insert phoneNumber in body');
  if (req.body.phoneNumber.length !== 11) return res.status(400).send('please insert 11 digit as phoneNumber');
  next();
}

module.exports = changePhoneNumberValidator;