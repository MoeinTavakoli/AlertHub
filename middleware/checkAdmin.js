/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
async function IsAdmin(req, res, next) {
  console.log(req.info);
  if (req.info.role !== 'ADMIN') {
    res.status(401).send('permission denied !');
  }
  next();

}


module.exports = IsAdmin;