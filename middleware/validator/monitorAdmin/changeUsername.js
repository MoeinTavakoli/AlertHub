/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function changeUsernameValidator(req, res, next) {

  if (!req.body.newUsername) return res.status(400).send('please insert newUsername in body ');
  next();

}

module.exports = changeUsernameValidator;