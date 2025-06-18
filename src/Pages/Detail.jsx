
import React from 'react';
import '../styles/Detail.scss';
import DownloadButton from './DownloadButton'; // Ajoutez cette ligne



const data = [
    {
      number: '01',
      title: 'OBJECTIF DE LA FORMATION',
      content: `La formation en BTS spécialité journalisme vise à 
      former des étudiants capables de collecter, hiérarchiser, rédiger 
      sur toutes ses formes et dans toutes les positions et de publier
       pour un public pluriel des informations par voie : de presse écrite, de radio,
        de télévision, agence et internet sur des événements nationaux, africains et 
        internationaux. Ils rendent compte de l’actualité en apportant leurs propres analyses et leur éclairage.`,
    },
    {
      number: '02',
      title: 'COMPÉTENCES RECHERCHÉES',
      content: (
        <>
          <h4>• Compétences génériques</h4>
          <ul>
            <li>Animer et manager une équipe ;</li>
            <li>Communiquer oralement et par écrit dans un cadre professionnel en français, en anglais et en d’autres langues étrangères ;</li>
            <li>Comprendre le fonctionnement de la production</li>
            <li>Comprendre l'environnement de l'entreprise ;</li>
            <li>Créer et gérer une entreprise ;</li>
            <li>Gérer un projet ;</li>
            <li>Planifier et suivre des travaux ;</li>
            <li>Développer la créativité, l'esprit d'analyse et de synthèse.</li>
            
          </ul>

          <h4>• Compétences spécifiques</h4>
          <ul>
            <li>Maîtriser les sciences et techniques de l’information et de la communication;</li>
            <li>Maîtriser le fonctionnement des médias : radio, télévision, presse écrite et internet.</li>
            <li>Manipuler la plupart des outils techniques (caméra et matériel de prise de son notamment);</li>
            <li>Acquérir les connaissances théoriques et pratiques professionnelles de l’ensemble de la chaine de production audiovisuelle ;</li>
            <li>Choisir les outils et les techniques de traitement de l’information en fonction des différents publics et des supports ;</li>
            <li>Maîtriser les outils et méthodes nécessaires pour réaliser une émission radio ou télévisée;</li>
            <li>Planifier et suivre des travaux ;</li>
            <li>Maîtriser les méthodes et techniques de la presse écrite ;</li>
          </ul>
        </>
      ),
    },

    {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: (
          <>
            <h4>• Compétences génériques</h4>
            <ul>
              <li>Journaliste Radio, TV, Presse écrite;</li>
              <li>Rédacteur en chef;</li>
              <li>Documentariste </li>
              <li>Responsable de la communication dans une entreprise publique ou privée;</li>
              <li>Reporteur;</li>
            </ul>
          </>
        ),
      },

      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: `Pour une durée de deux ans, 
        un ensemble de cours théoriques et pratiques 
        est administré aux étudiants en vue de l’obtention
         d’un Brevet de Technicien Supérieur (BTS) sanctionné par le MINESUP.`
      },

      {
        number: '05',
        title: 'CONDITIONS APPROCHES PÉDAGOGIQUES',
        content: (
          <>
            <ul>
              <li>Cours magistraux ;</li>
              <li>Des travaux pratiques et travaux personnels ;</li>
              <li>Des stages d’immersion dans les métiers accompagnés par un corps enseignant et des cadres d’entreprise.</li>
            </ul>
          </>
        ),
      },

      {
        number: '06',
        title: 'TECHNIQUES D’ÉVALUATION',
        content: (
          <>
            <ul>
              <li>Un contrôle continu pour chaque cours magistral ;</li>
              <li>Une session d’examen (oral ou écrit) à la fin de chaque semestre organisé en fonction des matières inscrites au semestre ;</li>
              <li>Rédaction d’un rapport de stage soutenu devant un jury en fin de cycle;</li>
              <li>Examen National de BTS.</li>
            </ul>
          </>
        ),
      },
  ];

const Detail = () => {
  return (

    <div className='content'>

        <div className="formation-page">
            <div className="timeline">
            {data.map((item, index) => (
                <div className="timeline-item" key={index}>
                <div className="timeline-left">
                        <div className="number-dot">
                            <span className="number">{item.number}</span>
                            <span className="dot" />
                        </div>
                        {index < data.length - 1 && <span className="line" />}
                </div>

                <div className="timeline-content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
                </div>
            ))} 
                
            </div>
        

            <div className="sidebar">
                <div className="sidebar-box">
                <h3>Génie Informatique</h3>
                <button>Informatique Industriel et Automatisme</button>
                <button>Maintenance des Systèmes Informatiques</button>
                <button>
                    Infographie et Web Design <span className="new-tag">N</span>
                </button>
                </div>

                <div className="sidebar-box">
                <h3>Page Facebook</h3>
                <div className="facebook-box">
                    <img
                    src="/path/to/facebook-img.png" // Remplace ceci par ton image locale ou un lien externe
                    alt="Institut Universitaire"
                    />
                    <button>Suivre la Page</button>
                </div>
                </div>
            </div>
        </div>

        <div className="download-header">
            <DownloadButton />
        </div>

    </div>
    
  );
};

export default Detail;







