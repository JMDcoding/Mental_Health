import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login' ou 'signup'

  const navigateToSignup = () => setCurrentView('signup');
  const navigateToLogin = () => setCurrentView('login');

  return (
    <div className="App">
      {currentView === 'login' ? (
        <LoginForm onNavigateToSignup={navigateToSignup} />
      ) : (
        <SignupForm onNavigateToLogin={navigateToLogin} />
      )}
    </div>
  );
}

export default App;
