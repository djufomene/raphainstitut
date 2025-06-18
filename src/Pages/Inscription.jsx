import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formationData } from "../autres/data";
import ProgressBar from "../components/ProgressBar"; // Import ajouté

import "../styles/Inscription.scss";

const options = [
  "Licences Professionnelles",
  "Licences Academiques",
  "Bachelor Degree",
  "BTS",
  "HND",
  "Certifications",
  "Licence Technologique",
  "Master Professionnel",
  "Master Academique",
  "Master Of Science",
  "Bachelor's of Technology",
  "Professional Master's Degree"
];

export default function Inscription() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    const encodedOption = encodeURIComponent(selectedOption);

    if (
      selectedOption === "Licences Professionnelles" ||
      selectedOption === "Licences Academiques" ||
      selectedOption === "Bachelor Degree" ||
      selectedOption === "BTS" ||
      selectedOption === "HND"
    )  {
        localStorage.setItem("currentStep", 1); // ✅ on fixe le step à 1
        navigate(`/InscriptionDetail/${encodedOption}`);
      } else {
        // Processus classique
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else if (selectedOption && formationData[selectedOption]) {
          navigate(`/formation/${encodedOption}`);
        }
      }
    };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="inscription-container">
         <ProgressBar currentStep={currentStep} /> 
      <fieldset>
        <h2 id="heading">Sign Up Your User Account</h2>
        <p className="order">Fill all form fields to go to the next step</p>
        <div className="form-card">
          <div className="radio-container">
            {options.map((option, index) => (
              <label className="label" key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
        <button
          className="action-button"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          Next
        </button>
      </fieldset>
    </div>
  );
}
