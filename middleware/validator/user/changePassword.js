/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function changePasswordValditor(req, res, next) {

  if (!req.body.password) return res.status(400).send('please insert password in body');
  if (req.body.password.trim().length < 5) return res.status(400).send('please insert password at least 5 character');

  next();

}


module.exports = changePasswordValditor;
