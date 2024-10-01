"use client";

import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

interface ProductDetailsProps {
  product: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    description: string;
  };
}

// Fetch product details from the database based on the product ID
async function getProduct(id: number) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

// This is the Product Details page
const ProductDetails: React.FC<ProductDetailsProps> = async ({ params }: any) => {
  const product = await getProduct(parseInt(params.id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-600">{product.description}</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
