import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import { images } from '../autres/data';

import "../styles/InscriptionDetail.scss";

export default function InscriptionDetail() {
  const { type } = useParams(); // récupère le type depuis l’URL
  const [selectedFil, setSelectedFil] = useState("");
  const [currentStep, setCurrentStep] = useState(0); // Étape 0 pour cette page
  const navigate = useNavigate();

  const handleCategoryClick = (filName) => {
    setSelectedFil(filName);
  };

  const handleNext = () => {
    // Logique de navigation vers l'étape suivante
    setCurrentStep(1); // Passe à l'étape suivante
    navigate("/form-personal", {
        state: {
          selectedFil,
          type
        }
      });
      };

  const handlePrevious = () => {
    navigate(-1); // Retour à la page précédente
  };

  //pour gérer automatiquement la date au niveau du footer 
  const currentYear = new Date().getFullYear();

  return (

    <div>
        <ProgressBar currentStep={currentStep} /> {/* Barre à 25% */}
        <div className="container1">
            {/* Colonne gauche */}
            <div className="colonne-gauche">
                <h1>Veuillez sélectionner votre catégorie.</h1>
                <p className="para">Sélectionnez le domaine d’étude qui vous intéresse</p>

                <div className="ligne-images">
                <div className="image-container" onClick={() => handleCategoryClick("fil1")}>
                    <img src={images.home40} alt="Microscope" className="image-flottante" />
                    <p>Sciences Médico-sanitaire</p>
                </div>
                <div className="image-container" onClick={() => handleCategoryClick("fil3")}>
                    <img src={images.home40} alt="Microscope" className="image-flottante" />
                    <p>Science et Gestion</p>
                </div>
                <div className="image-container" onClick={() => handleCategoryClick("fil2")}>
                    <img src={images.home40} alt="Microscope" className="image-flottante" />
                    <p>Génie Informatique</p>
                </div>
                </div>

                <div className="ligne-images">
                <div className="image-container" onClick={() => handleCategoryClick("fil4")}>
                    <img src={images.home40} alt="Microscope" className="image-flottante" />
                    <p>Génie des Télécommunications et Réseaux</p>
                </div>
                <div className="image-container" onClick={() => handleCategoryClick("fil5")}>
                    <img src={images.home40} alt="Microscope" className="image-flottante" />
                    <p>Communication</p>
                </div>
                </div>

                <div className="group">

                    <h4>Formation en cour du :</h4>
                    <dir className="radio-group">
                        <label className="radio-option">
                        <input type="radio" name="reponse" value="oui"  />
                        Jour
                        </label>

                        <label className="radio-option">
                        <input type="radio" name="reponse" value="non"  />
                        Soir
                        </label>
                    </dir>

                    <div className="boutons">
                        <input type="button" className="previous action-button-previous" value="Pécedent"  onClick={handlePrevious} />
                        <input type="button" className="next action-button-next" value="Suivant"  onClick={handleNext} />
                    </div>
                </div>

            </div>

            {/* Colonne droite */}
            <div className="colonne-droite">
                {!selectedFil ? (
                <h5 id="status">Veuillez sélectionner une catégorie</h5>
                ) : (
                <CategoryForm fil={selectedFil} type={type} />
                )}
            </div>

        </div>
        <Footer />
    </div>
    
  );
}

// Composant interne
const CategoryForm = ({ fil, type }) => {
  const categoriesByType = {
    BTS: {
      fil1: ["Infirmier BTS", "Kiné BTS"],
      fil2: ["Développement BTS", "Web Design BTS"],
      fil3: ["Commerce BTS", "Marketing BTS"],
      fil4: ["Télécom BTS", "Réseaux BTS"],
      fil5: ["Journalisme BTS", "E-commerce BTS"]
    },
    HND: {
      fil1: ["Infirmier HND", "Laboratoire HND"],
      fil2: ["Système HND", "Design HND"],
      fil3: ["Gestion HND", "Transport HND"],
      fil4: ["Télécom HND", "Sécurité HND"],
      fil5: ["Communication HND", "Marketing Numérique HND"]
    },
    Licences: {
      fil1: [
        "Science infirmière", "Kinésithéraphie", "Sage femme / Maïeuticien",
        "Analyse médicale et technique de laboratoire", "Imagerie médicale et radiologie",
        "Science pharmaceutique", "Odontostomatologie", "Délégué médical",
        "Auxiliaire de vie", "Auxiliaire de pharmacie"
      ],
      fil2: [
        "Gestion du système informatique", "Infographie et web design"
      ],
      fil3: [
        "Assurance", "Banque", "Commerce international", "Communication des organisations",
        "Comptabilité informatisée de gestion", "Douane et transit", "Droit des affaires et de l'entreprise",
        "Gestion de la qualité", "Gestion fiscale", "Logistique et transport",
        "Marketing commerce vente", "Ressources humaines"
      ],
      fil4: [
        "Télécommunication", "Réseau et sécurité informatique", "Hygiène sécurité et environnement"
      ],
      fil5: [
        "Journalisme", "E-commerce et marketing numérique"
      ]
    }
  };

  const categories = categoriesByType[type] || {};

  return (
    <div className={fil}>
      <h4>{fil.replace("fil", "Catégorie ")} sélectionnée - {type}</h4>
      {categories[fil]?.map((item, index) => (
        <label key={index}>
          <input type="radio" name="option" value={item} />
          {item}
        </label>
      ))}
    </div>
  );
};
