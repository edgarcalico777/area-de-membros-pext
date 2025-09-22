import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/modules';

const MoreContentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff009d] to-[#e6008a] text-white p-6 rounded-b-3xl mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Mais Conteúdos</h1>
        <p className="text-center text-pink-100 text-lg">Expanda seus conhecimentos</p>
      </div>

      {/* Products Grid */}
      <div className="px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-sm">
            {products.length > 0 && <ProductCard product={products[0]} />}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Por que escolher nossos produtos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Resultados 10X Melhores</h3>
              <p className="text-sm text-gray-600">Equipamentos profissionais para acelerar seus resultados</p>
            </div>
            
            <div className="p-4">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Oferta Especial</h3>
              <p className="text-sm text-gray-600">50% de desconto por tempo limitado</p>
            </div>
            
            <div className="p-4">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Qualidade Premium</h3>
              <p className="text-sm text-gray-600">Kit completo com equipamentos de alta qualidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContentPage;