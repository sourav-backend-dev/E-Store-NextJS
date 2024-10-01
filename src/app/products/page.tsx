"use client";
import React from 'react';
import ProductCard from '../../components/ProductCard';

const products = [
    { id: 1, title: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product 4', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product 5', price: 24.99, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product 6', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Product 7', price: 34.99, image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Product 8', price: 44.99, image: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Product 9', price: 15.99, image: 'https://via.placeholder.com/150' },
];


const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <p>Welcome,! Here are the products.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
