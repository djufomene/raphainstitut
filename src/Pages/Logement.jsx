import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../styles/Logement.scss";

const actualites = [
    {
      id: "1",
      titre: "UG célèbre ses lauréats",
      date: "12 Oct, 2024",
      slug: "laureats-ug",
      contenu: "L’Université de Garoua a organisé une cérémonie pour célébrer les lauréats...",
      image: "/images/slide1.jpg"
    },
    {
      id: "2",
      titre: "Nouveau partenariat avec l’hôpital central",
      date: "18 Oct, 2024",
      slug: "partenariat-hopital",
      contenu: "Un nouveau partenariat a été signé avec l’hôpital central pour renforcer...",
      image: "/images/slide2.jpg"
    },
    {
      id: "3",
      titre: "Séminaire IA et santé numérique",
      date: "25 Oct, 2024",
      slug: "seminaire-ia",
      contenu: "Ce séminaire a permis aux étudiants de découvrir les enjeux de l’IA en santé...",
      image: "/images/slide3.jpg"
    },
    {
      id: "4",
      titre: "Retour en images sur la journée sportive",
      date: "28 Oct, 2024",
      slug: "journee-sportive",
      contenu: "La journée sportive annuelle a été un succès avec une grande participation...",
      image: "/images/slide4.jpg"
    },
    {
      id: "5",
      titre: "Atelier sur la cybersécurité",
      date: "30 Oct, 2024",
      slug: "atelier-cyber",
      contenu: "Un atelier de sensibilisation à la cybersécurité a été animé par des experts...",
      image: "/images/slide5.jpg"
    },
  ];
  
const Logement = () => {
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
      <h1>Situations géographiques et contacts des bailleurs.</h1>

      <div className="content-layout">
        {/* Tableau des bailleurs */}
        <div className="table-section">
          <div className="table-responsive">
            <table className="contacts-table">
              <thead>
                <tr>
                  <th>Situation géographique</th>
                  <th>Prix</th>
                  <th>Contacts</th>
                  <th>Nombre de chambres</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Entrée PK8</td>
                  <td>30.000 FCFA</td>
                  <td>699 30 28 88</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Face ESG</td>
                  <td>30.000 FCFA</td>
                  <td>
                    <div>697 51 17 05</div>
                    <div>677 89 43 86</div>
                  </td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Carrefour la rénovation</td>
                  <td>30.000 FCFA / 25.000 FCFA</td>
                  <td>
                    <div>699 96 42 82</div>
                    <div>697 49 58 21</div>
                  </td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* File d'actualités */}
        <div className="articles-section">
          <div className="section-title-container">
                <h2>ARTICLES RÉCENTS</h2>
                <div className="arrows-container">
                    <span className="arrow">❮</span>
                    <span className="arrow">❯</span>
                </div>
          </div>
          <Slider {...sliderSettings} className="actualite-slider">
            {actualites.map((actu) => (
              <div key={actu.id} className="article-card">
                <h3>{actu.titre}</h3>
                <div className="article-content">
                  <strong>{actu.titre}</strong>
                  <div className="article-meta">
                    <span>{actu.date}</span>
                    <Link
                        to={`/actualite/${actu.id}`}
                        state={{ actu }}
                        className="voir-button"
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

export default Logement;
