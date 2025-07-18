import React from "react";
import Slider from "react-slick";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { actualites } from "../autres/data"; // adapte le chemin si besoin
import "../styles/ActualiteDetail.scss";


// Icône maison SVG simple
const HomeIcon = () => (
  <svg className="home-icon" width="16" height="16" viewBox="0 0 24 24" fill="#777">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);
  
const ActualiteDetail = () => {

  const { id } = useParams();
   const location = useLocation();
   const actu = location.state?.actu;

   if (!actu) return <p>Actualité non trouvée ou chargée sans contexte.</p>;

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1, // Afficher 1 slide par défaut
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        cssEase: "ease-in-out",
        arrows: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 3000, // Tout écran <= 3000px
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024, // Tout écran <= 1024px
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768, // Tout écran <= 768px
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

  return (
    <div className="tableau-contacts-container">
      <div className="school">
        <span className="schoolPath">
          Actualités {/* Premier "Nos Ecoles" sans lien */}
          <HomeIcon /> {/* Notre icône SVG maison */}
          <Link to="#" className="schoollink">Actualités</Link> {/* Deuxième "Nos Ecoles" avec lien */}
        </span>
      </div>

      <div className="content-layout">
        
        <div className="actualite-detail">
            <div className="titre-global">
              <h1>{actu.titre}</h1>
            </div>
            <p><strong>{actu.date}</strong></p>

            <div className="grid-2x2-images">
              {actu.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Illustration ${index + 1}`}
                  className="detail-image"
                />
              ))}
            </div>
          <p className="texte-actualite">{actu.contenu}</p>
        </div>

        {/* File d'actualités */}
        <div className="articles-section1">
          <div className="section-title-container1">
                <h2>ARTICLES RÉCENTS</h2>
                <div className="arrows-container1">
                    <span className="arrow">❮</span>
                    <span className="arrow">❯</span>
                </div>
          </div>
          <Slider {...sliderSettings} className="actualite-slider">
          {actualites.map((article) => (
              <div key={article.id} className="article-card1">
                <h3>{article.titre}</h3>
                <div className="article-content1">
                  <strong>{article.titre}</strong>
                  <div className="article-meta1">
                    <span>{article.date}</span>
                    <Link
                      to={`/actualite/${article.id}`}
                      state={{ actu: article }}
                      className="voir-button1"
                    >
                      VOIR
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ActualiteDetail;
