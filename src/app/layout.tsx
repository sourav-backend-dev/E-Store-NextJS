// src/app/layout.tsx
"use client"; // Add this line

import './globals.css';
import { UserProvider } from '@/context/UserContext';
import Navbar from '../components/Navbar'; // Adjust path if necessary

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
