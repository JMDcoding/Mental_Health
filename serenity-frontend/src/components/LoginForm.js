import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous ajouteriez la logique pour authentifier l'utilisateur.
    // Par exemple, appeler une API avec l'identifiant et le mot de passe.
    console.log('Tentative de connexion avec :', { identifier, password });
    alert(`Connexion demandée pour : ${identifier}`);
    // Réinitialiser les champs après la soumission
    setIdentifier('');
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
        <button type="submit" className="submit-btn">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;