import "../styles/Footer.scss";
import React, { useState, useEffect } from "react"; // Importation de React et des hooks useState, useEffect
import { images } from "../autres/data"; // Importation des images depuis un fichier de données
import { Link } from 'react-router-dom';

const Footer = () => {
  // État local pour gérer l'affichage du bouton "Remonter en haut"
  const [showButton, setShowButton] = useState(false);

  // Effet pour écouter l'événement de défilement et afficher/cacher le bouton
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Afficher le bouton si l'utilisateur a défilé de plus de 300px
      } else {
        setShowButton(false); // Cacher sinon
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {/* 📌 Section "À propos" avec les informations de contact */}
        <div className="aboutUs" data-aos="fade-right">
          <img src={images.home11} alt="Rapha Logo" />
          <br />
          <i className="fas fa-map-marker"></i> Adresse : Kotto/Douala, Cameroun
          <br />
          <i className="fas fa-phone"></i> Tel : +237 697532784
          <br />
          <i className="fas fa-envelope"></i> Gmail : buiercompany@gmail.com
          <br />
          <i className="fas fa-address-book"></i> B.P xxxx
          <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Nos heures d'ouverture :</span>
          <br />
          Lundi - Vendredi : 08h - 17h <br />
          Samedi : 08h - 12h <br />
        </div>

        {/* 📌 Intégration de Google Maps */}
        <div className="newsletter" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509236.9864640337!2d9.298146230851025!3d4.333113846259412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610f8dc697ff55%3A0xe66a98343f3de7f2!2sinstitut%20sup%C3%A9rieur%20rapha!5e0!3m2!1sfr!2scm!4v1727685924556!5m2!1sfr!2scm"
            width="300"
            height="350"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 📌 Section Instagram avec affichage d'images */}
        <div className="instagram" data-aos="fade-left">
         
          <div className="links">
           <h2>Liens utiles</h2>
           <Link to="/">Contact</Link>
           <Link to="/">Préinscription</Link>
           <Link to="/">Nos formations</Link>
           <Link to="/">Nos écoles</Link>
           <Link to="/">Contact</Link>
          </div>
        </div>

        {/* 📌 Section des réseaux sociaux */}
        <div className="follow" data-aos="fade-left">
          <h2>Follow us</h2>
          <p>Let us social</p>

          <div className="main">
            <div className="icon fb">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </div>

            <div className="icon twt">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </div>

            <div className="icon lnk">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </div>

      {/* 📌 Droits d'auteur */}
      <div className="footer2">
        Copyright &copy; 2022 | Rapha Higher Institut
      </div>

      {/* 📌 Bouton "Remonter en haut" qui apparaît après un certain scroll */}
      {showButton && (
        <div className="moveUp" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>
            <i className="fas fa-arrow-circle-up fa-2x"></i>
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
