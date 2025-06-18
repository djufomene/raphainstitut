
import React, { useState, useEffect } from 'react';
import { images } from '../autres/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHome } from "react-icons/fa";
import "../styles/MotsPresident.scss"; // Vérifie l'importation du fichier SCSS



const MotsPresident = () => {
 
  return (
    <div className="motspr">      

      <div className="homepage">
            <header className="header">
                <div className="logo">
                    <span className="home-logo">
                        Home <FaHome />
                    </span>
                </div>
                <div className="separator" />
                <div className="title">Bienvenue à l'institut supérieur Rapha</div>
            </header>
            <main className="content">
            <div className="lettrine-wrapper">
                <img src={images.home28} alt="Microscope" className="image-flottante" />

                <p>
                    <span className="lettrine">C</span>
                    &emsp;hers étudiants, chers partenaires, chers visiteurs,<br />
                    &emsp;C’est avec une immense joie et une grande fierté que je vous souhaite la bienvenue sur le site officiel de notre institut universitaire. Depuis sa création, notre établissement est animé par une conviction profonde : l’éducation est le socle du développement humain, social et économique. C’est cette conviction qui nous pousse à œuvrer chaque jour pour offrir un cadre d’apprentissage moderne, inclusif et tourné vers l’excellence.<br /><br />
                    &emsp;&emsp;Lorsque nous avons posé les premières pierres de cette institution, notre ambition était claire : créer un espace académique où l’innovation pédagogique, la rigueur scientifique et les valeurs humaines se rencontrent pour former une jeunesse responsable et compétente. Aujourd’hui, nous sommes heureux de constater que cette vision prend forme à travers nos différentes filières, nos partenariats académiques et nos diplômés qui s’illustrent aussi bien au niveau national qu’international.<br /><br />
                    &emsp;&emsp;Notre projet éducatif repose sur trois piliers fondamentaux : la qualité de la formation, l’employabilité des étudiants, et l’ouverture sur le monde. Nos programmes sont conçus en lien étroit avec les besoins du marché du travail et les évolutions technologiques. Grâce à une équipe pédagogique expérimentée et passionnée, nous accompagnons chaque apprenant dans la construction de son parcours personnel et professionnel.<br /><br />
                    &emsp;&emsp;L’Institut Universitaire ne se limite pas à transmettre des connaissances. Il s’agit aussi d’un lieu de vie, d’échange et de construction identitaire. Nous encourageons l’esprit critique, le sens de l’éthique, l’entrepreneuriat, la recherche et la créativité. De nombreux projets étudiants, clubs, conférences et compétitions témoignent de cette dynamique et participent à la richesse de notre communauté.<br /><br />
                    &emsp;&emsp;Je tiens également à saluer le rôle crucial de nos partenaires institutionnels et privés, qui contribuent activement à la réussite de notre mission. Leur confiance nous honore et nous engage à toujours aller plus loin dans la quête de la qualité. Aux parents qui nous confient leurs enfants, je veux dire merci pour cette marque de confiance. À nos étudiants, je dis ceci : croyez en vos rêves, soyez ambitieux, travaillez dur, et n’oubliez jamais que vous êtes les bâtisseurs du monde de demain.<br /><br />
                    &emsp;&emsp;Enfin, je vous invite, à travers ce site, à découvrir les valeurs qui nous animent, les formations que nous proposons, et l’énergie qui fait battre le cœur de notre institut. Que vous soyez étudiant, enseignant, parent ou visiteur, sachez que vous avez ici votre place.<br /><br />
                   Bienvenue à tous dans cette aventure humaine, intellectuelle et professionnelle. <br /><br />
                   <strong className='nom-style'>M. Melly Gabriel</strong>
                </p>
            </div>
            </main>
        </div>
    </div>
  );
};

export default MotsPresident;

