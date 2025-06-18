import React from 'react';

const DownloadButton = () => {
  return (
    <a 
      href="/documents/journalisme.pdf"
      download="journalisme.pdf"
      className="download-button"
      aria-label="Télécharger la fiche détaillée"
    >

<svg
        xmlns="http://www.w3.org/2000/svg"
        width="35" height="20"
        fill="currentColor"
        viewBox="0 0 4 20"
      >
        <path d="M5 20h14v-2H5v2zm7-18L5.33 8h3.67v6h4V8h3.67L12 2z" />
      </svg>
       TÉLÉCHARGER LA FICHE DÉTAILLÉE
    </a>
  );
};

export default DownloadButton;
