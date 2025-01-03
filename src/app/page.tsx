"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';


const HomePage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/featured-products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our E-Commerce Store!</h1>
          <p className="text-lg mb-8">Your one-stop shop for amazing products.</p>
          <a href="/products" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us Today!</h2>
          <p className="mb-6">Sign up for exclusive offers and updates.</p>
          <a href="/signup" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
