import React from 'react';
import { images } from '../autres/data';
import "../styles/VieCampus.scss"; // Vérifie l'importation du fichier SCSS

const VieCampus = () => {
    return (
    <section className="student-life">
        
        <div className="campus-life">
            <div className="campus-life__header">
                <h2>Vie des campus</h2>
                <p>
                L’istitut Supérieur Rapha veille à l’accompagnement de ses étudiants et étudiantes et à leur épanouissement
                tout au long du cursus universitaire.
                </p>
                <hr className="underline" />
            </div>

            <div className="campus-life__image-wrapper">
                <img src={images.home34} alt="Image d'accueil" />
                <div className="vertical-bar"></div>
                <div className="campus-life__corner-mark">
                    <div className="horizontal"></div>
                    <div className="vertical"></div>
                </div>
            </div>
        </div>
        
        
        <div className="container">
          <div className="content-grid1">
                <div className='child'>
                    <h1>La vie étudiante</h1>
                    <p className="intro-text">
                        Animation, sport, culture, engagement citoyen... l'UCLouvain entend
                        offrir à ses étudiant·es une vie extra-académique 
                        riche et épanouissante.
                    </p>
                </div>
                
                {/* Image ajoutée ici */}
                <div className="campus-image-container">
                    <img src={images.home9} alt="Image d'accueil" className="her-img" />
                </div>
          </div>
          
          
          <div className="content-grid">
                <div className="highlight-box">
                    <h2>LA VIE ÉTUDIANTE À L'UCLOUVAIN</h2>
                </div>
                
                <div className="items-list">
                    <ul>
                        <li> Culture</li> 
                        <li>Sport</li>
                        <li> Associations étudiantes</li>
                        <li> Mobilité internationale</li>
                        <li> Bien manger</li>
                    </ul>
                </div>

                <div className="cta-container">
                    <button className="cta-button">
                    En savoir plus sur la vie étudiante
                    <span className="arrow">→</span>
                    </button>
                </div>
          </div>
        </div>
    </section>
    );
  };
export default VieCampus;