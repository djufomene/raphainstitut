import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formations } from '../autres/formationsData';
import DownloadButton from './DownloadButton';
import "../styles/FormationDetail.scss";

const FormationDetail = () => {
  const { id } = useParams();
  const formation = formations.find(f => f.id === id);

  if (!formation) return <div className="content"><p>Formation non trouvée.</p></div>;

  const allFormationsByCategory = {
    "Sciences Médico-sanitaire": [
      { id: 'science-infirmieres', title: "Science infirmières" },
      { id: 'kinesitherapie', title: "Kinésithérapie" },
      { id: 'sage-femme-maieuticien', title: "Sage-Femme/Maïeuticien" },
      { id: 'analyse-medicale', title: "Analyse Médicale et Technique de Laboratoire" },
      { id: 'imagerie-medicale', title: "Imagerie Médicale et Radiologie" },
      { id: 'science-pharmaceutique', title: "Science Pharmaceutique" },
      { id: 'Odontostomatologie', title: "Odontostomatologie" },
      { id: 'Opticien-lunetier', title: "Opticien lunetier" }
    ],
    "Informatique & Communication": [
      { id: 'journalisme', title: "Journalisme" },
      { id: 'telecommunication', title: "Télécommunication" },
      { id: 'reseau-securite', title: "Réseau et Sécurité informatique" },
      { id: 'gestion-systeme-information', title: "Gestion du Système d'Information" },
      { id: 'infographie-webdesign', title: "Infographie et Web design" },
      { id: 'ecommerce-marketing', title: "E-commerce et Marketing numérique" },
      { id: 'maintenance-biomedical', title: "Maintenance des Appareils Biomedicaux" },
      { id: 'hygiene-securite', title: "Hygène Sécurité et Environnement" }
    ],
    "Gestion & Commerce": [
      { id: 'assurance', title: "Assurance(ASS)" },
      { id: 'banque', title: "Bangue(BQ)" },
      { id: 'commerce-international', title: "Commerce International (CI)" },
      { id: 'communication-organisation', title: "Communication des Organisation (CO)" },
      { id: 'comptabilite-gestion', title: "Comptabilité Informatisée de Gestion (CGE)" },
      { id: 'douane-transit', title: "Douane et Transit (DT)" },
      { id: 'droit-affaires', title: "Droit des Affaires et de l'Entreprise (DAE)" },
      { id: 'gestion-qualite', title: "Gestion de la Qualité (GQ)" },
      { id: 'gestion-fiscale', title: "Gestion Fiscale (GF)" },
      { id: 'logistique-transport', title: "Logistique et Transport (GLT)" },
      { id: 'marketing-vente', title: "Marketing Commerce Vente (MCV)" },
      { id: 'ressources-humaines', title: "Ressources Humaines (RH)" }
    ],

    "Génie Industriel": [
      { id: 'Bâtiment', title: "Bâtiment" },
      { id: 'Travaux-publique', title: "Travaux publique" },
      { id: 'Géomètre-topographe', title: "Géomètre topographe" },
      { id: 'Installation-sanitaire', title: "Installation sanitaire" },
      { id: 'Froid-climatisation', title: "Froid et climatisation" },
      { id: 'Energie-renouvelable', title: "Energie renouvelable" },
      { id: 'Mécatronique', title: "Mécatronique" },
      { id: 'Maintenance-après-vente-automobile', title: "Maintenance après vente automobile"},
      { id: 'Maintenance-industrielle-productive', title: "Maintenance industrielle et productive" },
      { id: 'Construction-mécanique', title: "Construction mécanique" },
      { id: 'Construction-métallique', title: "Construction métallique" },
      { id: 'Chaudronnerie-soudure', title: "Chaudronnerie et soudure" }
    ],

    "Agro Pastorale": [
      { id: 'Production-végétale', title: "Production végétale" },
      { id: 'Production-animale', title: "Production animale" },
      { id: 'Entrepreneuriat-agro-pastorale', title: "Entrepreneuriat agro-pastorale" },
      { id: 'Technique-commerciale-agricole', title: "Technique commerciale agricole" },
      { id: 'Conseil-agro-pastorale', title: "Conseil agro-pastorale" },
      { id: 'Energie-renouvelable', title: "Energie renouvelable" }
    ],
  };

  const similarFormations = allFormationsByCategory[formation.category]?.filter(f => f.id !== id) || [];

  return (
    <div className="content">
      <div className="formation-header">
        <h1>{formation.title}</h1>
        <p className="formation-category">{formation.category}</p>
      </div>

      <div className="formation-page">
        <div className="timeline">
          {formation.content.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-left">
                <div className="number-dot">
                  <span className="number">{item.number}</span>
                  <span className="dot" />
                </div>
              </div>

              <div className="timeline-content">
                <h2>{item.title}</h2>
                <div className="content-text">
                  {typeof item.content === 'string' && (
                    <p>{item.content}</p>
                  )}

                  {Array.isArray(item.content) && (
                    <ul>
                      {item.content.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  )}

                  {!Array.isArray(item.content) && typeof item.content !== 'string' && (
                    <>
                      {item.content.generiques && (
                        <>
                          <h4>{item.content.generiques.titre}</h4>
                          <ul>
                            {item.content.generiques.items.map((text, i) => (
                              <li key={`gen-${i}`}>{text}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {item.content.specifiques && (
                        <>
                          <h4>{item.content.specifiques.titre}</h4>
                          <ul>
                            {item.content.specifiques.items.map((text, i) => (
                              <li key={`spec-${i}`}>{text}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sidebar">
          <div className="sidebar-box">
            <h3>{formation.category}</h3>
            <ul className="similar-formations-list">
              {similarFormations.map((formation) => (
                <li key={formation.id}>
                  <Link 
                    to={`/formations/${formation.id}`}
                    className="formation-link"
                  >
                    {formation.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-box">
            <h3>Page Facebook</h3>
            <div className="facebook-box">
              <img
                src="/images/facebook-img.png"
                alt="Institut Universitaire"
                className="facebook-img"
              />
              <button className="facebook-btn">Suivre la Page</button>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-box1">
        <h3>Documents à télécharger pour avoir plus d'informations sur la formation</h3>
        <div className='download-header'>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;
