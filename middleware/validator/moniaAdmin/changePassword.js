/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function changePasswordValditor(req, res, next) {

  if (!req.body.password) return res.status(400).send('please insert password in body');
  next();

}


module.exports = changePasswordValditor;