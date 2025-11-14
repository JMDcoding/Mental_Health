import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('login'); // 'login', 'signup'

  const navigateToSignup = () => setCurrentView('signup');
  const navigateToLogin = () => setCurrentView('login');

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login'); // Revenir à la page de connexion après déconnexion
  };

  if (isAuthenticated) {
    return <HomePage onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      {currentView === 'login' ? (
        <LoginForm onNavigateToSignup={navigateToSignup} onLoginSuccess={handleLoginSuccess} />
      ) : (
        <SignupForm onNavigateToLogin={navigateToLogin} onSignupSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
