/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function removeUserValidator(req, res, next) {
  if (!req.body.username) return res.status(400).send('please insert username in body ');

  next();
}


module.exports = removeUserValidator;