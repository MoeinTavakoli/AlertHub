/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function createUserValidator(req, res, next) {
  if (!req.body.username) return res.status(400).send('please insert username in body ');
  if (!req.body.password) return res.status(400).send('please insert password in body ');
  if (!req.body.phoneNumber) return res.status(400).send('please insert phoneNumber in body ');

  next();
}


module.exports = createUserValidator;