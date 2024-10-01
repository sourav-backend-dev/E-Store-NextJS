// prisma/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  // Create categories
  // const categories = await prisma.category.createMany({
  //   data: [
  //     { name: "Bracelet" },
  //     { name: "Earrings" },
  //     { name: "Necklace" }
  //   ],
  // });

  // console.log(`${categories.count} categories created.`);

  // Create products
  const products = await prisma.product.createMany({
    data: [
      {
        name: '7 Shakra Bracelet',
        description: '7 chakra bracelet, in blue or black.',
        price: 42.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/7-chakra-bracelet_925x.jpg',
        categoryId: 11, // Bracelet
        userId: 1, // Replace with appropriate user ID
      },
      {
        name: '7 Shakra Bracelet',
        description: '7 chakra bracelet, in blue or black.',
        price: 42.99,
        stock: 0,
        imageUrl: 'https://burst.shopifycdn.com/photos/navy-blue-chakra-bracelet_925x.jpg',
        categoryId: 11,
        userId: 1,
      },
      {
        name: 'Anchor Bracelet Mens',
        description: 'Black leather bracelet with gold or silver anchor for men.',
        price: 69.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/anchor-bracelet-mens_925x.jpg',
        categoryId: 11,
        userId: 1,
      },
      {
        name: 'Anchor Bracelet Mens',
        description: 'Black leather bracelet with gold or silver anchor for men.',
        price: 55.00,
        stock: 0,
        imageUrl: 'https://burst.shopifycdn.com/photos/anchor-bracelet-for-men_925x.jpg',
        categoryId: 11,
        userId: 1,
      },
      {
        name: 'Bangle Bracelet',
        description: 'Gold bangle bracelet with studded jewels.',
        price: 39.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/bangle-bracelet-with-jewels_925x.jpg',
        categoryId: 11,
        userId: 1,
      },
      {
        name: 'Boho Bangle Bracelet',
        description: 'Gold boho bangle bracelet with multicolor tassels.',
        price: 42.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/bangle-bracelet-with-feathers_925x.jpg',
        categoryId: 11,
        userId: 1,
      },
      {
        name: 'Boho Earrings',
        description: 'Turquoise globe earrings on 14k gold hooks.',
        price: 27.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/boho-earrings_925x.jpg',
        categoryId: 12, // Earrings
        userId: 1,
      },
      {
        name: 'Choker with Bead',
        description: 'Black choker necklace with 14k gold bead.',
        price: 14.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/black-choker-with-bead_925x.jpg',
        categoryId: 13, // Necklace
        userId: 1,
      },
      {
        name: 'Choker with Gold Pendant',
        description: 'Black cord choker with gold pendant.',
        price: 29.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/choker-with-gold-pendant_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Choker with Triangle',
        description: 'Black choker with silver triangle pendant.',
        price: 47.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/choker-with-triangle_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Dainty Gold Necklace',
        description: 'Dainty gold necklace with two pendants.',
        price: 63.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/dainty-gold-necklace_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Dreamcatcher Pendant Necklace',
        description: 'Turquoise beaded dream catcher necklace.',
        price: 23.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/dreamcatcher-pendant-necklace_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Galaxy Earrings',
        description: 'One set of galaxy earrings, with sterling silver clasps.',
        price: 37.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/galaxy-earrings_925x.jpg',
        categoryId: 12,
        userId: 1,
      },
      {
        name: 'Gemstone Necklace',
        description: 'Gemstone pendant, housed in sterling silver.',
        price: 27.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/blue-gemstone-pendant_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Gold Bird Necklace',
        description: '14k Gold delicate necklace, with bird between two chains.',
        price: 79.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/gold-bird-necklace_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
      {
        name: 'Gold Elephant Necklace',
        description: 'Gold elephant charm on a thin gold chain.',
        price: 44.99,
        stock: 1,
        imageUrl: 'https://burst.shopifycdn.com/photos/gold-elephant-necklace_925x.jpg',
        categoryId: 13,
        userId: 1,
      },
    ],
  });


  console.log(`${products.count} products created.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });