const prisma = require('../loader/prisma');
/* eslint-disable no-useless-catch */
/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function login(username, password) {
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        password,
        role: 'ADMIN'
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
    return await prisma.users.update({
      where: {
        username
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
 * 
 * @param {String} username 
 * @param {String} password 
 * @param {String} phoneNumber 
 */
async function createUser(username, password, phoneNumber) {
  try {
    return await prisma.users.create({
      data: {
        username,
        password,
        phoneNumber,
        role: 'REPORTER'
      }
    });
  }
  catch (error) {
    throw error;
  }
}




module.exports = {
  login,
  updatePhoneUsers,
  createUser
};