import React from 'react';
import { LogOut, User, Bell, Shield, HelpCircle, Heart } from 'lucide-react';

interface SettingsPageProps {
  onLogout: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout }) => {
  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff009d] to-[#e6008a] text-white p-6 rounded-b-3xl mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Configurações</h1>
        <p className="text-center text-pink-100 text-lg">Gerencie sua conta</p>
      </div>

      <div className="px-4 max-w-2xl mx-auto">
        {/* User Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-[#ff009d] w-16 h-16 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Usuária Pompoar</h2>
              <p className="text-gray-600">callium.adm@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Settings Options */}
        <div className="space-y-4">
          {/* Account Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Conta</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Perfil</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Notificações</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Privacidade</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Suporte</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Central de Ajuda</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">Sobre o App</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sair da Conta</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;