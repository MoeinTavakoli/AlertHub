const roles = ['ROOT', 'MONIA_ADMIN', 'MONITORING_ADMIN', 'CONTACT'];
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function createUserValidator(req, res, next) {
  if (!req.body.username ||
    !req.body.password ||
    !req.body.phoneNumber ||
    !(/^-?\d+$/.test(req.body.phoneNumber))) return res.status(400).send('please insert username , password , valid phoneNumber in body ');
  if (req.body.role && !roles.includes(req.body.role)) return res.status(400).send('invalid role !!');
  if (req.body.password.trim().length < 5) return res.status(400).send('please insert password at least 5 character');

  next();
}


module.exports = createUserValidator;
