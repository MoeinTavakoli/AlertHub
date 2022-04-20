const prisma = require('../loader/prisma');
/* eslint-disable no-useless-catch */
/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function loginMoniaAdmin(username, password) {
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        password,
        role: 'MONIA_ADMIN'
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
 * @param {String} newPhone 
 * @returns 
 */
async function updatePhoneUsers(username, newPhone) {
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        role: {
          not: 'ROOT'
        }
      },
      data: {
        phoneNumber: newPhone
      }
    });
  }
  catch (error) {
    throw error;
  }
}

/**
 * create user thar you can set permission for this user 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 */
async function createUser(username, password, phoneNumber, role = 'CONTACT') {
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
 */
async function deleteMoniaAdmin(username) {
  try {
    const now = new Date();
    return await prisma.users.update({
      where: {
        username,
      },
      data: {
        deactiveAt: now
      }
    });
  }
  catch (error) {
    throw error;
  }

}




module.exports = {
  loginMoniaAdmin,
  updatePhoneUsers,
  createUser,
  deleteMoniaAdmin
};