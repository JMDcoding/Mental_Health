import React, { useState } from 'react';
import './SpecialistCodeModal.css';

const SpecialistCodeModal = ({ isOpen, onClose, onSubmit, testTitle }) => {
  const [specialistName, setSpecialistName] = useState('');
  const [confidentialCode, setConfidentialCode] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ specialistName, confidentialCode });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>Accès au test restreint</h2>
          <p>Pour accéder au test "<strong>{testTitle}</strong>", veuillez renseigner les informations fournies par votre spécialiste.</p>
          <div className="modal-form-group">
            <label htmlFor="specialistName">Nom du spécialiste</label>
            <input
              type="text"
              id="specialistName"
              value={specialistName}
              onChange={(e) => setSpecialistName(e.target.value)}
              required
            />
          </div>
          <div className="modal-form-group">
            <label htmlFor="confidentialCode">Code confidentiel</label>
            <input
              type="password"
              id="confidentialCode"
              value={confidentialCode}
              onChange={(e) => setConfidentialCode(e.target.value)}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="modal-btn cancel" onClick={onClose}>Annuler</button>
            <button type="submit" className="modal-btn submit">Valider</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpecialistCodeModal;