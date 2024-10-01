"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const AdminPage: React.FC = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: '',
    categoryId: 1, // Example category ID, modify as needed
    userId: user?.id || 1, // Example user ID, modify as needed
  });

  // Check if the user is an admin
  if (!user || user.roleId !== 1) {
    return <h1 className="text-red-500">Access Denied</h1>;
  }

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const createdProduct = await response.json();
    setProducts((prev) => [...prev, createdProduct]);
    setNewProduct({ name: '', description: '', price: 0, stock: 0, imageUrl: '', categoryId: 1, userId: user.id });
  };

  const handleDelete = async (id: number) => {
    const response = await fetch('/api/products', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {user.email}! Here you can manage the application.</p>

      <h2 className="text-2xl mt-4">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center my-2">
            <div>
              <strong>{product.name}</strong> - {product.description} - ${product.price} (Stock: {product.stock})
            </div>
            <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl mt-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} required className="border rounded w-full py-2 px-3 mb-2" />
          <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required className="border rounded w-full py-2 px-3 mb-2" />
          <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required className="border rounded w-full py-2 px-3 mb-2" />
          <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} required className="border rounded w-full py-2 px-3 mb-2" />
          <input type="text" name="imageUrl" placeholder="Image URL" value={newProduct.imageUrl} onChange={handleChange} className="border rounded w-full py-2 px-3 mb-2" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
