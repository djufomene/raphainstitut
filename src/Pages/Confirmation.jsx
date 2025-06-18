// src/components/Confirmation.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from '../components/FooterInscription';
import "../styles/Confirmation.scss";

export default function Confirmation() {
  return (
    <div className="confirmation-container">
         <ProgressBar currentStep={3} />
      <div className="icon-check">✅</div>
      <h1 className="title">Préinscription Terminée</h1>
      <p className="message">
        Merci d’avoir effectué votre préinscription dans notre établissement. Votre dossier sera vérifié et nous vous contacterons plus tard.
      </p>

      <div className="confirmation-footer">
        <div className="retour-site">
          <Link to="/" className="retour-link">
            ← Retourner sur le site
          </Link>
        </div>

        <div className="reseaux-sociaux">
          <h2>Suivez nous sur les Reseaux Sociaux</h2>
          <div className="icons">
            <a href="#" className="facebook"><FaFacebookF /></a>
            <a href="#" className="twitter"><FaTwitter /></a>
            <a href="#" className="linkedin"><FaLinkedinIn /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="whatsapp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
