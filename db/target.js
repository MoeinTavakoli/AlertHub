const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


/**
 * 
 * @param {String} name 
 * @returns 
 */
async function removeTarget(name) {
  return await prisma.targets.delete({
    where: {
      name
    }
  });

}


/**
 * 
 * @param {String} address 
 * @returns 
 */
async function addTarget(address) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.targets.create({
      data: {
        address
      }
    });
  }
  catch (error) {
    throw error;
  }
}



module.exports = {
  addTarget,
  removeTarget

};