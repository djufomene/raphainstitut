// src/components/FormPreviousEducation.jsx
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import "../styles/FormPrecedenteEducation.scss";

export default function FormPrecedenteEducation() {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation"); // Remplace par la route suivante si elle existe
  };
//pour gérer automatiquement la date au niveau du footer 
  const currentYear = new Date().getFullYear();

  return (
    <div className="form-previous-container">
      <ProgressBar currentStep={2} />

      <form onSubmit={handleSubmit}>
        <h1>Précédente Formation</h1>
        <p className="description-text">
          Renseignez les informations en rapport avec votre précédente formation vous donnant accès à la nouvelle que vous désirez poursuivre.
        </p>

        <div className="form-columns">
          <div className="left-column">
            <div className="input-row">
              <div className="input-field">
                <label htmlFor="lastDiploma">Dernier Diplôme *</label>
                <input type="text" id="lastDiploma" name="lastDiploma" placeholder="Ex. Bac C, BTS Commerce, HND..." required />
              </div>
              <div className="input-field">
                <label htmlFor="graduationYear">Année d'obtention *</label>
                <input type="text" id="graduationYear" name="graduationYear" placeholder="Ex. 1991, 2018, ..." required />
              </div>
            </div>

            <div className="input-row">
              <div className="input-field">
                <label htmlFor="lastInstitution">Dernier Établissement *</label>
                <input type="text" id="lastInstitution" name="lastInstitution" placeholder="Ex. Institut Supérieur Rapha,..." required />
              </div>
              <div className="input-field">
                <label htmlFor="candidateStatus">Statut du candidat *</label>
                <select id="candidateStatus" name="candidateStatus" required>
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
              <input type="file" id="diplomaFile" accept=".png,.jpg,.jpeg,.pdf" required />
            </div>

            <div className="upload-field">
              <label htmlFor="birthCertificate">
                Copie Certifiée de l'Acte de naissance <br />
                <span>Déposez le fichier ici ou cliquez pour le télécharger. PNG, JPG ou PDF sont acceptés.</span>
              </label>
              <input type="file" id="birthCertificate" accept=".png,.jpg,.jpeg,.pdf" required />
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
          ></textarea>
        </div>


        <div className="boutons">
          <button type="button" className="previous" onClick={handlePrevious}>
            Précédent
          </button>
          <button type="submit" className="next">
            Suivant
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
