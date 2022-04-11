/* eslint-disable no-useless-catch */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns 
 */
async function login(username, password) {
  return await prisma.users.findFirst({
    where: {
      username,
      password,
      role: 'ADMIN'
    }
  });
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



module.exports = {
  login,
  updatePhoneUsers
};