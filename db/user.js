const prisma = require('../loader/prisma');

/**
 * 
 * @param {*} username 
 * @param {*} password 
 */
async function login(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findFirst({
      where: {
        username,
        isDeleted: false
      },
      select: {
        userID : true,
        role: true,
        password : true,
        username : true // TODO: remove in next commit  
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
async function createUser(username, password, phoneNumber, role) {
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

/**
 * 
 * @param {*} username 
 * @returns 
 */
async function deleteUser(userID) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        userID,
        isDeleted: false
      },
      data: {
        isDeleted: true
      }
    });
  }
  catch (err) {
    throw err;
  }
}


/**
 * 
 * @param {*} username 
 * @returns 
 */
async function getRole(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    const payload = await prisma.users.findFirst({
      where: {
        username
      },
      select: {
        role: true
      }
    });
    return payload.role;
  }
  catch (err) {
    return 'CONTACT';
  }
}

/**
 * 
 * @param {*} username 
 * @param {*} phoneNumber 
 * @returns 
 */
async function updatePhoneNumber(username, phoneNumber) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false
      },
      data: {
        phoneNumber
      }
    });
  }
  catch (err) {
    throw err;
  }
}

/**
 * 
 * @param {*} userID 
 * @param {*} phoneNumber 
 * @returns 
 */
async function updatePassword(userID, password) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where : {
        userID,
        isDeleted: false
      },
      data : {
        password 
      }
    });
  }
  catch (err) {
    throw err;
  }
}


/**
 * 
 * @param {*} oldUsername 
 * @param {*} newUsername 
 * @returns 
 */
async function updateUsername(oldUsername , newUsername){
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username : oldUsername,
        isDeleted : false
      },
      data : {
        username : newUsername
      }
    });
  }
  catch (err) {
    throw err;
  }
}

/**
 * 
 * @param {Array} accessRoles 
 */
async function getAllUsers(accessRoles = ['CONTACT']){
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.findMany({
      where : {
        isDeleted : false,
        role :{
          in : accessRoles
        }
      },
      select: {
        userID : true,
        username : true , 
        role: true  
      }
    });
  }
  catch (error) {
    throw error;
  }
}


module.exports = {
  login,
  createUser,
  deleteUser,
  getRole,
  updatePhoneNumber,
  updatePassword,
  updateUsername,
  getAllUsers
};