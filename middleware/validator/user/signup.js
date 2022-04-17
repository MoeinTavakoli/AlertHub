/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function signupValidator(req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.phoneNumber) {
    return res.status(400).send('invalid argument for username and password and phoneNumber !!');
  }

  if (req.body.phoneNumber.length !== 11) {
    return res.status(400).send('phone number must be 11 digit lenght !!!');
  }

  next();
}


module.exports = signupValidator;