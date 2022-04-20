const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


(async () => {

  await prisma.users.create({
    data: {
      username: 'ROOT',
      password : '1234',
      phoneNumber : '09000000000',
      role : 'ROOT',
    }
  });
  
})();