import React, { useState, useEffect } from 'react';
import "../styles/Bibliotheque.scss"; // Vérifie l'importation du fichier SCSS
import { motion } from 'framer-motion';
import video1 from '../assets/videos/video1.mp4';  // ta 2ème vidéo
import video2 from '../assets/videos/video2.mp4';



const Bibliotheque = () => {
  const livresPopulaires = [
    { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", image: "/livre1.jpg" },
    { id: 2, titre: "1984", auteur: "George Orwell", image: "/livre2.jpg" },
    { id: 3, titre: "Harry Potter", auteur: "J.K. Rowling", image: "/livre3.jpg" },
    { id: 4, titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", image: "/livre4.jpg" },
  ];

  const evenements = [
    { id: 1, titre: "Club de lecture", date: "15/05/2023", heure: "18h" },
    { id: 2, titre: "Atelier d'écriture", date: "20/05/2023", heure: "14h" },
    { id: 3, titre: "Rencontre avec un auteur", date: "25/05/2023", heure: "16h" },
  ];

  // Animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };


  const [videoIndex, setVideoIndex] = useState(0);
  const videos = [video1, video2];

  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
 

  return (
    <div className="bibliotheque-accueil">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <video
          src={videos[videoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          style={{ width: '100%' }}
        />
        <motion.div 
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={item}>Bienvenue à la Bibliothèque Municipale</motion.h1>
          <motion.p variants={item}>Découvrez notre vaste collection de livres et participez à nos événements culturels</motion.p>
          <motion.div className="search-bar" variants={item}>
            <motion.input 
              type="text" 
              placeholder="Rechercher un livre, un auteur..." 
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rechercher
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Livres populaires */}
      <motion.section 
        className="livres-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.h2 variants={slideUp}>Livres populaires</motion.h2>
        <motion.div 
          className="livres-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {livresPopulaires.map((livre) => (
            <motion.div 
              key={livre.id} 
              className="livre-card"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="livre-image"
                whileHover={{ scale: 1.05 }}
              >
                <img src={livre.image} alt={livre.titre} />
              </motion.div>
              <div className="livre-info">
                <h3>{livre.titre}</h3>
                <p>{livre.auteur}</p>
                {/* <motion.button 
                  className="btn-reserver"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Réserver
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Statistiques */}
      <div className="stats-container fade-in">
        <div className="stat-card">
          <h3>+10,000</h3>
          <p>Livres disponibles</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Accès en ligne</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Domaines couverts</p>
        </div>
      </div>

      {/* Événements */}
      <motion.section 
        className="evenements-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.h2 variants={slideUp}>Événements à venir</motion.h2>
        <motion.div 
          className="evenements-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {evenements.map((event) => (
            <motion.div 
              key={event.id} 
              className="event-card"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="event-date"
                whileHover={{ scale: 1.05 }}
              >
                <span className="day">{event.date.split('/')[0]}</span>
                <span className="month">{event.date.split('/')[1]}</span>
              </motion.div>
              <div className="event-info">
                <h3>{event.titre}</h3>
                <p>{event.date} à {event.heure}</p>
                <motion.button 
                  className="btn-inscription"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'inscrire
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Infos pratiques */}
      <motion.section 
        className="infos-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.h2 variants={slideUp}>Informations pratiques</motion.h2>
        <motion.div 
          className="infos-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="info-card"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <motion.i 
              className="fas fa-clock"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            ></motion.i>
            <h3>Horaires</h3>
            <p>Lundi-Vendredi: 9h-18h</p>
            <p>Samedi: 10h-17h</p>
          </motion.div>
          <motion.div 
            className="info-card"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <motion.i 
              className="fas fa-map-marker-alt"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            ></motion.i>
            <h3>Adresse</h3>
            <p>123 Rue de la Bibliothèque</p>
            <p>75000 Paris</p>
          </motion.div>
          <motion.div 
            className="info-card"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <motion.i 
              className="fas fa-phone"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.i>
            <h3>Contact</h3>
            <p>01 23 45 67 89</p>
            <p>contact@bibliotheque.fr</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Bibliotheque;
