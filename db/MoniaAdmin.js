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
        isDeleted: false,
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
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false

      },
      data: {
        isDeleted: true
      },
    });
  }
  catch (error) {
    throw error;
  }

}


/**
 * 
 * @param {*} oldUsername 
 * @param {*} newUsername 
 * @returns 
 */
async function changeUsername(oldUsername, newUsername) {
  try {
    return await prisma.users.updateMany({
      where: {
        username: oldUsername,
        isDeleted: false
      },
      data: {
        username: newUsername
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
 * @param {String} newPassword 
 * @returns 
 */
async function changePassword(username, newPassword) {
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false
      },
      data: {
        password: newPassword
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
  deleteMoniaAdmin,
  changeUsername,
  changePassword
};