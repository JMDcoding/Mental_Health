import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import AccountPage from './components/AccountPage';
import SelfAssessmentPage from './components/SelfAssessmentPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login', 'signup'
  const [mainView, setMainView] = useState('home'); // 'home', 'account', 'assessment'

  const navigateToSignup = () => setAuthView('signup');
  const navigateToLogin = () => setAuthView('login');
  const navigateToHome = () => setMainView('home');
  const navigateToAccount = () => setMainView('account');
  const navigateToAssessment = () => setMainView('assessment');

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setMainView('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthView('login'); // Revenir à la page de connexion après déconnexion
  };

  return (
    <div className="App">
      <div className="main-content">
        {isAuthenticated ? (
          {
            home: <HomePage onLogout={handleLogout} onNavigateToAccount={navigateToAccount} onNavigateToAssessment={navigateToAssessment} />,
            account: <AccountPage onLogout={handleLogout} onNavigateToHome={navigateToHome} />,
            assessment: <SelfAssessmentPage onNavigateToHome={navigateToHome} />
          }[mainView]
        ) : (
          authView === 'login' ? (
            <LoginForm onNavigateToSignup={navigateToSignup} onLoginSuccess={handleLoginSuccess} />
          ) : (
            <SignupForm onNavigateToLogin={navigateToLogin} onSignupSuccess={handleLoginSuccess} />
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
