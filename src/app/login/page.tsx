"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for redirection
import { useUser } from '../../context/UserContext'; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const router = useRouter(); // Initialize useRouter for redirection

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Store the user data in context
      setUser(data.user); // Assuming the user data is returned in data.user
      console.log('Login successful:', data.user);

      // Redirect based on user role
      if (data.user.roleId === 1) {
        // If the user is an admin
        router.push('/admin'); // Adjust the path to your admin home
      } else {
        // If the user is a regular client
        router.push('/'); // Adjust the path to your app's home page
      }
    } else {
      // Handle login errors
      console.error('Login failed:', data.message);
      // You can also display an error message to the user
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <Link href="/signup" className="mx-4">Don't have an Account?</Link>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
