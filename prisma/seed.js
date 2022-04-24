const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { ROOT } = require('../config');

(async () => {

  await prisma.users.create({
    data: {
      username: 'ROOT',
      password: ROOT.password,
      phoneNumber: '09000000000',
      role: 'ROOT',
    }
  });

})();