const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns error or result user 
 */
async function signup(username, password, phoneNumber) {
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
    console.log(error);
    return error;

  }
}

/**
 * 
 * @param {String} username 
 * @param {String} password 
 */
async function login(username, password, ) {
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        password,
      }
    });
  }
  catch (error) {
    console.log(error);
    return error;
  }
}


/**
 * 
 * @param {String} username is uniq coloumn for find user
 * @param {String} newPhone
 * @returns 
 */
async function changePhoneNumber(username, newPhone) {
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
    console.log(error);
    return error;
  }
}





module.exports = {
  signup,
  login,
  changePhoneNumber
};
