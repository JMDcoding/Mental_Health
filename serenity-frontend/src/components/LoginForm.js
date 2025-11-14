import React, { useState, useEffect } from 'react';
import './LoginForm.css';

const LoginForm = ({ onNavigateToSignup }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Au chargement du composant, on vérifie si un identifiant a été sauvegardé
  useEffect(() => {
    const rememberedIdentifier = localStorage.getItem('rememberedIdentifier');
    if (rememberedIdentifier) {
      setIdentifier(rememberedIdentifier);
      setRememberMe(true);
    }
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une fois, au montage

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique d'authentification à ajouter ici
    console.log('Tentative de connexion avec :', { identifier, password, rememberMe });

    // Sauvegarde ou supprime l'identifiant en fonction de la case à cocher
    if (rememberMe) {
      localStorage.setItem('rememberedIdentifier', identifier);
    } else {
      localStorage.removeItem('rememberedIdentifier');
    }

    alert(`Connexion demandée pour : ${identifier}`);
    // On ne réinitialise que le mot de passe pour une meilleure expérience
    setPassword('');
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        <div className="form-group">
          <label htmlFor="identifier">Nom d'utilisateur ou Email</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-options">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Se souvenir de moi
          </label>
        </div>
        <button type="submit" className="submit-btn">Se connecter</button>
        <p className="signup-link">
          Pas encore de compte ? <a href="#" onClick={onNavigateToSignup}>Créez-en un</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;