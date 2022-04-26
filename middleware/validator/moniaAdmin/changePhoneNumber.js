/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
function changePhoneNumberValidator(req, res, next) {
  if (!req.body.phoneNumber) return res.status(400).send('please insert phoneNumber in body');
  next();
}

module.exports = changePhoneNumberValidator;