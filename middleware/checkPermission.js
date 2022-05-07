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
    console.log(`${payloadRole} mikhad ${userRole} dorost kone`);
  if (payloadRole == 'CONTACT') return res.status(403).send('permission denied !');
  if (payloadRole == 'MONIA_ADMIN' && moniaAdminRedline.includes(userRole)) return res.status(403).send('permission denied !');
  if (payloadRole == 'MONITORING_ADMIN' && monitoringAdminRedline.includes(userRole)) return res.status(403).send('permission denied !');
  next();

}

module.exports = checkPermission;