const prisma = require('../loader/prisma');


/**
 * 
 * @param {String} name 
 * @returns 
 */
async function removeTarget(address, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targets.deleteMany({
      where: {
        address,
        method
      }
    });

  }
  catch (error) {
    throw error;
  }
}


/**
 * 
 * @param {String} address 
 * @returns 
 */
async function addTargetWithError(address, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targets.create({
      data: {
        address,
        method
      }
    });
  }
  catch (error) {
    throw error;
  }
}


/**
 * 
 * @param {String} address 
 * @returns 
 */
async function addTargetWithoutError(address, method) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targets.create({
      data: {
        address,
        method
      }
    });
  }
  catch (error) {
    return error;
  }
}



module.exports = {
  addTargetWithError,
  addTargetWithoutError,
  removeTarget,

};