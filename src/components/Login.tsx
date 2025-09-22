import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  error?: string;
}

const Login: React.FC<LoginProps> = ({ onLogin, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff009d] to-[#e6008a] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="https://i.imgur.com/YEbCmpZ.jpg" 
              alt="Pompoar Logo" 
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-lg"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vinda!</h1>
            <p className="text-gray-600">Faça login para acessar seus módulos</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#ff009d]/20 focus:border-[#ff009d] transition-all duration-300 text-gray-800 placeholder-gray-500"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#ff009d]/20 focus:border-[#ff009d] transition-all duration-300 text-gray-800 placeholder-gray-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white border-2 border-[#ff009d] text-[#ff009d] font-bold py-4 rounded-2xl hover:bg-[#ff009d]/5 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#ff009d] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-pink-100">
              Faça login com suas credenciais de acesso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;