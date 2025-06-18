import React, { useState } from 'react';
import "../styles/Admission.scss";
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa';

const Admission = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const toggleIndex1 = (index) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
  };

  const toggleIndex2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };

  const toggleIndex3 = (index) => {
    setActiveIndex3(activeIndex3 === index ? null : index);
  };

  const etapes = [
    {
      titre: "ETAPE 01",
      contenu: `Je paie les frais correspondants au nombre de formations choisies...`
    },
    { titre: "ETAPE 02", contenu: "Contenu de l'étape 2..." },
    { titre: "ETAPE 03", contenu: "Contenu de l'étape 3..." },
    { titre: "ETAPE 04", contenu: "Contenu de l'étape 4..." }
  ];

 

  const etapes1 = [
    {
      titre: "QUEL EST LE MONTANT DES SCOLARITÉS?",
      contenu: `Les montants des scolarités varient en fonction des cycles. Pour tous les niveaux 1 et 2, la scolarité est de 2.000.000 XAF par an. Pour le niveau 3 : 2.200.000 XAF. Et pour les niveaux 4 et 5 : 2.450.000 XAF par an.`
    },
    { titre: "COMMENT POSTULUER AU CONCOURS D'ADMISION EN PREMIER ANNEES?", contenu: "Suivez les étapes de la rubrique « ADMISSION », puis cliquez sur le lien « Je m’inscris » dans le bas de page de cette rubrique. Vous vous seriez acquitté préalablement des frais de concours payables par monnaie électronique et en espèces en RCA uniquement. Voir Modalités de paiement plus haut." },
    { titre: "Y'A T-IL UNE RESIDENCE POUR LES ETUDIANTS AU CAMPUS?", contenu: "Oui, les deux campus, Pointe Noire et Douala, sont dotés de résidences d’étudiants. La priorité est accordée aux apprenants de 1ère année, et aux étrangers, à condition d’en faire la demande." },
    { titre: "Y'A T-IL DES VOYAGES PREVUS DANS LES FORMATIONS ?", contenu: "L’Institut Ucac-Icam avec ses 02 campus basés dans 02 pays, offrent déjà à ses apprenants, la possibilité d’une mobilité à l’international. De plus, avec son appartenance au collectif Icam dans le monde et ses partenariats universitaires, tous les apprenants de l’Institut sont appelés à effectuer au moins un semestre sur un campus Icam ou chez un partenaire (France, Inde, RDC, Congo, Belgique, Canada, Allemagne, Brésil, Equateur, Philippines)." },
    { titre: "QUELLES SONT LES CONDITIONS POUR S'INSCRIRE AU CONCOUR 2er CYCLE", contenu: `Les formations accessibles par voie de concours directement au 2nd cycle sont : Ingénieur généraliste Innovation, Ingénieur informatique et Ingénieur des procédés. Le candidat devra réunir les conditions ci-après pour s’inscire au concours :
      <ul class="custom-list">
        <li> Être titulaire d’un diplôme à BAC+2 ou BAC+3 dans un domaine scientifique, technique/industriel</li>
        <li class="li">Être âgé d’au plus 26 ans le jour du concours.</li>
      </ul>`}
  ];

  const etapes2 = [
    {
      titre: "AVEZ-VOUS DES FILIERES COMMERCIALES?",
      contenu: `L’Institut Ucac-Icam est une école d’ingénieurs et de techniciens supérieurs. L’Université Catholique d’Afrique Centrale possède d’autres écoles, et d’autres facultés avec des formations commerciales/management.`
    },
    { titre: "QUEL EST L'AGE LIMITE POUR POSTULER AU CONCOURS ?", contenu: "Il faut être âgé de 24 ans au maximum le jour du concours pour le 1er cycle et 26 ans pour le second cycle." },
    { titre: "LES DIPLOMES SONT-ILS RECONNUS A L'EXTERIEUR?", contenu: "Les diplômes de l’Institut Ucac-Icam, qui sont des diplômes de l’Université Catholique d’Afrique Centrale sont reconnus dans les 6 pays de la sous région Afrique Centrale. D’autre part, le label CTI délivré en 2019 pour la formation d’ingénieurs généralistes en alternance, confert à cette formation une reconnaissance internationale." },
    { titre: "COMMENT VOUS CONTACTER SUR WHATSAPP?", contenu: "Pour nous écrire sur WhatsApp, cliquez-ici!" },
    { titre: "QUELLES SONT LES CONDITIONS POUR SINSCRIRE AU CONCOUR 1er CYCLE", contenu: `Pour être candidat au concours Ucac-Icam, premier cycle, le candidat devra réunir les conditions suivantes :
      <ul class="custom-list">
        <li>Être titulaire d’un Baccalauréat (ou élève de terminale) des séries C, D, E, S, SI, F, MI, ou TI. Les élèves des classes terminales composeront sous réserve de l’obtention de leur baccalauréat lors de la première session qui se déroule au mois de mai.</li>
        <li class="li">Être âgé d’au plus 24 ans le jour du concours.</li>
      </ul>`}
  ];

  return (
    <div className='content'>
      <section className="concours-section">
        <div className="concours-header">
          <h3>A PROPOS DU CONCOURS</h3>
          <h1>Admissions aux concours</h1>
        </div>
        <div className="concours-content">
          <p>L’Institut Ucac-Icam forme des ingénieurs et des techniciens supérieurs sur les campus de Pointe-Noire au Congo et de Douala au Cameroun. Une formation généraliste pour des hommes et des femmes techniquement compétents et humainement responsables, au service des entreprises.</p>
        </div>
      </section>

      <div className="etapes-container etapes-fullwidth">
        {etapes.map((etape, index) => (
          <div key={index} className="etape">
            <div
              className={`etape-header ${activeIndex1 === index ? 'active' : ''}`}
              onClick={() => toggleIndex1(index)}
            >
              <div className="left">
                <FaStar className="icon" />
                <span>{etape.titre}</span>
              </div>
              <div className="right">
                {activeIndex1 === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {activeIndex1 === index && (
              <div className="etape-content">
                <p dangerouslySetInnerHTML={{ __html: etape.contenu.replace(/\n/g, '<br>') }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="concours-details">
        <div className="concours-header">
          <h3>A PROPOS DU CONCOURS</h3>
          <h1>Déroulement du concours</h1>
        </div>

        <div className="concours-content">
          <p className="equipment-list">
          Le concours se déroule en 2 phases. Une phase écrite et une phase orale si le candidat est déclaré admissible après l’examen écrit. Cette phase écrite se déroule dans le centre d’examen choisi, sur la plateforme en ligne (Moodle). Les dossiers d’inscription sont exigés uniquement à l’admission définitive. 
          </p> <br />
          <p> Les candidats sont priés de se munir des éléments suivants pour le concours  : <strong>Smartphone ou Tablette ou Laptop</strong>(et chargeur)<strong> – Gomme – Stylo – Crayon – Calculatrice scientifique sans mémoire – Pièce d’identité</strong>(nationale ou scolaire).</p>
        </div>
      </section>

      <section className='globale'> 

        <div className="concours-header">
          <h3>PLUS D'INFORMATIONS</h3>
          <h1>FAQ</h1>
        </div>

        <div className='content1'>

        <div className="etapes-container">
            {etapes2.map((etape, index) => (
              <div key={index} className="etape">
                <div
                  className={`etape-header ${activeIndex3 === index ? 'active' : ''}`}
                  onClick={() => toggleIndex3(index)}
                >
                  <div className="left">
                    <FaStar className="icon" />
                    <span>{etape.titre}</span>
                  </div>
                  <div className="right">
                    {activeIndex3 === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {activeIndex3 === index && (
                  <div className="etape-content">
                    <p dangerouslySetInnerHTML={{ __html: etape.contenu.replace(/\n/g, '<br>') }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="etapes-container">
            {etapes1.map((etape, index) => (
              <div key={index} className="etape">
                <div
                  className={`etape-header ${activeIndex2 === index ? 'active' : ''}`}
                  onClick={() => toggleIndex2(index)}
                >
                  <div className="left">
                    <FaStar className="icon" />
                    <span>{etape.titre}</span>
                  </div>
                  <div className="right">
                    {activeIndex2 === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {activeIndex2 === index && (
                  <div className="etape-content">
                    <p dangerouslySetInnerHTML={{ __html: etape.contenu.replace(/\n/g, '<br>') }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default Admission;
