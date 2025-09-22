import React from 'react';
import { Play, FileText, ExternalLink } from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onClick: (module: Module) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group overflow-hidden max-w-sm mx-auto"
      onClick={() => onClick(module)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={module.image} 
          alt={module.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-[#ff009d] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {module.type === 'video' ? <Play className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#ff009d] transition-colors duration-300">
          {module.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 flex items-center">
            {module.type === 'video' ? <Play className="w-4 h-4 mr-1" /> : <FileText className="w-4 h-4 mr-1" />}
            {module.type === 'video' ? 'Vídeo' : 'PDF'}
          </span>
          
          <ExternalLink className="w-4 h-4 text-[#ff009d] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;