/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isRoot(req,res,next) {
  if (req.info.role !== 'ROOT') {
    res.status(401).send('permission denied !');
  }
  next();
}

module.exports = isRoot;