const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * 
 * @param {String} name 
 * @param {String} address 
 * @returns 
 */
async function addTarget(name, address) {
  return await prisma.targets.create({
    data: {
      name,
      address
    }
  });
}

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






module.exports = {
  addTarget,
  removeTarget
};