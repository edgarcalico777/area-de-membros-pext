import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ModuleCard from './ModuleCard';
import ContentViewer from './ContentViewer';
import { modules } from '../data/modules';
import { Module } from '../types';

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [itemsPerView, setItemsPerView] = useState(1);

  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, modules.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20">
      {/* Header with Logo */}
      <div className="bg-gradient-to-r from-[#ff009d] to-[#e6008a] text-white p-6 rounded-b-3xl mb-8">
        <div className="text-center">
          <img 
            src="https://i.imgur.com/YEbCmpZ.jpg" 
            alt="Pompoar Logo" 
            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-2">Seus Módulos</h1>
          <p className="text-pink-100 text-lg">Explore e assista seus conteúdos</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="px-4 mb-8">
        <div className="relative max-w-7xl mx-auto">
          {modules.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 text-[#ff009d] hover:bg-pink-50 transition-all duration-300 z-10 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 text-[#ff009d] hover:bg-pink-50 transition-all duration-300 z-10 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {modules.map((module) => (
                <div 
                  key={module.id} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <ModuleCard module={module} onClick={handleModuleClick} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        {modules.length > itemsPerView && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#ff009d] scale-125' 
                    : 'bg-gray-300 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-[#ff009d] mb-1">{modules.length}</div>
              <div className="text-gray-600 text-sm">Módulos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ff009d] mb-1">100%</div>
              <div className="text-gray-600 text-sm">Acesso Liberado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Viewer Modal */}
      {selectedModule && (
        <ContentViewer 
          module={selectedModule} 
          onClose={() => setSelectedModule(null)} 
        />
      )}
    </div>
  );
};

export default HomePage;