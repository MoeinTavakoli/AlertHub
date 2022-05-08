const { verifyToken } = require('../utils/jwt');
const prisma = require('../loader/prisma');

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function authentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send('token not found !');

    const payload = verifyToken(token);
    if (!payload) {
      return res.status(401).send('unathorized');
    }

    if (await checkRole(payload.username , payload.role) == 0 ) {
      return res.status(401).send('token is not valid');
    }

    req.info = payload;
    next();
  }
  catch (err) {
    return res.status(401).send('unathorized');
  }
}



/**
 * 
 * @param {String} username 
 * @param {String} role 
 */
async function checkRole(username, role) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.count({
      where: {
        username,
        role,
        isDeleted: false
      }
    });
  }
  catch (error) {
    throw error;
  }
}



module.exports = authentication;