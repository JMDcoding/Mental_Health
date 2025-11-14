import React from 'react';
import './AccountPage.css';

const AccountPage = ({ onNavigateToHome, onLogout }) => {
  return (
    <div className="account-page-container">
      <header className="account-page-header">
        <button onClick={onNavigateToHome} className="back-btn">&#10094; Retour</button>
        <h1>Mon Espace Compte</h1>
        <button onClick={onLogout} className="logout-btn-alt">Déconnexion</button>
      </header>
      <main className="account-content">
        <section className="account-section">
          <h3>Paramètres</h3>
          <p>Gérez les paramètres de votre compte et de l'application.</p>
          {/* Contenu des paramètres ici */}
        </section>
        <section className="account-section">
          <h3>Informations personnelles</h3>
          <p>Mettez à jour vos informations personnelles.</p>
          {/* Contenu des informations personnelles ici */}
        </section>
        <section className="account-section">
          <h3>Dossier Médical</h3>
          <p>Consultez et gérez votre dossier médical partagé.</p>
          {/* Contenu du dossier médical ici */}
        </section>
        <section className="account-section">
          <h3>Statistiques</h3>
          <p>Visualisez vos progrès et statistiques d'utilisation.</p>
          {/* Contenu des statistiques ici */}
        </section>
      </main>
    </div>
  );
};

export default AccountPage;