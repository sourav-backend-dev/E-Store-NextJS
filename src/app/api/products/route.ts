import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    include: { user: true, category: true },
  });
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, description, price, stock, imageUrl, categoryId, userId } = body;
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock,
      imageUrl,
      category: { connect: { id: categoryId } }, // Connect to the category
      user: { connect: { id: userId } }, // Connect to the user
    },
  });
  return NextResponse.json(newProduct);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  await prisma.product.delete({
    where: { id },
  });
  return NextResponse.json({ message: 'Product deleted' });
}
