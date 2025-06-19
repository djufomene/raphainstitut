import React, { useEffect, useRef } from 'react';
import '../styles/DetailLabo.scss';
import { images } from '../autres/data';
import { labos } from '../autres/data';
import { Link } from "react-router-dom";
const animationClasses = ['fade-up', 'slide-left', 'slide-right', 'zoom-in', 'flip'];

const DetailLabo = () => {
  const containersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // éviter de relancer l’animation
          }
        });
      },
      {
        threshold: 0.3, // 30% de l'élément doit être visible pour l'animer
      }
    );

    containersRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      containersRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="detail-labo-wrapper">

    <div className="header">
      <div className="logo">
          <span className="home-logo">
            
          <Link to="/laboratoires" className="labo-lien">
           Nos Laboratoires
          </Link>
          </span>
      </div>
      <div className="separator" />
      <div className="title">Instruments Médicaux</div>
    </div>
      {labos.map((labo, index) => (
        
        <div
          className={`image-texte-container ${animationClasses[index % animationClasses.length]}`}
          key={index}
          ref={el => (containersRef.current[index] = el)}
        >
         
          <div className="image-section">
            <img src={images[labo.image]} alt={labo.titre} className="her-img" />
          </div>
          <div className="texte-section">
            <h2>{labo.titre}</h2>
            <p className='seul'>{labo.texte}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailLabo;
