/**
 * 
 * @param {*} req 
 * @param {import('express').Response} res 
 * @param {*} next 
 */
function removeMoniaAdmin(req, res, next) {
  if (!req.body.username ) return res.status(400).send('username must be inserted !!');

  next();
}


module.exports = removeMoniaAdmin;