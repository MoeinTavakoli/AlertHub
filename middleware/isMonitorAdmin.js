/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isMonitorAdmin(req,res,next) {
  if (req.info.role !== 'MONITORING_ADMIN') {
    res.status(401).send('permission denied !');
  }
  next();
}

module.exports = isMonitorAdmin;