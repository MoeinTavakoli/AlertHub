/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function deleteTarget(req, res, next) {
  if (!req.body.address) {
    return res.status(400).send('address must be entered');
  }
  next();
}


module.exports = deleteTarget; 