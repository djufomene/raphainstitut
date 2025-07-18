// src/components/FormPrecedenteEducation.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import "../styles/FormPrecedenteEducation.scss";
import sendEmail from '../utils/sendEmail';

export default function FormPrecedenteEducation() {
  const navigate = useNavigate();
  const location = useLocation();

  const previousData = location.state || {};

  const [formData, setFormData] = useState({
    lastDiploma: "",
    graduationYear: "",
    lastInstitution: "",
    candidateStatus: "",
    diplomaFile: null,
    birthCertificate: null,
    motivationLetter: ""
  });

  const [fileError, setFileError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    // On ne bloque rien ici
    setFormData(prev => ({ ...prev, [name]: file }));
  };

  const isFormValid = () => {
    return (
      formData.lastDiploma.trim() !== "" &&
      formData.graduationYear.trim() !== "" &&
      formData.lastInstitution.trim() !== "" &&
      formData.candidateStatus.trim() !== "" &&
      formData.diplomaFile !== null &&
      formData.birthCertificate !== null
    );
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validTypes = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    const maxSize = 2 * 1024 * 1024; // 2 Mo

    // Vérification du fichier diplôme
    if (formData.diplomaFile) {
      if (!validTypes.includes(formData.diplomaFile.type)) {
        setFileError("❌ Le fichier du diplôme doit être au format PDF, PNG, JPG ou JPEG.");
        return;
      }
      if (formData.diplomaFile.size > maxSize) {
        setFileError("❌ Le fichier du diplôme dépasse la taille maximale autorisée de 2 Mo.");
        return;
      }
    }

    // Vérification du fichier acte de naissance
    if (formData.birthCertificate) {
      if (!validTypes.includes(formData.birthCertificate.type)) {
        setFileError("❌ Le fichier de l'acte de naissance doit être au format PDF, PNG, JPG ou JPEG.");
        return;
      }
      if (formData.birthCertificate.size > maxSize) {
        setFileError("❌ Le fichier de l'acte de naissance dépasse la taille maximale autorisée de 2 Mo.");
        return;
      }
    }


    setFileError(""); // Réinitialise l'erreur si tout est bon

    const fullFormData = {
      ...previousData,
      ...formData
    };

    const success = await sendEmail(fullFormData);

    if (success) {
      navigate('/confirmation');
    } else {
      setFileError("❌ Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };

  return (
    <div className="form-previous-container">
      <ProgressBar currentStep={2} />

      <form onSubmit={handleSubmit}>
        <h1>Précédente Formation</h1>
        <p className="description-text">
          Renseignez les informations en rapport avec votre précédente formation vous donnant accès à la nouvelle que vous désirez poursuivre.
        </p>

        {/* Message d'erreur affiché en haut du formulaire */}
        {fileError && <p className="file-error-message-top">{fileError}</p>}

        <div className="form-columns">
          <div className="left-column">
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="lastDiploma">Dernier Diplôme *</label>
                <input
                  type="text"
                  id="lastDiploma"
                  name="lastDiploma"
                  placeholder="Ex. Bac C, BTS Commerce, HND..."
                  value={formData.lastDiploma}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="graduationYear">Année d'obtention *</label>
                <input
                  type="text"
                  id="graduationYear"
                  name="graduationYear"
                  placeholder="Ex. 1991, 2018, ..."
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label htmlFor="lastInstitution">Dernier Établissement *</label>
                <input
                  type="text"
                  id="lastInstitution"
                  name="lastInstitution"
                  placeholder="Ex. Institut Supérieur Rapha, ..."
                  value={formData.lastInstitution}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="candidateStatus">Statut du candidat *</label>
                <select
                  id="candidateStatus"
                  name="candidateStatus"
                  value={formData.candidateStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un statut</option>
                  <option value="Nouveau">Nouveau candidat</option>
                  <option value="Ancien">Ancien candidat</option>
                </select>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="upload-field">
              <label htmlFor="diplomaFile">
                Copie Certifiée du Dernier diplôme <br />
                <span>Déposez le fichier ici ou cliquez pour le télécharger. PNG, JPG ou PDF sont acceptés.</span>
              </label>
              <input
                type="file"
                id="diplomaFile"
                name="diplomaFile"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>

            <div className="upload-field">
              <label htmlFor="birthCertificate">
                Copie Certifiée de l'Acte de naissance <br />
                <span>Déposez le fichier ici ou cliquez pour le télécharger. PNG, JPG ou PDF sont acceptés.</span>
              </label>
              <input
                type="file"
                id="birthCertificate"
                name="birthCertificate"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="input-field motivation-block">
          <label htmlFor="motivationLetter" className="motivationLetter">Lettre de motivation ou demande (facultatif)</label>
          <textarea
            id="motivationLetter"
            name="motivationLetter"
            placeholder="Rédiger votre demande..."
            rows="5"
            value={formData.motivationLetter}
            onChange={handleChange}
          ></textarea>
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
  );
}
