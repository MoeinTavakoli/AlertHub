/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function loginValidator(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send('invalid argument for username or password');
  }
  next();
}
  
  
module.exports = loginValidator;