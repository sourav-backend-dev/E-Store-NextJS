// prisma/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.role.create({
    data: {
      name: 'User', // Role name
    },
  });

  // You can create more roles if needed
  await prisma.role.create({
    data: {
      name: 'Admin',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
