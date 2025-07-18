import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import "../styles/EcoleDedail.scss";

// Icône maison SVG simple
const HomeIcon = () => (
  <svg className="home-icon" width="16" height="16" viewBox="0 0 24 24" fill="#777">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

const EcoleDedail = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [schoolData, setSchoolData] = useState(null);
  const location = useLocation();
  const [specialites, setSpecialites] = useState({});

  useEffect(() => {
    if (location.state?.schoolData) {
      setSchoolData(location.state.schoolData);
    }
    if (location.state?.specialitesByFilter) {
      setSpecialites(location.state.specialitesByFilter);
    }
  }, [location]);

  const description = schoolData?.description1 || `Les spécialités proposées couvrent un large éventail de domaines professionnels...`;

  const filters = ["BTS", "HND", "Licence & Master", "BACHELOR", "TOUTES LES FILIÈRES"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return (
    <div className='global'> 
      {/* Ajout de la section Nos Ecoles qui est le lien pour retourner NosEtablissements*/}
      <div className="school-navigation">
        <span className="school-path">
          Nos Ecoles {/* Premier "Nos Ecoles" sans lien */}
          <HomeIcon /> {/* Notre icône SVG maison */}
          <Link to="/NosEtablissement" className="school-link">Nos Ecoles</Link> {/* Deuxième "Nos Ecoles" avec lien */}
          <span className='col'> - {schoolData?.name || "Ecole Supérieure de Gestion"}</span>
        </span>
      </div>

      <div className="specialites-page">
        <div className="left-section">
          <div className="content-wrapper">
            {schoolData && (
              <>
                <div className="school-header">
                  <img 
                    src={schoolData.logo} 
                    alt={`${schoolData.name} logo`} 
                    className="school-logo"
                    style={{ maxWidth: '150px' }} 
                  />
                  <h2>{schoolData.name}</h2>
                </div>
                
                <div className="image-container">
                  <img src={schoolData.image} alt={schoolData.name} />
                </div>

                <div className="description">
                  <p>{description}</p>
                </div>
              </>
            )}
          </div>  
        </div>

        <div className="right-section">
          <div className="specialites-container">
            <h1 className="main-title animate-item">Spécialités {schoolData?.name || "RHI"}</h1>

            {!activeFilter ? (
              <div className="filter-buttons">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`filter-button animate-item delay-${index}`}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <button
                  className="back-button animate-item"
                  onClick={() => setActiveFilter(null)}
                >
                  ← Retour
                </button>

                {specialites[activeFilter]?.map((item, index) => {
                  if (item.level === 2) {
                    return <h2 key={index} className={`animate-item delay-${index}`}>{item.title}</h2>;
                  } else if (item.level === 3) {
                    return <h3 key={index} className={`animate-item delay-${index}`}>{item.title}</h3>;
                  } else {
                    return (
                      <div key={index} className={`list-item ${item.isBold ? 'bold' : ''} animate-item delay-${index}`}>
                        {item.title}
                      </div>
                    );
                  }
                }) || <p>Aucune spécialité disponible pour ce filtre.</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoleDedail;