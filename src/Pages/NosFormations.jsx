import React, { useState, useEffect } from 'react';
import { images } from '../autres/data';
import { Link } from 'react-router-dom';
import "../styles/NosFormations.scss";

// Fonction pour générer un slug à partir du titre
const slugify = (title) => {
  const slugs = {
    "Science infirmières": "science-infirmieres",
    "Kinésithéraphie": "kinesitherapie",
    "Sage-Femme/ Maïeuticien": "sage-femme-maieuticien",
    "Analyse Médicale et Technique de Laboratoire": "analyse-medicale",
    "Imagerie Médicale et Radiologie": "imagerie-medicale",
    "Science Pharmaceutique": "science-pharmaceutique",
    "Odontostomatologie": "Odontostomatologie",
    "Opticien lunetier": "Opticien-lunetier",
    "Journalisme": "journalisme",
    "Télécommunication": "telecommunication",
    "Réseau et Sécurité informatique": "reseau-securite",
    "Gestion du Système d'Information": "gestion-systeme-information",
    "Infographie et Web design": "infographie-webdesign",
    "E-commerce et Marketing numérique": "ecommerce-marketing",
    "Maintenance des Appareils Biomedicaux": "maintenance-biomedical",
    "Hygène Sécurité et Environnement": "hygiene-securite",
    "Assurance(ASS)": "assurance",
    "Bangue(BQ)": "banque",
    "Commerce International (CI)": "commerce-international",
    "Communication des Organisation (CO)": "communication-organisation",
    "Comptabilité Informatisée de Gestion (CGE)": "comptabilite-gestion",
    "Douane et Transit (DT)": "douane-transit",
    "Droit des Affaires et de l'Entreprise (DAE)": "droit-affaires",
    "Gestion de la Qualité (GQ)": "gestion-qualite",
    "Gestion Fiscale (GF)": "gestion-fiscale",
    "Logistique et Transport (GLT)": "logistique-transport",
    "Marketing Commerce Vente (MCV)": "marketing-vente",
    "Ressources Humaines (RH)": "ressources-humaines",
    "Bâtiment": "Bâtiment",
    "Travaux publique": "Travaux-publique",
    "Géomètre topographe": "Géomètre-topographe",
    "Installation sanitaire": "Installation-sanitaire",
    "Froid et climatisation": "Froid-climatisation",
    "Energie renouvelable": "Energie-renouvelable",
    "Mécatronique": "Mécatronique",
    "Maintenance après vente automobile": "Maintenance-après-vente-automobile",
    "Maintenance industrielle et productive":  "Maintenance-industrielle-productive",
    "Construction mécanique": "Construction-mécanique",
    "Construction métallique": "Construction-métallique",
    "Chaudronnerie et soudure": "Chaudronnerie-soudure",
    "Production végétale": "Production-végétale",
    "Production animale": "Production-animale",
    "Entrepreneuriat agro-pastorale": "Entrepreneuriat-agro-pastorale",
    "Technique commerciale agricole": "Technique-commerciale-agricole",
    "Conseil agro-pastorale": "Conseil-agro-pastorale" 
  };
  return slugs[title] || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

// --- Données des programmes ---
const programs = [
  "Science infirmières",
  "Kinésithéraphie",
  "Sage-Femme/ Maïeuticien",
  "Analyse Médicale et Technique de Laboratoire",
  "Imagerie Médicale et Radiologie",
  "Science Pharmaceutique",
  "Odontostomatolie",
  "Opticien lunetier"
];

const programs1 = [
  "Journalisme",
  "Télécommunication",
  "Réseau et Sécurité informatique",
  "Gestion du Système d'Information",
  "Infographie et Web design",
  "E-commerce et Marketing numérique",
  "Maintenance des Appareils Biomedicaux",
  "Hygène Sécurité et Environnement"
];

const programs2 = [
  "Assurance(ASS)",
  "Bangue(BQ)",
  "Commerce International (CI)",
  "Communication des Organisation (CO)",
  "Comptabilité Informatisée de Gestion (CGE)",
  "Douane et Transit (DT)",
  "Droit des Affaires et de l'Entreprise (DAE)",
  "Gestion de la Qualité (GQ)",
  "Gestion Fiscale (GF)",
  "Logistique et Transport (GLT)",
  "Marketing Commerce Vente (MCV)",
  "Ressources Humaines (RH)"
];

const programs3 = [
  "Bâtiment",
  "Travaux publique",
  "Géomètre topographe",
  "Installation sanitaire",
  "Froid et climatisation",
  "Energie renouvelable",
  "Mécatronique",
  "Maintenance après vente automobile",
  "Maintenance industrielle et productive",
  "Construction mécanique",
  "Construction métallique",
  "Chaudronnerie et soudure"
];

const programs4 = [
  "Production végétale",
  "Production animale",
  "Entrepreneuriat agro-pastorale",
  "Technique commerciale agricole",
  "Conseil agro-pastorale"
];

const allPrograms = [
  ...programs.map(p => ({ title: p, category: "Sciences Médico-sanitaire" })),
  ...programs1.map(p => ({ title: p, category: "Informatique & Communication" })),
  ...programs2.map(p => ({ title: p, category: "Gestion & Commerce" })),
  ...programs3.map(p => ({ title: p, category: "Génie Industriel" })),
  ...programs4.map(p => ({ title: p, category: "Agro-Pastorale" }))
];

const items = [
  "Une demande manuscrite adressée au directeur",
  "Une photocopie certifiée de l'acte de naissance",
  "Une photocopie certifiée du baccalauréat ou tout diplôme équivalent",
  "02 photos d'identité 4x4 en couleur",
  "Copie du relevé de notes de 1ère année pour les étudiants postulant en 2ème année (quelque soit l'établissement d'origine)."
];

const NosFormations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState(allPrograms);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPrograms(allPrograms);
    } else {
      setFilteredPrograms(
        allPrograms.filter(program =>
          program.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <>
      <div className="page-header">
        <h1>Nos Formations Professionnelles</h1>
        <p>Découvrez notre large gamme de formations conçues pour répondre aux besoins du marché professionnel actuel.</p>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Rechercher une formation..." 
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgb(255, 255, 255)"/>
          </svg>
        </button>
      </div>

      <div className="contenair">
        {searchTerm ? (
          <div className="titel1">
            <h2>Résultats de la recherche</h2>
            <div className="program-grid">
              {filteredPrograms.length > 0 ? (
                filteredPrograms.map((program, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{program.title}</h3>
                      <p className="category">{program.category}</p>
                      <Link to={`/formations/${slugify(program.title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>Aucun résultat trouvé pour "{searchTerm}".</p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="titel1">
              <h2>Sciences Médico-sanitaire</h2>
              <div className="program-grid">
                {programs.map((title, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{title}</h3>
                      <Link to={`/formations/${slugify(title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="titel1">
              <h2>Informatique & Communication</h2>
              <div className="program-grid">
                {programs1.map((title, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{title}</h3>
                      <Link to={`/formations/${slugify(title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="titel1">
              <h2>Gestion & Commerce</h2>
              <div className="program-grid">
                {programs2.map((title, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{title}</h3>
                      <Link to={`/formations/${slugify(title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="titel1">
              <h2>Génie Industriel</h2>
              <div className="program-grid">
                {programs3.map((title, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{title}</h3>
                      <Link to={`/formations/${slugify(title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="titel1">
              <h2>Agro-Pastorale</h2>
              <div className="program-grid">
                {programs4.map((title, index) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={images.home11} alt="RHI Logo" className="logo" />
                    </div>
                    <div className="card-right">
                      <h3>{title}</h3>
                      <Link to={`/formations/${slugify(title)}`} className="btn">En savoir plus</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className='ha'>
          <h2>Constitution du dossier</h2>
          <div className='liste'>
            <h4>Brévet de Technicien Supérieur</h4>
            <ul className="liste-puces">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NosFormations;