import React from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <a href={`/products/${product.id}`} className="mt-2 block bg-blue-600 text-white py-2 text-center rounded hover:bg-blue-700 transition">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
