"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from '../../../context/UserContext';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ManageProductsPage: React.FC = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<{ name: string; price: number }>({ name: '', price: 0 });

  // Check if the user is an admin
  if (!user || user.roleId !== 1) {
    return <h1 className="text-red-500">Access Denied</h1>;
  }

  // Fetch products from the server when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    setProducts((prev) => [...prev, data]);
    setNewProduct({ name: '', price: 0 }); // Reset form
  };

  const handleDeleteProduct = async (id: number) => {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    setProducts((prev) => prev.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold">Manage Products</h1>
      
      <form onSubmit={handleAddProduct} className="mb-6">
        <h2 className="text-xl">Add New Product</h2>
        <div className="mb-4">
          <label className="block mb-2">Product Name:</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>

      <h2 className="text-xl">Product List</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-2">ID</th>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Price</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b p-2">{product.id}</td>
              <td className="border-b p-2">{product.name}</td>
              <td className="border-b p-2">${product.price.toFixed(2)}</td>
              <td className="border-b p-2">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProductsPage;
