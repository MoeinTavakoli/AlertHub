const prisma = require('../loader/prisma');

/**
 * 
 * @param {*} username 
 * @param {*} password 
 */
async function login(username, password) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        password,
        isDeleted: false
      },
      select: {
        username: true,
        role: true
      }
    });
  }
  catch (err) {
    throw err;
  }
}


module.exports = {
  login
};