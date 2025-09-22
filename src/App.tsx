import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ContinueWatchingPage from './components/ContinueWatchingPage';
import MoreContentPage from './components/MoreContentPage';
import SettingsPage from './components/SettingsPage';
import TabNavigation from './components/TabNavigation';
import { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [loginError, setLoginError] = useState<string>('');

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('pompoar_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Simple authentication with fixed credentials
    if (email === 'callium.adm@gmail.com' && password === 'acesso123') {
      const userData: User = {
        email,
        isAuthenticated: true,
      };
      setUser(userData);
      localStorage.setItem('pompoar_user', JSON.stringify(userData));
      setLoginError('');
    } else {
      setLoginError('Credenciais inválidas, tente novamente');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('pompoar_user');
    setActiveTab('home');
  };

  // If user is not authenticated, show login screen
  if (!user?.isAuthenticated) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  // Render appropriate page based on active tab
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'continue':
        return <ContinueWatchingPage />;
      case 'more':
        return <MoreContentPage />;
      case 'settings':
        return <SettingsPage onLogout={handleLogout} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;