import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import "../styles/FormPersonal.scss";

export default function FormPersonal() {
  const location = useLocation();
  const navigate = useNavigate();

  // Récupère données de l'étape précédente (type, selectedFil, selectedCategory, selectedTime)
  const previousData = location.state || {};

  const [formData, setFormData] = useState({
    gender: "",
    lastName: "",
    firstName: "",
    phone: "",
    birthDate: "",
    birthPlace: "",
    email: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoie les données cumulées à la page suivante
    navigate("/FormPrecedenteEducation", {
      state: {
        ...previousData,    // données issues de la page précédente
        ...formData // données personnelles saisies ici
      }
    });
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  const isFormValid = () => {
    const requiredFields = [
      "gender",
      "lastName",
      "firstName",
      "phone",
      "birthDate",
      "birthPlace",
      "email"
    ];
    return requiredFields.every(field => formData[field]?.trim() !== "");
  };

  return (
    <div>
      <ProgressBar currentStep={1} />
      <div className="form-personal-container">
        <form onSubmit={handleSubmit}>
          <h1>Informations Personnelles</h1>
          <p className="description-text">
            Renseignez toutes vos informations personnelles pour nous permettre de vous recontacter plus facilement.
          </p>
          <p className="instruction-text">
            Veuillez remplir tous les champs obligatoires marqués d'un *
          </p>

          {/* Civilité */}
          <div className="form-group">
            <h4>Civilité *</h4>
            <div className="radio-group horizontal">
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="Mr"
                  checked={formData.gender === "Mr"}
                  onChange={handleChange}
                  required
                />
                Mr
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="gender"
                  value="Mme"
                  checked={formData.gender === "Mme"}
                  onChange={handleChange}
                />
                Mme
              </label>
            </div>
          </div>

          {/* Informations personnelles */}
          <div className="form-group">
            <h4>Informations Personnelles</h4>
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="lastName">Nom *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="firstName">Prénom *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Numéro de Téléphone *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Votre numéro"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Date et lieu de naissance */}
          <div className="form-group">
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="birthDate">Date de naissance *</label>
                <input
                  id="birthDate"
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="birthPlace">Lieu de naissance *</label>
                <input
                  id="birthPlace"
                  type="text"
                  name="birthPlace"
                  placeholder="Lieu de naissance"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="email">Adresse Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Parents / Tuteurs */}
          <div className="form-group">
            <h4>Parents / Tuteurs</h4>
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="fatherName">Nom du Père / Tuteur</label>
                <input
                  id="fatherName"
                  type="text"
                  name="fatherName"
                  placeholder="Nom complet"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="fatherOccupation">Occupation</label>
                <input
                  id="fatherOccupation"
                  type="text"
                  name="fatherOccupation"
                  placeholder="Profession"
                  value={formData.fatherOccupation}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="fatherPhone">Numéro de Téléphone</label>
                <input
                  id="fatherPhone"
                  type="tel"
                  name="fatherPhone"
                  placeholder="Numéro de téléphone"
                  value={formData.fatherPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="motherName">Nom de la Mère / Tutrice</label>
                <input
                  id="motherName"
                  type="text"
                  name="motherName"
                  placeholder="Nom complet"
                  value={formData.motherName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="motherOccupation">Occupation</label>
                <input
                  id="motherOccupation"
                  type="text"
                  name="motherOccupation"
                  placeholder="Profession"
                  value={formData.motherOccupation}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="motherPhone">Numéro de Téléphone</label>
                <input
                  id="motherPhone"
                  type="tel"
                  name="motherPhone"
                  placeholder="Numéro de téléphone"
                  value={formData.motherPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="boutons">
            <button type="button" className="previous" onClick={handlePrevious}>
              Précédent
            </button>
            <button
              type="submit"
              className={`next ${!isFormValid() ? "disabled" : ""}`}
              disabled={!isFormValid()}
            >
              Suivant
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}
