const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { ROOT } = require('../config');

const { hashPassword } = require('../utils/bcrypt');

(async () => {
  const hashedPassword = await hashPassword(ROOT.password);
  await prisma.users.create({
    data: {
      username: 'ROOT',
      password: hashedPassword,
      phoneNumber: '09000000000',
      role: 'ROOT',
    }
  });

})();