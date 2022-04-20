/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isMoniaAdmin(req,res,next) {
  if (req.info.role !== 'MONIA_ADMIN') {
    res.status(401).send('just role monia admin can access to this route !');
  }
  next();
}

module.exports = isMoniaAdmin;