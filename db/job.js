const prisma = require('../loader/prisma');




/**
 * 
 * @param {String} address 
 * @returns 
 */
async function addJob(jobName) {
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.jobs.create({
      data: {
        jobName
      }
    });
  }
  catch (error) {
    return error;
  }
}

/**
 * 
 */
async function getAllJobs(){
  // eslint-disable-next-line no-useless-catch
  try {
    return await prisma.jobs.findMany({
      select : {
        jobName : true,
      }
    });
  }
  catch (error) {
    throw error; 
  }
}


module.exports = {
  addJob,
  getAllJobs
};