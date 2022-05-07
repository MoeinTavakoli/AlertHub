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


/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 * @param {String} role 
 * @returns 
 */
async function create(username, password, phoneNumber, role) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.create({
      data: {
        username,
        password,
        phoneNumber,
        role
      }
    });
  }
  catch (err) {
    throw err;
  }
}




module.exports = {
  login,
  create
};