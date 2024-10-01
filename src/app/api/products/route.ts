import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price } = body;

  const newProduct = await prisma.product.create({
    data: {
      name,
      price,
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
