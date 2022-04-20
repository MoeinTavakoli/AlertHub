const prisma = require('../loader/prisma.js');

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 * @returns 
 */
async function addMoniaAdmin(username, password, phoneNumber, role = 'CONTACT') {
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
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {String} username 
 * @returns 
 */
async function deleteMoniaAdmin(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.delete({
      where: {
        username
      }
    });
  }
  catch (error) {
    throw error;
  }
}

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function loginRoot(username , password) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findFirst({
      where : {
        username ,
        password,
        role : 'ROOT'
      }
    });
  }
  catch (error) {
    throw error;
  }
}


module.exports = {
  loginRoot,
  addMoniaAdmin,
  deleteMoniaAdmin
};