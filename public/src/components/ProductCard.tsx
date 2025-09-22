import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleClick = () => {
    window.open(product.checkoutUrl, '_blank');
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group overflow-hidden max-w-sm mx-auto"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-[#ff009d] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ShoppingBag className="w-5 h-5" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#ff009d] mb-3 line-clamp-2">
          {product.title}
        </h3>
        
        {product.description && (
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">
            {product.description}
          </p>
        )}
        
        <div className="mt-auto">
          <button className="w-full bg-[#ff009d] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#e6008a] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>{product.ctaText || 'Adquirir'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;