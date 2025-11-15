import React, { useState } from 'react';
import './SelfAssessmentPage.css';
import SpecialistCodeModal from './SpecialistCodeModal';

const assessmentCategories = [
  {
    category: 'Dépression',
    tests: [
      { id: 'phq-9', title: 'PHQ-9' }, { id: 'bdi-ii', title: 'BDI-II' }, { id: 'ham-d', title: 'HAM-D' }, { id: 'ces-d', title: 'CES-D' },
    ],
  },
  {
    category: 'Anxiété',
    tests: [
      { id: 'gad-7', title: 'GAD-7' }, { id: 'stai', title: 'STAI' }, { id: 'bai', title: 'BAI' }, { id: 'hads-a', title: 'HADS (anxiété)' }, { id: 'scared', title: 'SCARED' },
    ],
  },
  {
    category: 'Stress / Détresse psychologique',
    tests: [
      { id: 'pss', title: 'PSS' }, { id: 'dass-21', title: 'DASS-21' }, { id: 'ghq-12', title: 'GHQ-12' }, { id: 'k10', title: 'K10' },
    ],
  },
  {
    category: 'Suicide / Idées suicidaires',
    tests: [
      { id: 'c-ssrs', title: 'C-SSRS' }, { id: 'ssi', title: 'SSI' }, { id: 'phq-9-item9', title: 'PHQ-9 (item 9)' },
    ],
  },
  {
    category: 'Burnout',
    tests: [ { id: 'mbi', title: 'MBI' }, { id: 'cbi', title: 'CBI' } ],
  },
  {
    category: 'Addictions',
    tests: [ { id: 'audit', title: 'AUDIT' }, { id: 'dast-10', title: 'DAST-10' }, { id: 'fagerstrom', title: 'Fagerström' }, { id: 'assist', title: 'ASSIST' } ],
  },
  {
    category: 'Troubles alimentaires',
    tests: [ { id: 'eat-26', title: 'EAT-26' }, { id: 'scoff', title: 'SCOFF' } ],
  },
  {
    category: 'Sommeil',
    tests: [ { id: 'isi', title: 'ISI' }, { id: 'psqi', title: 'PSQI' } ],
  },
  {
    category: 'Hypersensibilité',
    tests: [ { id: 'hsp-scale', title: 'HSP Scale' } ],
  },
  {
    category: 'Estime de soi',
    tests: [ { id: 'rses', title: 'Échelle de Rosenberg' } ],
  },
  {
    category: 'Bien-être général',
    tests: [ { id: 'who-5', title: 'WHO-5' }, { id: 'panas', title: 'PANAS' } ],
  },
];

const freeCategories = [
  'Dépression',
  'Anxiété',
  'Stress / Détresse psychologique',
  'Sommeil',
  'Bien-être général'
];

const SelfAssessmentPage = ({ onNavigateToHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleNavClick = (categoryId) => {
    const element = document.getElementById(categoryId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredCategories = assessmentCategories
    .map(category => {
      // Filtre les tests dont le titre correspond à la recherche
      const filteredTests = category.tests.filter(test =>
        test.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Retourne la catégorie avec uniquement les tests filtrés
      return { ...category, tests: filteredTests };
    })
    // Filtre les catégories pour n'afficher que celles qui correspondent à la recherche
    // ou qui contiennent encore des tests après le filtrage précédent.
    .filter(category =>
      category.category.toLowerCase().includes(searchQuery.toLowerCase()) || category.tests.length > 0
    );

  const handleTestClick = (test, isLocked) => {
    if (isLocked) {
      setSelectedTest(test);
      setIsModalOpen(true);
    } else {
      alert(`Lancement du test ${test.title}`);
    }
  };

  const handleModalSubmit = (data) => {
    console.log('Données soumises :', data, 'pour le test :', selectedTest.title);
    alert('Vérification des informations... Accès accordé !');
    setIsModalOpen(false);
    // Ici, vous pourriez lancer le test
  };

  return (
    <div className="assessment-page-container">
      <header className="assessment-page-header">
        <div className="header-left">
          <button onClick={onNavigateToHome} className="back-btn-assessment">&#10094; Retour à l'accueil</button>
          <h1>Catalogue des Auto-évaluations</h1>
        </div>
        <div className="assessment-search-bar">
          <input
            type="text"
            placeholder="Rechercher un test ou une catégorie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      <div className="assessment-page-body">
        <nav className="assessment-nav">
          <ul>
            {assessmentCategories.map(category => (
              <li key={category.category}>
                <button onClick={() => handleNavClick(category.category)}>
                  {category.category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="assessment-catalog">
          {filteredCategories.map(category => (
            <section key={category.category} id={category.category} className="assessment-category" >
              <h2>{category.category}</h2>
              <div className="assessment-grid">
                {category.tests.map(test => {
                  const isLocked = !freeCategories.includes(category.category);
                  return (
                    <button key={test.id} className="test-card-btn" onClick={() => handleTestClick(test, isLocked)}>
                      {test.title}
                      {isLocked && <span className="lock-icon">🔒</span>}
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
          {filteredCategories.length === 0 && <p className="no-results-message">Aucun test ne correspond à votre recherche.</p>}
        </main>
      </div>
      <SpecialistCodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        testTitle={selectedTest?.title}
      />
    </div>
  );
};

export default SelfAssessmentPage;