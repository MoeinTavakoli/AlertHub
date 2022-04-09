const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const defaultPassword = '1234554321';

(async () => {

  await prisma.users.createMany({
    data: [
      {
        username: 'ali.nourollahi',
        role: 'ADMIN',
        password: defaultPassword,
        phoneNumber : '09101112233'
      },
      {
        username: 'mahla.rahati',
        role: 'ADMIN',
        password: defaultPassword,
        phoneNumber : '09101112233'

      },
      {
        username: 'alireza.tajali',
        role: 'ADMIN',
        password: defaultPassword,
        phoneNumber : '09101112233'

      },
      {
        username: 'moeen.tavakoli',
        role: 'ADMIN',
        password: defaultPassword,
        phoneNumber : '09101112233'

      },
    ],
  });

})();