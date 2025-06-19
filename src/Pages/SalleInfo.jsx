import { useEffect } from "react";
import { images } from '../autres/data';
import { FaHome } from "react-icons/fa";
import "../styles/SalleInfo.scss";


export default function SalleInformatique() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="salle-informatique">
      {/* En-tête avec vidéo */}
      <header className="hero">
            <div className="hero-video-wrapper">
                <iframe
                src="https://www.youtube.com/embed/TON_ID_VIDEO?autoplay=1&mute=1&loop=1&controls=0&playlist=TON_ID_VIDEO"
                title="Salle informatique"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                ></iframe>
            </div>
            <div className="hero-overlay">
                <h1>Découvrez Notre Salle d'Informatique Moderne</h1>
                <p>Un espace conçu pour apprendre, créer et innover</p>
            </div>
       </header>
       <section className="header">
          <div className="logo">
              <span className="home-logo">
                  Home <FaHome />
              </span>
          </div>
          <div className="separator" />
          <div className="title">Salle d'informatique</div>
        </section>

      {/* Section présentation */}
      <section className="presentation">
        <h2>Présentation de la Salle</h2>
        <p>
          Notre salle d'informatique est équipée pour répondre aux besoins
          pédagogiques actuels : 40 postes connectés, environnement climatisé,
          logiciels professionnels et accès internet haut débit.
        </p>
      </section>

      {/* Équipements */}
      <section className="equipements">
        <h2>Équipements Disponibles</h2>
        <p>Nous disposons d'une variété d'équipements, parmi lesquels on peut retrouver :</p>
        <ul>
          <li>Ordinateurs performants (Intel i7, 16 Go RAM)</li>
          <li>Connexion Internet Haut Débit</li>
          <li>Vidéoprojecteur interactif</li>
          <li>Imprimantes et scanners</li>
          <li>Logiciels : Office, Photoshop, MATLAB, etc.</li>
          <li>Kit d'outils pour installation réseau</li>
          <li>305m Bobine Câble Ethernet RJ45 </li>
          <li>Concentrateur</li>
        </ul>
      </section>

      {/* Usages */}
      <section className="usages">
        <h2>Usages de la Salle</h2>
        <p>
          Cours pratiques, ateliers de programmation, projets étudiants,
          hackathons, examens en ligne et plus encore sont régulièrement
          organisés dans cet espace.
        </p>
      </section>

      {/* Galerie */}
      <section className="galerie">
        <h2>Galerie</h2>
        <div className="images">
            <img src={images.home21} alt="Image d'accueil" className="images" />
            <img src={images.home35} alt="Image d'accueil" className="images" />
            <img src={images.home36} alt="Image d'accueil" className="images" />
            <img src={images.home37} alt="Image d'accueil" className="images" />
            <img src={images.home38} alt="Image d'accueil" className="images" />
            <img src={images.home39} alt="Image d'accueil" className="images" />
        </div>
      </section>

      {/* Témoignages */}
      <section className="temoignages">
        <h2>Témoignages</h2>
        <blockquote>
          “Grâce à cette salle, j’ai développé mes compétences en développement
          web.” – Étienne, 2e année Informatique
        </blockquote>
        <blockquote>
          “Un espace motivant avec tout ce qu'il faut pour réussir mes projets
          tech.” – Aïcha, Licence 3
        </blockquote>
      </section>

      {/* Infos pratiques */}
      <section className="infos">
        <h2>Informations Pratiques</h2>
        <p>
          📍 Localisée au 1er étage du bâtiment B – Accessible de 8h à 18h du
          lundi au vendredi.
        </p>
        <p>Accès réservé aux étudiants inscrits aux filières technologiques.</p>
      </section>
    </div>
  );
}
