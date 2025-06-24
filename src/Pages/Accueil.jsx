import React, { useState, useEffect } from 'react';
import "../styles/Accueil.scss";
import { images } from '../autres/data';
import { motion } from "framer-motion";
import { FaBookOpen, FaLightbulb, FaUserGraduate, FaHandshake } from "react-icons/fa";  /* Début WhyChooseUs */ 
import CountUp from "react-countup";   /*  AnimationEffect */ 
import Slider from "react-slick"; // ✅ Correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { FaUniversity } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { actualites } from "../autres/data"; // adapte le chemin si besoin



const Accueil = () => {
 
   const navigate = useNavigate();
  
    useEffect(() => {
      // Effet de parallaxe sur le fond
      const handleScroll = () => {
        const yPos = window.scrollY * 0.5;
        document.querySelector('.background-image').style.transform = `translateY(${yPos}px)`;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: 'fas fa-graduation-cap',
      title: "Formations d'Excellence",
      text: "Des programmes académiques reconnus internationalement",
    },
    {
      icon: 'fas fa-flask',
      title: 'Recherche Innovante',
      text: 'Des laboratoires à la pointe de la technologie',
    },
    {
      icon: 'fas fa-globe',
      title: 'Ouverture Internationale',
      text: 'Partenariats avec les plus grandes universités mondiales',
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 993) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const next = () => {
    setVisibleIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setVisibleIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const visibleCards = cards.slice(visibleIndex, visibleIndex + cardsPerView).length === cardsPerView
    ? cards.slice(visibleIndex, visibleIndex + cardsPerView)
    : [...cards.slice(visibleIndex), ...cards.slice(0, cardsPerView - (cards.length - visibleIndex))];



 {/* Début WhyChooseUs */}

  const features = [
    {
      icon: <FaBookOpen />, 
      title: "Formations diversifiées et adaptées au marché",
      description: "RHI propose une large gamme de programmes dans des domaines tels que l'ingénierie, la gestion, l'informatique, et les sciences de la santé, conçus pour répondre aux besoins du marché actuel et futur."
    },
    {
      icon: <FaLightbulb />, 
      title: "Pédagogie pratique et innovante",
      description: "Avec une approche axée sur la pratique, les étudiants bénéficient de stages, de projets concrets et d'un environnement d'apprentissage moderne pour renforcer leurs compétences."
    },
    {
      icon: <FaUserGraduate />, 
      title: "Encadrement académique de qualité",
      description: "RHI dispose d’un corps enseignant qualifié, composé d’experts nationaux et internationaux, offrant un accompagnement personnalisé et des formations de haut niveau."
    },
    {
      icon: <FaHandshake />, 
      title: "Excellente insertion professionnelle",
      description: "Grâce à des partenariats avec des entreprises locales et internationales, RHI assure un fort taux d'employabilité pour ses diplômés, facilitant ainsi leur intégration sur le marché du travail."
    }
  ];
 {/* Fin WhyChooseUs */}


 // État pour les onglets événements
   const [activeTab, setActiveTab] = useState('upcoming');

   
  // Début des Données événements et Actualité

   const events = {
    upcoming: [
      {
        id: 1,
        title: "Soutenances des rapports de stage en BTS-HND ",
        date: "1 Mai 2025",
        description: "Soutenances des rapports de stage à l'institut Supérieur Rapha.",
        image: images.home25
      },
      {
        id: 2,
        title: "Visite officielle de l’Université de Ngaoundéré au campus RHI",
        date: "30 Avril 2025",
        description: "Visite officielle de l’Université de Ngaoundéré au campus RHI.",
        image: images.home23
      },

      {
        id: 3,
        title: "Conférence sur l'IA",
        date: "20 Décembre 2023",
        description: "Interventions d'experts internationaux sur les dernières tendances en IA.",
        image: images.home22
      }
    ],
    past: [
      {
        id: 3,
        title: "Forum des Métiers",
        date: "15 Mars 2023",
        description: "Rencontre avec des professionnels de divers secteurs.",
        image: images.home21
      }
    ]
  };

  // Fin des Données événements et Actualité


    //admission 
    const admissionsData = [
      {
        title: "BTS-HND",
        description: "Il se prépare généralement en 2 ans après le baccalauréat"
      },
      {
        title: " Licence Académique",
        description: "La Licence Académique est un diplôme universitaire de niveau Bac+3, délivré après trois années d’études supérieures. Elle fait partie du système LMD (Licence – Master – Doctorat)."
      },
      {
        title: "Licence académique ",
        description: "La Licence Professionnelle est un diplôme universitaire de niveau Bac+3, conçu pour permettre une insertion rapide dans le monde du travail. Elle est accessible après un Bac+2."
      },
      {
        title: "Master Professionnelle",
        description: "Professionnalisant, le master pro vise à rendre opérationnel les étudiants dès leur sortie de formation dans le supérieur."
      }
    ];

  //admission 


  // Début AnimatedNumber

 const sectionStyle = {
        background: `linear-gradient(rgba(100, 116, 222, 0.85), rgba(186, 196, 237, 0.85)), url(${images.home1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };

  // Fin AnimatedNumber


  //Début Galeries
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  const carouselSlides = [
      {
        title: "Formation numérique",
        description: "Des modules interactifs et accessibles.",
        image: images.home24,
      },
      {
        title: "Références automatisées",
        description: "Gagnez du temps avec Zotero et Mendeley.",
        image: images.home22,
      },
      {
        title: "Analyse de données",
        description: "Utilisez Excel et R pour explorer vos résultats.",
        image: images.home23,
      },
    ];


    const carouselSettings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8500,
      arrows: true,
      beforeChange: (_, next) => {
        setAnimateText(false);
        setCurrentSlide(next);
      },
      afterChange: () => {
        setTimeout(() => setAnimateText(true), 50);
      },
    };

  //Fin Galérie

  // Début Partenaires
      const imageList = [images.home7, images.home8, images.home5, images.home11];
    const settings = {
      infinite: true, // Défilement infini
      speed: 3000, // Vitesse de transition
      autoplay: true, // Démarrage automatique
      autoplaySpeed: 1000, // Pas d'arrêt entre les transitions
      cssEase: "linear", // Mouvement fluide
      slidesToShow: 4, // Nombre d'images visibles
      slidesToScroll: 1, // Défilement image par image
      arrows: false, // Supprime les flèches de navigation
      dots: false, // Supprime les petits points en bas

       responsive: [
        {
          breakpoint: 429,
          settings: {
            slidesToShow: 3,
          },
        }
      ],
    };

    // Fin Partenaires

    const [isHovered, setIsHovered] = useState(false);

  
  return (
    <div className="accueil">
        <div className="home-container">
            {/* Fond dégradé avec image */}
            <div className="background-overlay"></div>
            <div className="background-image"></div>
            
            {/* Contenu principal */}
            <div className="hero-content">
                <h1 className="main-title">
                    {[..."Bienvenue à l'Institut Supérieur Rapha"].map((letter, index) => (
                      letter === ' ' 
                        ? <span key={index}>&nbsp;</span>
                        : <span 
                            key={index} 
                            className="letter-animate"
                            translate="no" // Ajout ici
                          >
                            {letter}
                          </span>
                    ))}
                  </h1>

                {/* <h1 className="main-title">
                  <span className="letter-animate">B</span>
                  <span className="letter-animate">i</span>
                  <span className="letter-animate">e</span>
                  <span className="letter-animate">n</span>
                  <span className="letter-animate">v</span>
                  <span className="letter-animate">e</span>
                  <span className="letter-animate">n</span>
                  <span className="letter-animate">u</span>
                  <span className="letter-animate">e</span>
                  <span> </span>
                  <span className="letter-animate">à</span>
                  <span> </span>
                  <span className="letter-animate">l</span>
                  <span className="letter-animate">'</span>
                  <span className="letter-animate">I</span>
                  <span className="letter-animate">n</span>
                  <span className="letter-animate">s</span>
                  <span className="letter-animate">t</span>
                  <span className="letter-animate">i</span>
                  <span className="letter-animate">t</span>
                  <span className="letter-animate">u</span>
                  <span className="letter-animate">t</span>
                  <span> </span>
                  <span className="letter-animate">S</span>
                  <span className="letter-animate">u</span>
                  <span className="letter-animate">p</span>
                  <span className="letter-animate">é</span>
                  <span className="letter-animate">r</span>
                  <span className="letter-animate">i</span>
                  <span className="letter-animate">e</span>
                  <span className="letter-animate">u</span>
                  <span className="letter-animate">r</span>
                  <span> </span>
                  <span className="letter-animate">R</span>
                  <span className="letter-animate">a</span>
                  <span className="letter-animate">p</span>
                  <span className="letter-animate">h</span>
                  <span className="letter-animate">a</span>
                </h1> */}
                
                <p className="subtitle animate-subtitle">
                Excellence Académique • Innovation • Recherche
                </p>
                
                <div className="cta-buttons">
                  <Link to="/Admission"  className="cta-button primary animate-button"
                    onClick={() => navigate('/Admission')}>Découvrir la Bibliothèque
                  </Link> {/* Deuxième "Nos Ecoles" avec lien */}
                  <Link to="/NosFormations"  className="cta-button secondary animate-button">Explorer les Formations</Link>
                </div>
            </div>
            
            {/* Section de présentation */}
            <div className="info-section">
              <button onClick={prev} className="nav-button">←</button>
              {visibleCards.map((card, index) => (
                <div key={index} className="info-card slide-in-right">
                  <i className={card.icon}></i>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
              <button onClick={next} className="nav-button">→</button>
            </div>

      </div>

      {/* Bloc principal avec titre et description */}
      <div className="text-container">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rejoignez-nous
        </motion.h3>

        <motion.h2
          className="block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Votre <span className="color">réussite</span> est notre{" "}
          <span className="color">inspiration</span> <br />
          Ensemble, nous façonnons{" "}
          <span className="color">l'excellence</span>
        </motion.h2>

        <motion.p
          className="text-block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Rejoindre l'institut supérieur Rapha, c’est intégrer l’une des premières
          universités de Douala. C’est travailler dans un cadre privilégié, au
          sein d’une communauté diverse et ouverte. C’est s’engager à relever
          les défis scientifiques et sociétaux du XXIe siècle.
        </motion.p>
      </div> 

      {/* Fin Bloc principal avec titre et description */}


        {/* Début Visitez notre campus */}

          <motion.div 
            className="campus-visit"
            initial={{ opacity: 0, y: 50 }} // Commence en bas avec opacité 0
            animate={{ opacity: 1, y: 0 }} // Remonte et devient visible
            transition={{ duration: 1 }} // Animation sur 1 seconde
          >
            {/* Section gauche : Texte + Bouton */}
            <motion.div 
              className="left-content"
              initial={{ x: -100, opacity: 0 }} // Départ de la gauche
              animate={{ x: 0, opacity: 1 }} // Arrive à sa place normale
              transition={{ duration: 1, delay: 0.3 }} // Délai de 0.3s pour l'effet fluide
            >
              <h2>Visitez notre campus</h2>
              <p>
                Découvrez à quoi ressemble vraiment la RHI en explorant nos environnements 
                d’apprentissage et en écoutant directement nos étudiants.
              </p>
              <p>
                Nous proposons des visites en personne des campus de Douala et 
               .Vous pouvez également découvrir tous nos campus grâce 
                à nos visites virtuelles immersives.
              </p>
              <motion.button 
                className="cta-button"
                whileHover={{ scale: 1.1 }} // Agrandit légèrement au survol
                whileTap={{ scale: 0.95 }} // Rétrécit brièvement au clic
              >
                Rejoignez-nous maintenant
              </motion.button>
            </motion.div>
      
            {/* Section droite : Vidéo */}
            <motion.div 
              className="right-content"
              initial={{ x: 100, opacity: 0 }} // Départ de la droite
              animate={{ x: 0, opacity: 1 }} // Arrive à sa place normale
              transition={{ duration: 1, delay: 0.6 }} // Délai de 0.6s pour bien séquencer
            >
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/T2t1hehwmzA" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Fin Visitez notre campus */}


          {/* Début WhyChooseUs */}
          
          <section className="why-choose-us">
            <h1 className="premiere-title">FORMEZ-VOUS POUR DEMAIN</h1>
            <h2 className="second-title"> POURQUOI NOUS CHOISIR</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="icon">{feature.icon}</div>
                  <div className="text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        

          {/* Fin WhyChooseUs */}




          {/* Début Rentrée Académique */}

            <div className="rentree-academique">
                <div className="content">
                  <h2>NOUVELLE RENTRÉE ACADÉMIQUE 2025 - 2026</h2>
                  <p>
                    Les inscriptions à l'institut supérieur Rapha (RHI) sont ouvertes à dès maintenant pour la rentrée <span className="font">Octobre 2025.</span> <br />
                    Ensemble vers la réussite ! Notre établissement vous attend pour une année pleine d'apprentissage et d'opportunités.
                  </p>
                  
                  <Link to="/Inscription"  className="inscription-btn">Inscrivez-vous</Link>

                </div>
                <div className="image-container">
                  <img src={images.home6} alt="Rentrée Académique" />
                </div>
              </div>

           {/* Fin Rentrée Académique */}

  
              {/* Début Événements et actualités */}

              <section className="events-section">
                <div className="container">
                  <h2>Événements et Actualités</h2>
                  
                  <div className="tabs">
                    <button 
                      className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
                      onClick={() => setActiveTab('upcoming')}
                    >
                      À venir
                    </button>
                    <button 
                      className={`tab ${activeTab === 'past' ? 'active' : ''}`}
                      onClick={() => setActiveTab('past')}
                    >
                      Passés
                    </button>
                  </div>
                  
                  <div className="events-grid">
                    {events[activeTab].map(event => (
                      <div key={event.id} className="event-card">
                        <div className="event-image">
                          <img src={event.image} alt={event.title} />
                        </div>
                        <div className="event-content">
                          <h3>{event.title}</h3>
                          <span className="event-date">{event.date}</span>
                          <p>{event.description}</p>
                          <Link
                              to={`/actualite/${event.id}`}
                              state={{
                                actu: actualites.find((a) => a.id === String(event.id)), // trouver l’actu correspondante
                              }}
                              className="event-button"
                              >
                              Plus d'informations
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Fin Événements et actualités */}


               {/* Debut admissions */}

                <div className='group'>
            
                    {/* Debut admissions */}
  
                  <section className="admissions-section">
                    <div className="left-content">
                      <button className="system-btn">Le Système LDM</button>
                      <h2>
                        En savoir plus sur nos <span>Admissions</span>
                      </h2>
                      <button className="cta-btn">Tout savoir</button>
                    </div>
    
                    <div className="right-content">
                      {admissionsData.map((item, index) => (
                        <div className="info-card" key={index}>
                          <div className="icon-circle">
                            <FaGraduationCap className="icon" />
                          </div>
                          <div className="text-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
  
                  {/* Fin admissions */}


                  <div className="dual-section-container">
                    {/* Section Départements à droite avec icône à gauche */}
                    <div className="section-with-icon">
                      <div className="icon-container">
                        <FaUniversity className="section-icon" />
                      </div>
                      <section className="departments-section">
                        <a href="#">Les Départements</a>
                        <div className="departments-content">
                          <p>Santé, Informatique, GC, Industrielle et Agropastorale</p>
                        </div>
                      </section> 
                    </div>
              
                    {/* Séparateur "OU" au milieu */}
                    <div className="separator">
                      <span>OU</span>
                    </div>
              
                    {/* Section Admission à gauche avec icône à droite */}
                    <div className="section-with-icon reverse">
                    <div className="icon-container">
                        <FaUserGraduate className="section-icon" />
                      </div>
                      <section className="admission-process">
                      <Link to="/Admission">Processus d'Admission</Link> {/* Deuxième "Nos Ecoles" avec lien */}
                      
                      </section>
                    </div>
                  </div>
              
                </div>

               {/* Fin admissions */}

              {/* Début AnimatedNumber */}

                <div className="stats-section" style={sectionStyle}>
                  <div className="stat">
                    <h1><CountUp start={0} end={220} duration={2} separator="," />K+</h1>
                    <p>Cours</p>
                  </div>
                  <div className="stat">
                    <h1><CountUp start={0} end={5000} duration={2} />M+</h1>
                    <p>Etudiants</p>
                  </div>
                  <div className="stat">
                    <h1><CountUp start={0} end={100} duration={2} />%</h1>
                    <p>Satisfaction</p>
                  </div>
                  <div className="stat">
                    <h1><CountUp start={0} end={150} duration={2} separator="," />K+</h1>
                    <p>Enseignants Qualifiés</p>
                  </div>
                </div>
              {/* Fin AnimatedNumber */}




              {/* Début Galeries */}

              <div className="landing-page1">
                <h1 className="premiere-title1">NOTRE INSTITUT EN IMAGES</h1>
                <h2 className="second-title1"> NOTRE GALERIE</h2>
                <section className="carousel-section">
                  <Slider {...carouselSettings}>
                    {carouselSlides.map((slide, index) => (
                      <div className="carousel-card" key={index}>
                        <img src={slide.image} alt={slide.title} className="carousel-image" />
                        {currentSlide === index && (
                          <div className={`carousel-content ${animateText ? "animate" : ""}`}>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </Slider>
                </section>
              </div>
               {/* Fin Galeries */}


               {/* Début Partenaires */}

              <section id="partenaires">
                    <div className="titre">NOS PARTENAIRE</div>
                    <div className="patner" style={{ width: "100%", margin: "auto" }}>
                      <Slider {...settings}>
                        {imageList.map((image, index) => (
                          <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                          </div>
                        ))}
                      </Slider>
                    </div>
                </section>

                 {/* Fin Partenaires */}


                   {/* Debut Nos galeries  */}
                     <section>
                        <div className="school-info-container">
                          <div className="info-card">
                            <h1 className="title">Voulez-vous en savoir plus sur notre école ?</h1>
                            
                            <div className="content">
                              <p className="description">
                                Cela pourrait inclure des informations sur les programmes offerts, les frais de scolarité, 
                                les conditions d'admission, les installations disponibles, le corps professoral, 
                                les activités parascolaires, etc.
                              </p>

                              <div className="divider"></div>
                               <Link to="/Contact"  className={`contact-button ${isHovered ? 'hovered' : ''}`} 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}> CONTACTEZ-NOUS !</Link>
                            </div>
                          </div>
                        </div>
                     </section>
  
                  {/* Fin Nos galeries  */}
    </div>
  );
};

export default Accueil;
