const moniaAdminRedline = ['ROOT'];
const monitoringAdminRedline = ['ROOT', 'MONIA_ADMIN'];

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
function checkPermission(req, res, next) {
  const payloadRole = req.info.role;
  const userRole = req.body.role;
  if ((payloadRole == 'CONTACT') ||
        (payloadRole == 'MONIA_ADMIN' && moniaAdminRedline.includes(userRole)) ||
        (payloadRole == 'MONITORING_ADMIN' && monitoringAdminRedline.includes(userRole))
  ) return res.status(403).send('permission denied !');
  next();

}

module.exports = checkPermission;
