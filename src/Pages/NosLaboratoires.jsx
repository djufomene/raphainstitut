import React, { useState, useEffect, useRef } from 'react';
import "../styles/NosLaboratoires.scss";
import { images } from '../autres/data';
import { Link } from 'react-router-dom';


const NosLaboratiores = () => {
  // Données de la bannière
  const bannerItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Laboratoire High-Tech",
      description: "Des équipements de pointe pour la recherche innovante"
    },
    {
      id: 2,
      image: images.home33,
      title: "Environnement Moderne",
      description: "Des espaces conçus pour favoriser la collaboration"
    },
    {
      id: 3,
      image: images.home30,
      title: "Recherche Avancée",
      description: "Nos chercheurs travaillent sur les technologies de demain"
    }
  ];

  // Données des laboratoires
  const laboratories = [
    {
      id: 1,
      name: "Laboratoire d'Informatique",
      description: "Équipé des derniers ordinateurs et serveurs pour la recherche en IA et développement logiciel.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      equipment: "50 postes, serveurs, équipement réseau",
      icon: "💻",
      link: "/SalleInfo" // Lien spécifique pour cette carte

    },
    {
      id: 2,
      name: "Laboratoire Médicale",
      description: "Un laboratoire équipé de technologies de pointe pour renforcer la formation pratique des étudiants.",
      image: images.home29,
      equipment: "Microscopes, échographe, Salle d'hospitalisation",
      icon: "🔬",
      link: "/instruments-medicaux/medical"
    },
    {
      id: 3,
      name: "Laboratoire de Physique",
      description: "Installations pour les expériences de physique fondamentale et appliquée.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      equipment: "Lasers, oscilloscopes, équipement électronique",
      icon: "⚛️"

    }
  ];

  // État pour la bannière
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerInterval = useRef(null);

  // Animation de la bannière
  useEffect(() => {
    bannerInterval.current = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % bannerItems.length);
    }, 5000);

    return () => clearInterval(bannerInterval.current);
  }, [bannerItems.length]);

  const goToBanner = (index) => {
    clearInterval(bannerInterval.current);
    setCurrentBannerIndex(index);
    bannerInterval.current = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % bannerItems.length);
    }, 5000);
  };

  // Références pour les animations
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animation pour le titre
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 100);

    // Animation pour le sous-titre
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    // Animations pour les cartes (staggered)
    cardsRef.current.forEach((card, index) => {
      setTimeout(() => {
        if (card) {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }
      }, 500 + index * 250);
    });
  }, []);

  return (
    <div className="laboratoires-container">
      {/* Bannière */}
      <div className="banner">
        {bannerItems.map((item, index) => (
          <div 
            key={item.id}
            className={`banner-item ${index === currentBannerIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="banner-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        
        <div className="banner-controls">
          {bannerItems.map((_, index) => (
            <button 
              key={index}
              className={`banner-dot ${index === currentBannerIndex ? 'active' : ''}`}
              onClick={() => goToBanner(index)}
            />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <main className="laboratoires-main">
        <h1 className="page-title" ref={titleRef}>
          Nos Laboratoires de Recherche
        </h1>
        
        <p className="page-subtitle" ref={subtitleRef}>
          Découvrez nos installations modernes et équipements de pointe
        </p>
        
        <div className="laboratoires-grid">
          {laboratories.map((lab, index) => (
            <div 
              key={lab.id} 
              className="laboratory-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="card-icon">{lab.icon}</div>
              <div className="card-image">
                <img src={lab.image} alt={lab.name} />
              </div>
              <div className="card-content">
                <h3>{lab.name}</h3>
                <p className="description">{lab.description}</p>
                <div className="equipment">
                  <strong>Équipement:</strong> {lab.equipment}
                </div>
                <div className="lien">
                  <Link to={lab.link || "#"} className="lien"> Voir détails techniques....</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NosLaboratiores;