import React from 'react';
import './HomePage.css';

const features = [
  { title: "Auto-évaluation", description: "PHQ-9, GAD-7, suivi, partage sécurisé" },
  { title: "Journal Émotionnel", description: "Assisté par IA, écrit/audio, suggestions" },
  { title: "Soutien Communautaire", description: "Entraide anonyme, contacts, lignes d’écoute" },
  { title: "Espace Victimes", description: "Témoignage anonyme, mode discret, plan de sécurité" },
  { title: "Groupes d'expression", description: "Profils variés, témoignages, coaching" },
  { title: "Aide aux Précaires", description: "Carte géolocalisée, chatbot, checklist" },
  { title: "Bouton de Crise", description: "Plan d’urgence, message de survie, ressources" },
  { title: "Sécurité & RGPD", description: "Données locales, compte anonyme, accès protégé" },
  { title: "Suivi par IA", description: "Analyse des journaux, détection des rechutes" },
  { title: "Timer Anti-ruminations", description: "Minuterie et suggestions apaisantes" },
  { title: "Mini-défis Quotidiens", description: "Défis bien-être, routines positives" },
  { title: "Micro-éducation", description: "Fiches, vidéos, quiz interactifs" },
  { title: "Parrainage entre Pairs", description: "Mise en relation anonyme et supervisée" },
  { title: "Agenda de Soins", description: "Gestion des RDV, rappels bienveillants" },
  { title: "Mode Urgence Invisible", description: "Faux écran, code secret, SOS caché" },
];

const HomePage = ({ onLogout }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Bienvenue !</h1>
        <button onClick={onLogout} className="logout-btn">Déconnexion</button>
      </header>
      <div className="homepage-body">
        <nav className="main-nav">
          <ul>
            {features.map((feature) => (
              <li key={feature.title}>
                <button className="nav-btn">
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="central-panel">
          <h2>Que souhaitez-vous faire ?</h2>
          <div className="button-grid">
            <button className="panel-btn">Jeux</button>
            <button className="panel-btn">Recherche</button>
            <button className="panel-btn">ASMR</button>
            <button className="panel-btn">Forum</button>
            <button className="panel-btn">Vocaux pour vous</button>
            <button className="panel-btn">Activités</button>
          </div>
        </main>
        <aside className="sidebar-specialists">
          <h3>Trouver un spécialiste</h3>
          <div className="search-specialist">
            <input type="text" placeholder="Spécialité, nom, lieu..." />
            <button>Rechercher</button>
          </div>
          <div className="map-placeholder">
            <p>Carte des spécialistes à proximité</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;