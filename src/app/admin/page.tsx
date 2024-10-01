"use client";

import React from 'react';
import { useUser } from '../../context/UserContext';

const AdminPage: React.FC = () => {
  const { user } = useUser();

  // Check if the user is an admin
  if (!user || user.roleId !== 1) {
    return <h1 className="text-red-500">Access Denied</h1>;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {user.email}! Here you can manage the application.</p>
    </div>
  );
};

export default AdminPage;
