import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import { images } from '../autres/data';

import "../styles/InscriptionDetail.scss";

export default function InscriptionDetail() {
  const { type } = useParams();
  const [selectedFil, setSelectedFil] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const domainOptions = {
    BTS: [
      { label: "Sciences Médico-sanitaire", value: "Sciences Médico-sanitaire" },
      { label: "Commerce et Gestion", value: "Commerce et Gestion" },
      { label: "Génie Informatique & Télécommunication", value: "Génie Informatique & Télécommunication" },
      { label: "Génie Industriel", value: "Génie Industriel" },
      { label: "Agro-Pastorale", value: "Agro-Pastorale" }
    ],
    HND: [
      { label: "Medical and Health Sciences", value: "Medical and Health Sciences" },
      { label: "Business and Management", value: "Business and Management" },
      { label: "Computer and Telecommunication Engineering", value: "Computer and Telecommunication Engineering" },
      { label: "Industrial Engineering", value: "Industrial Engineering" },
      { label: "Agro-Pastoral Studies", value: "Agro-Pastoral Studies" }
    ]
  };

  const handleCategoryClick = (filName) => {
    setSelectedFil(filName);
    setSelectedCategory("");
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleNext = () => {
    if (!selectedFil) {
      setErrorMessage("Veuillez sélectionner une catégorie principale.");
      return;
    }
    if (!selectedCategory) {
      setErrorMessage("Veuillez sélectionner une spécialité.");
      return;
    }
    if (!selectedTime) {
      setErrorMessage("Veuillez sélectionner un horaire (jour ou soir).");
      return;
    }

    setErrorMessage("");
    setCurrentStep(1);

    navigate("/form-personal", {
      state: {
        selectedFil,
        selectedCategory,
        selectedTime,
        type
      }
    });
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} />
      <div className="container1">
        <div className="colonne-gauche">
          <h1>Veuillez sélectionner votre catégorie.</h1>
          <p className="para">Sélectionnez le domaine d’étude qui vous intéresse</p>

          <div className="ligne-images ligne-1">
            {domainOptions[type]?.slice(0, 3).map((item, index) => (
              <div
                className={`image-container ${selectedFil === item.value ? "selected" : ""}`}
                key={index}
                onClick={() => handleCategoryClick(item.value)}
              >
                <img src={images.home40} alt="Icon" className="image-flottante" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="ligne-images ligne-2">
            {domainOptions[type]?.slice(3).map((item, index) => (
              <div
                className={`image-container ${selectedFil === item.value ? "selected" : ""}`}
                key={index + 3}
                onClick={() => handleCategoryClick(item.value)}
              >
                <img src={images.home40} alt="Icon" className="image-flottante" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="group">
            <h4>Formation en cours du :</h4>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="reponse"
                  value="jour"
                  checked={selectedTime === "jour"}
                  onChange={handleTimeChange}
                /> Jour
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="reponse"
                  value="soir"
                  checked={selectedTime === "soir"}
                  onChange={handleTimeChange}
                /> Soir
              </label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="boutons">
              <input type="button" className="previous action-button-previous" value="Précédent" onClick={handlePrevious} />
              <input
                type="button"
                className={`next action-button-next ${!(selectedFil && selectedCategory && selectedTime) ? "disabled" : ""}`}
                value="Suivant"
                onClick={handleNext}
                disabled={!(selectedFil && selectedCategory && selectedTime)}
              />
            </div>
          </div>
        </div>

        <div className="colonne-droite">
          {!selectedFil ? (
            <h5 id="status">Veuillez sélectionner une catégorie</h5>
          ) : (
            <CategoryForm fil={selectedFil} type={type} onSelectCategory={handleCategorySelection} selectedCategory={selectedCategory} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const CategoryForm = ({ fil, type, onSelectCategory, selectedCategory }) => {
  const categoriesByType = {
    BTS: {
      "Sciences Médico-sanitaire": [
        "Science infirmière",
        "Kinésithéraphie",
        "Sage femme / Maïeuticien",
        "Analyse médicale et technique de laboratoire",
        "Imagerie médicale et Radiologie",
        "Science pharmaceutique",
        "Odontostomatologie",
        "Opticien lunetier"
      ],
      "Commerce et Gestion": [
        "Gestion et comptabilité d'entreprise",
        "Gestion des projet",
        "Ressources humaines",
        "Transport et logistique",
        "Douane et transit",
        "Commerce international",
        "Infirmier HND",
        "Banque et finance",
        "Assurance",
        "E-commerce",
        "Comptabilité finance",
        "Gestion de la qualité",
        "Gestion des ONG"
      ],
      "Génie Informatique & Télécommunication": [
        "Génie logiciel",
        "Réseau et sécurité",
        "Télécommunications ",
        "Maintenance des systèmes informatiques ",
        "Informatique industrielle et automatisme",
        "Journalisme ",
        "Communication des organisations"
      ],
      "Génie Industriel": [
        "Bâtiment",
        "Travaux publique",
        "Géomètre topographe",
        "Installation sanitaire",
        "Froid et climatisation ",
        "Energie renouvelable",
        "Mécatronique",
        "Maintenance après vente automobile",
        "Maintenance industrielle et productive",
        "Construction mécanique",
        "Construction métallique",
        "Chaudronnerie et soudure"
      ],
      "Agro-Pastorale": [
        "Production végétale",
        "Production animale",
        "Entrepreneuriat agro-pastorale ",
        "Technique commerciale agricole",
        "Conseil agro-pastorale"
      ]
    },

    HND: {
      "Medical and Health Sciences": [
        "Nursing Science",
        "Physiotherapy",
        "Midwifery / Male Midwife",
        "Medical Analysis and Laboratory Techniques",
        "Medical Imaging and Radiology",
        "Pharmaceutical Science",
        "Odontostomatology",
        "Optician"
      ],
      "Business and Management": [
        "Business Management and Accounting",
        "Project Management",
        "Human Resources",
        "Transport and Logistics",
        "Customs and Transit",
        "International Trade",
        "Nursing HND",
        "Banking and Finance",
        "Insurance",
        "E-commerce",
        "Accounting and Finance",
        "Quality Management",
        "NGO Management"
      ],
      "Computer and Telecommunication Engineering": [
        "Software Engineering",
        "Networks and Security",
        "Telecommunications",
        "Computer Systems Maintenance",
        "Industrial Computing and Automation",
        "Journalism",
        "Organizational Communication"
      ],
      "Industrial Engineering": [
        "Construction",
        "Public Works",
        "Surveying and Topography",
        "Sanitary Installation",
        "Refrigeration and Air Conditioning",
        "Renewable Energy",
        "Mechatronics",
        "Automotive After-Sales Maintenance",
        "Industrial and Production Maintenance",
        "Mechanical Construction",
        "Metal Construction",
        "Boilermaking and Welding"
      ],
      "Agro-Pastoral Studies": [
        "Crop Production",
        "Animal Production",
        "Agro-pastoral Entrepreneurship",
        "Agricultural Sales Techniques",
        "Agro-pastoral Consulting"
      ]
    }
  };

  const categories = categoriesByType[type] || {};

  return (
    <div className={fil}>
      <h4>{fil}</h4>
      {categories[fil]?.map((item, index) => (
        <label key={index} className={selectedCategory === item ? "selected" : ""}>
          <input
            type="radio"
            name="option"
            value={item}
            checked={selectedCategory === item}
            onChange={() => onSelectCategory(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};
