import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Module } from '../types';

interface ContentViewerProps {
  module: Module;
  onClose: () => void;
}

const ContentViewer: React.FC<ContentViewerProps> = ({ module, onClose }) => {
  const openInNewTab = () => {
    window.open(module.link, '_blank');
  };

  const getEmbedUrl = (url: string) => {
    // Convert Google Drive URLs to embed format
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 truncate flex-1 mr-4">
            {module.title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={openInNewTab}
              className="p-2 text-gray-500 hover:text-pink-500 transition-colors rounded-lg hover:bg-gray-100"
              title="Abrir em nova aba"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4">
          <iframe
            src={getEmbedUrl(module.link)}
            className="w-full h-full min-h-[500px] border-0 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;