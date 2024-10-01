// src/components/Navbar.tsx
import Link from 'next/link';
import { useUser } from '../context/UserContext';

const Navbar: React.FC = () => {
  const { user } = useUser();
  console.log("USER IS :",user);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div>
        <Link href="/" className="text-white mr-4">Home</Link>
        <Link href="/products" className="text-white mr-4">Products</Link>
          {user && user.roleId === 1 && (
            <>
              <Link href="/admin" className="text-white mr-4">Admin Dashboard</Link>
              <Link href="/admin/products" className="text-white mr-4">Manage Products</Link>
            </>
          )}
          {user && user.roleId === 2 && (
            <>
              <Link href="/products" className="text-white mr-4">Products</Link>
              <Link href="/cart" className="text-white mr-4">Cart</Link>
            </>
          )}
        </div>
        <div>
          {user ? (
            <Link href="/logout" className="text-white">Logout</Link>
          ) : (
            <Link href="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
