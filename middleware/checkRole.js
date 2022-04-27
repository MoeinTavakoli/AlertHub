const prisma = require('../loader/prisma');

// const  {username , role } = req.info;
/**
 * 
 * @param {*} username 
 * @param {*} role 
 */
async function checkRoleDB(username , role){
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findFirst({
      where:{
        username , 
        role ,
        isDeleted : false
      },
      select: { 
        role
      }
    });
  }
  catch (error) {
    throw error;
  }
}


/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
async function checkRoleMiddleware(req,res,next){
  try {
    const {username , role} = req.info;
    const payload = await checkRoleDB(username , role);
    if (!payload || payload.role !== role) return res.status(401).send('unauthorized');
    next();

  }
  catch (error) {
    res.status(400).send(error);
  }
}

module.exports = checkRoleMiddleware;