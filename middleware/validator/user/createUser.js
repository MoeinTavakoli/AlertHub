const roles = ['CONTACT', 'MONIA_ADMIN', 'MONITORING_ADMIN', 'CONTACT'];
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function createUserValidator(req, res, next) {
  if (!req.body.username ||
        !req.body.password ||
        !req.body.phoneNumber) return res.status(400).send('please insert username , password . phoneNumber in body ');
  if (req.body.role && !roles.includes(req.body.role)) return res.status(400).send('invalid role !!');
  next();
}


module.exports = createUserValidator;
