const { verifyToken } = require('../utils/jwt');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function authentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send('unathorized');

    const payload = verifyToken(token);
    if (!payload) {
      return res.status(401).send('unathorized');
    }
    req.info = payload;
    next();
  }
  catch (err){
    return res.status(401).send('unathorized');
  }
}


module.exports = authentication;