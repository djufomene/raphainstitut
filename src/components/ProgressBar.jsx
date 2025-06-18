import "../styles/ProgressBar.scss";
import { Link } from "react-router-dom";
import { images } from '../autres/data';



export default function ProgressBar({ currentStep = -1 }) {
  const steps = ["Account", "Personal", "Image", "Finish"];

  return (
    <div className="header">
      <div className="header-row">
        <Link to="/"><img src={images.home11} alt="Microscope" className="img" /></Link>
        <p className="already-registered">
          Vous êtes déjà préinscrit ?  
          <Link to="/" className="home"> Retourner sur le site</Link>
        </p>
      </div>

      <ul id="progressbar">
        {steps.map((step, index) => (
          <li
            key={index}
            className={index <= currentStep ? "active" : ""}
            id={step.toLowerCase()}
          >
            <strong>{step}</strong>
          </li>
        ))}
      </ul>

      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${currentStep >= 0 ? ((currentStep + 1) / steps.length) * 100 : 0}%`,
          }}
        ></div>
      </div>
</div>

  );
}