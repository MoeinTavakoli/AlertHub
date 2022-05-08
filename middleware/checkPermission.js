const moniaAdminRedline = ['ROOT'];
const monitoringAdminRedline = ['ROOT', 'MONIA_ADMIN'];

const { getRole } = require('../db/user');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
async function checkPermission(req, res, next) {
  const payloadRole = req.info.role;
  const userRole = req.body.role ? req.body.role : await getRole(req.params.username);
  if ((payloadRole == 'CONTACT') ||
    (payloadRole == 'MONIA_ADMIN' && moniaAdminRedline.includes(userRole)) ||
    (payloadRole == 'MONITORING_ADMIN' && monitoringAdminRedline.includes(userRole))
  ) return res.status(403).send('permission denied !');
  next();

}

module.exports = checkPermission;