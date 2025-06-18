import React from 'react';
import "../styles/FooterInscription.scss";


const FooterInscription = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="foote">
      <p>© {currentYear} Institut Supérieur Rapha – Tous droits réservés.</p>
    </footer>
  );
};

export default FooterInscription;
