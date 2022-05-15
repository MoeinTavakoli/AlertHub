const db = require('../db/job'); 

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function getAllJobs (req,res){
  try {
    const jobs  = await db.getAllJobs();
    res.json({success : true , jobs});
  }
  catch (error) {
    res.status(400).send(error);
  }
}


module.exports = {getAllJobs};