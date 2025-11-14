import React, { useState } from 'react';
import './SignupForm.css';
import './LoginForm.css'; // On importe les styles communs

const SignupForm = ({ onNavigateToLogin, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    country: '',
    city: '',
    hobbies: '',
    doctor: '',
    pathology: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer les données à votre API
    console.log('Données du nouveau compte :', formData);
    alert('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
    // Simule une création de compte et connexion réussies.
    onSignupSuccess();
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Création de compte</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Pseudo</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="country">Pays</label>
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ville</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Passe-temps</label>
          <textarea id="hobbies" name="hobbies" value={formData.hobbies} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="doctor">Médecin traitant (optionnel)</label>
          <input type="text" id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="pathology">Pathologie spécifique (optionnel)</label>
          <textarea id="pathology" name="pathology" value={formData.pathology} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-btn">Créer mon compte</button>
        <p className="login-link">
          Déjà un compte ? <a href="#" onClick={onNavigateToLogin}>Connectez-vous</a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;