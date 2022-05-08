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

/**
 * 
 * @param {*} username 
 * @returns 
 */
async function deleteUser(username) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username,
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
 * @param {*} username 
 * @param {*} phoneNumber 
 * @returns 
 */
async function updatePassword(username, password) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.users.updateMany({
      where: {
        username,
        isDeleted: false
      },
      data: {
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


module.exports = {
  login,
  create,
  deleteUser,
  getRole,
  updatePhoneNumber,
  updatePassword,
  updateUsername
};