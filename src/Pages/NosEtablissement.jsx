
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../styles/NosEtablissement.scss";
import { images } from '../autres/data';
import raphaLogo from '../assets/images/home11.png';
import raphaImage from '../assets/images/home17.jpg';
import rapha1Image from '../assets/images/home21.png';
import bobuinLogo from '../assets/images/home18.jpg';
import bobuinImage from '../assets/images/home14.png';
import bannerImage1 from "../assets/images/home17.jpg";
import bannerImage2 from "../assets/images/home23.jpg";

const NosEtablissement = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const schools = [
    {
      id: 1,
      name: "Institut Supérieur Rapha ",
      logo: raphaLogo,
      description: "Formation d'excellence en ingénierie avec spécialisations en IA, robotique et énergies renouvelables.",
      description1:`
    Les spécialités proposées par RHI couvrent un large éventail de domaines professionnels, offrant aux étudiants une formation complète et adaptée aux besoins du marché du travail. Le HND en Accountancy (Comptabilité) forme des experts capables de gérer les aspects financiers des entreprises, avec des compétences en audit, fiscalité et gestion financière. Le HND en Banking and Finance prépare les étudiants aux métiers de la banque, de la finance d'entreprise et des marchés financiers, avec une solide compréhension des mécanismes économiques.

    Le HND en Logistics and Transport Management est conçu pour former des professionnels capables d'optimiser les chaînes logistiques et les flux de transport, essentiels dans notre économie globalisée. Le HND en Human Resource Management développe les compétences nécessaires pour gérer les talents, les relations sociales et la stratégie RH au sein des organisations. Ces programmes allient théorie et pratique, avec des études de cas concrets et des stages en entreprise.

    Le HND en Information Systems Management combine gestion et technologies, formant des experts capables de concevoir et gérer des systèmes d'information efficaces. Le HND en Marketing, Trade and Sales prépare aux métiers du commerce et du marketing, avec une approche centrée sur la relation client et les stratégies commerciales. Enfin, le HND en International Trade forme des spécialistes du commerce international, maîtrisant les réglementations douanières, les techniques de négoce international et le management interculturel.

    Ces formations de haut niveau, dispensées par des professionnels expérimentés, permettent aux diplômés d'intégrer rapidement le marché du travail ou de poursuivre leurs études vers des niveaux supérieurs. Les méthodes pédagogiques actives, les projets en groupe et les outils modernes d'apprentissage garantissent une acquisition solide des compétences professionnelles recherchées par les employeurs.`,
      image: raphaImage,
      specialitesByFilter: {
        HND: [
          { title: "HND - Accountancy", level: 2 },
          { title: "HND - Banking and Finance", level: 3 },
          { title: "HND - Logistics and Transport Management", level: 0, isBold: true },
          { title: "HND - Human Resource Management", level: 0, isBold: true },
          { title: "HND - Information Systems Management", level: 0, isBold: true },
          { title: "HND - Marketing Trade and Sales", level: 0, isBold: true },
          { title: "HND - International Trade", level: 0, isBold: true },
        ],
        BTS: [
          { title: "BTS - Comptabilité", level: 2 },
          { title: "BTS - Commerce International", level: 3 },
          { title: "BTS - Management", level: 0, isBold: true },
          { title: "BTS - Informatique", level: 0, isBold: true },
        ],
        "Licence & Master": [
          { title: "Licence en Finance", level: 2 },
          { title: "Master en Marketing Digital", level: 3 },
          { title: "Licence en Informatique", level: 0, isBold: true },
          { title: "Master en RH", level: 0, isBold: true },
        ],

        "BACHELOR": [
          { title: "Bachelor en Management", level: 2 },
          { title: "Bachelor en Informatique", level: 3 },
          { title: "Bachelor en Marketing", level: 0, isBold: true },
        ],

        "TOUTES LES FILIÈRES": [
          { title: "Toutes les spécialités HND", level: 2 },
          { title: "Toutes les spécialités BTS", level: 3 },
          { title: "Toutes les Licences & Masters", level: 0, isBold: true },
          { title: "Tous les Bachelors", level: 0, isBold: true },
        ]
        
      }
      
    },
    {
      id: 2,
      name: "École de Formation des Personnels de Santé de Bobuin",
      logo: bobuinLogo,
      description: "Programmes innovants pour former les leaders de demain avec une approche internationale.",
      description1:`
    Les spécialités proposées par ESG couvrent un large éventail de domaines professionnels, offrant aux étudiants une formation complète et adaptée aux besoins du marché du travail. Le HND en Accountancy (Comptabilité) forme des experts capables de gérer les aspects financiers des entreprises, avec des compétences en audit, fiscalité et gestion financière. Le HND en Banking and Finance prépare les étudiants aux métiers de la banque, de la finance d'entreprise et des marchés financiers, avec une solide compréhension des mécanismes économiques.

    Le HND en Logistics and Transport Management est conçu pour former des professionnels capables d'optimiser les chaînes logistiques et les flux de transport, essentiels dans notre économie globalisée. Le HND en Human Resource Management développe les compétences nécessaires pour gérer les talents, les relations sociales et la stratégie RH au sein des organisations. Ces programmes allient théorie et pratique, avec des études de cas concrets et des stages en entreprise.

    Le HND en Information Systems Management combine gestion et technologies, formant des experts capables de concevoir et gérer des systèmes d'information efficaces. Le HND en Marketing, Trade and Sales prépare aux métiers du commerce et du marketing, avec une approche centrée sur la relation client et les stratégies commerciales. Enfin, le HND en International Trade forme des spécialistes du commerce international, maîtrisant les réglementations douanières, les techniques de négoce international et le management interculturel.

    Ces formations de haut niveau, dispensées par des professionnels expérimentés, permettent aux diplômés d'intégrer rapidement le marché du travail ou de poursuivre leurs études vers des niveaux supérieurs. Les méthodes pédagogiques actives, les projets en groupe et les outils modernes d'apprentissage garantissent une acquisition solide des compétences professionnelles recherchées par les employeurs.
  `,
      image: bobuinImage,
      specialitesByFilter: {
        HND: [
          { title: "HND - Informatique", level: 2 },
          { title: "HND - Robotique", level: 3 }
        ],
        BTS: [
          { title: "BTS - Systèmes embarqués", level: 2 }
        ],
        "Licence & Master": [
          { title: "Licence en Ingénierie Logicielle", level: 2 },
          { title: "Master en IA", level: 3 }
        ]
      }
      
    },

    {
      id: 2,
      name: "École de Formation des Personnels de Santé de Bobuin",
      logo: bobuinLogo,
      description: "Programmes innovants pour former les leaders de demain avec une approche internationale.",
      description1:`
    Les spécialités proposées par ESG couvrent un large éventail de domaines professionnels, offrant aux étudiants une formation complète et adaptée aux besoins du marché du travail. Le HND en Accountancy (Comptabilité) forme des experts capables de gérer les aspects financiers des entreprises, avec des compétences en audit, fiscalité et gestion financière. Le HND en Banking and Finance prépare les étudiants aux métiers de la banque, de la finance d'entreprise et des marchés financiers, avec une solide compréhension des mécanismes économiques.

    Le HND en Logistics and Transport Management est conçu pour former des professionnels capables d'optimiser les chaînes logistiques et les flux de transport, essentiels dans notre économie globalisée. Le HND en Human Resource Management développe les compétences nécessaires pour gérer les talents, les relations sociales et la stratégie RH au sein des organisations. Ces programmes allient théorie et pratique, avec des études de cas concrets et des stages en entreprise.

    Le HND en Information Systems Management combine gestion et technologies, formant des experts capables de concevoir et gérer des systèmes d'information efficaces. Le HND en Marketing, Trade and Sales prépare aux métiers du commerce et du marketing, avec une approche centrée sur la relation client et les stratégies commerciales. Enfin, le HND en International Trade forme des spécialistes du commerce international, maîtrisant les réglementations douanières, les techniques de négoce international et le management interculturel.

    Ces formations de haut niveau, dispensées par des professionnels expérimentés, permettent aux diplômés d'intégrer rapidement le marché du travail ou de poursuivre leurs études vers des niveaux supérieurs. Les méthodes pédagogiques actives, les projets en groupe et les outils modernes d'apprentissage garantissent une acquisition solide des compétences professionnelles recherchées par les employeurs.
  `,
      image: rapha1Image,
      specialitesByFilter: {
        HND: [
          { title: "HND - Informatique", level: 2 },
          { title: "HND - Robotique", level: 3 }
        ],
        BTS: [
          { title: "BTS - Systèmes embarqués", level: 2 }
        ],
        "Licence & Master": [
          { title: "Licence en Ingénierie Logicielle", level: 2 },
          { title: "Master en IA", level: 3 }
        ]
      }
      
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Marie Dupont",
      role: "Diplômée en Génie Informatique",
      quote: "La formation pratique et les liens avec l'industrie m'ont permis de trouver un emploi immédiatement.",
      avatar: "avatar1.jpg"
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Étudiant en MBA",
      quote: "L'approche internationale et les cas pratiques réels ont transformé ma vision des affaires.",
      avatar: "avatar2.jpg"
    },
    {
      id: 3,
      name: "Djufo Raoul",
      role: "Étudiant en MBA",
      quote: "L'approche internationale et les cas pratiques réels ont transformé ma vision des affaires.",
      avatar: "avatar2.jpg"
    }
  ];

  const slides = [
    {
      image: bannerImage1,
      title: "Découvrez nos écoles et formations",
      cta: "Explorer les écoles"
    },
    {
      image: bannerImage2,
      title: "Une éducation transformatrice",
      cta: "Voir nos programmes"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="app">
      <section className="banner">
        <div className="slideshow">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <button className="cta-button">{slide.cta}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="slide-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="intro-section">
        <div className="container">
          <h2>Bienvenue dans notre Institut Universitaire</h2>
          <p>
            Notre institut propose des formations d'excellence à travers ses différentes écoles, 
            combinant théorie et pratique pour préparer les étudiants aux défis de demain.
          </p>
        </div>
      </section>

      <section className="schools-section">
        <div className="container">
          <h2>Nos Écoles</h2>
          <motion.div 
            className="schools-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {schools.map((school) => (
              <motion.div 
                key={school.id}
                className="school-card"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="school-header">
                  <img 
                    src={school.logo} 
                    alt={`Logo ${school.name}`} 
                    className="school-logo"
                  />
                  <h3>{school.name}</h3>
                </div>
                <p>{school.description}</p>
                <div className="school-image">
                  <img src={school.image} alt={school.name} />
                </div>
                <Link 
                  to={`/school-info/${school.id}`} 
                  className="school-link"
                  state={{ schoolData: school, specialitesByFilter: school.specialitesByFilter }}
                >
                  En savoir plus →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>Témoignages</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                  <img src={images.home6} alt="Rentrée Académique" className="avatar" />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta">
        <h2>Prêt à rejoindre notre communauté ?</h2>
        <button className="cta-button">Postuler maintenant</button>
      </div>
    </div>
  );
};

export default NosEtablissement;






















