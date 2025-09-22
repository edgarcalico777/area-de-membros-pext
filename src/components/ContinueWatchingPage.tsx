import React from 'react';
import { Play, Clock, CheckCircle } from 'lucide-react';

const ContinueWatchingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff009d] to-[#e6008a] text-white p-6 rounded-b-3xl mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Continuar Assistindo</h1>
        <p className="text-center text-pink-100 text-lg">Retome de onde parou</p>
      </div>

      <div className="px-4 max-w-4xl mx-auto">
        {/* Coming Soon Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
          <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-[#ff009d]" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Em breve!</h2>
          <p className="text-gray-600 mb-6">
            Estamos desenvolvendo uma funcionalidade incrível para você continuar assistindo 
            seus vídeos de onde parou. Em breve você poderá:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Histórico de Progresso</h3>
                <p className="text-sm text-gray-600">Veja exatamente onde parou em cada vídeo</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Retomar Automaticamente</h3>
                <p className="text-sm text-gray-600">Continue exatamente do ponto onde parou</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Lista Personalizada</h3>
                <p className="text-sm text-gray-600">Seus conteúdos em andamento organizados</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Sincronização</h3>
                <p className="text-sm text-gray-600">Acesse de qualquer dispositivo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for future content */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 text-center">
          <Play className="w-16 h-16 text-[#ff009d] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Por enquanto, acesse todos os módulos na aba Principal
          </h3>
          <p className="text-gray-600">
            Todos os seus conteúdos estão disponíveis e organizados para você!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingPage;