const prisma = require('../loader/prisma');


/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns error or result user 
 */
async function signup(username, password, phoneNumber) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.create({
      data: {
        username,
        password,
        phoneNumber,
        role: 'CONTACT'
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
 */
async function login(username, password,) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        password,
        isDeleted: false
      }
    });
  }
  catch (error) {
    throw error;
  }
}


/**
 * 
 * @param {String} username is uniq coloumn for find user
 * @param {String} newPhone
 * @returns 
 */
async function changePhoneNumber(username, newPhone) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false
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
  signup,
  login,
  changePhoneNumber
};
