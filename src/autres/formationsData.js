// autres/formationsData.js
export const formations = [
  {
    id: 'science-infirmieres',
    title: 'Science infirmières',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `L’objectif de la formation en science infirmière dans le cadre scolaire est de préparer les étudiants à devenir des professionnels compétents, responsables et humains dans le domaine des soins de santé. Elle vise à développer des compétences cliniques, techniques et relationnelles, fondées sur des connaissances scientifiques et éthiques. Les étudiants apprennent à évaluer l’état de santé des patients, à prodiguer des soins adaptés, à collaborer au sein d’équipes pluridisciplinaires et à promouvoir la santé publique. La formation favorise également le développement de l’esprit critique, de l’autonomie et du sens des responsabilités dans des situations variées et évolutives.`
      },
      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Animer et manager une équipe ;",
              "Communiquer oralement et par écrit dans un cadre professionnel en français, en anglais et en d’autres langues étrangères ;",
              "Empathie et bienveillance ;",
              "Éthique et déontologie ;",
              "Sens de l’observation ;",
              "Maîtrise des outils numériques ;",
              "Planifier et suivre des travaux ;",
              "Développer la créativité, l'esprit d'analyse et de synthèse."
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Recueillir les données cliniques d’un patient ;",
              "Évaluer l’état de santé physique et psychologique du patient ;",
              "Planifier des soins adaptés aux besoins identifiés ;",
              "Administrer les médicaments selon les prescriptions et protocoles ;",
              "Assurer l’hygiène et le confort du patient ;",
              "Organiser et coordonner des interventions soignantes ;",
              "Planifier et suivre des travaux ;",
              "Protéger la confidentialité et les droits du patient ;",
              "Éduquer le patient et sa famille à la santé, aux traitements et à la prévention ;",
              "Mettre en œuvre les protocoles d’urgence en cas de détresse ;"
            ]
          }
        }
      },
      {
        number: '04',
        title: 'DÉBOUCHÉS',
        content: [
          "Infirmier(ère) en hôpital public ou privé",
          "Infirmier(ère) en clinique spécialisée",
          "Infirmier(ère) scolaire ou en entreprise",
          "Infirmier(ère) dans les ONG ou missions humanitaires",
          "Formateur ou enseignant en soins infirmiers",
          "Infirmier en bloc opératoire",
          "Infirmier anesthésiste",
          "Cadre de santé après expérience et formation complémentaire"
        ]
      },
      {
        number: '05',
        title: 'DURÉE DE LA FORMATION',
        content: `3 ans (6 semestres) conduisant au Diplôme 
        d'État d'Infirmier.  Elle combine des enseignements 
        théoriques, des travaux pratiques et des stages cliniques
         pour préparer les étudiants à exercer le métier d’infirmier
          avec compétence, autonomie et responsabilité.`
      },
      {
        number: '06',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          "Cours magistraux pour l’acquisition des connaissances théoriques fondamentales ;",
          "Travaux dirigés et études de cas pour renforcer l’analyse clinique ;",
          "Mises en situation pratiques et jeux de rôle en laboratoire de soins ;",
          "Stages en milieu hospitalier ou médico-social pour l’apprentissage sur le terrain ;",
          "Utilisation de supports numériques et plateformes e-learning ;",
          "Suivi individualisé et tutorat pour accompagner la progression des étudiants."
        ]
      }
    ]
  }, // ✅ virgule importante ici !

  {
    id: 'kinesitherapie',
    title: 'Kinésithérapie',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `L’objectif de la formation en kinésithérapie est de former 
        des professionnels capables de prévenir, traiter et réhabiliter les 
        troubles musculo-squelettiques et neurologiques des patients. Les étudiants 
        acquièrent des compétences techniques pour évaluer les déficiences, concevoir
         des plans de soins personnalisés et utiliser des techniques de rééducation 
         adaptées. La formation combine des enseignements théoriques, pratiques et 
         cliniques, et met l'accent sur l’interaction avec les patients, le travail
          en équipe pluridisciplinaire et le respect des normes éthiques. L’objectif
           est de préparer les futurs kinésithérapeutes à intervenir efficacement dans
            la réhabilitation physique, améliorer la qualité de vie et favoriser l'autonomie des patients.`
      },
      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Évaluation du patient",
              "Communication avec le patient",
              "Planification des soins",
              "Choix des techniques de rééducation",
              "Adaptabilité des traitements",
              "Travail en équipe pluridisciplinaire",
              "Autonomie professionnelle",
              "Veille scientifique et technique ",
              "Capacité à motiver le patient",
              "Capacité à travailler dans des environnements variés",
              "Formation et transmission ",
              "Gestion du stress et des émotions"
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Réaliser un bilan kinésithérapique initial complet et documenté",
              "Utiliser des techniques de thérapie manuelle et de mobilisation spécifique",
              "Mettre en œuvre des techniques de rééducation adaptées",
              "Accompagner la récupération post-traumatique ou post-opératoire",
              "Utiliser les appareils de kinésithérapie",
              "Accompagner les sportifs en rééducation ou en préparation physique",
              "Connaitre les lois de la mécanique applicable à l’être humain",
              "Pouvoir faire des massages kinésithérapeutiquesen tenant compte des caractéristiques psychologiques,sociales, économiques et culturelles de la personnalité de chaque patient ;",
              "Etre capable d’effectuer des massages et la gymnastique médicale.",
              "Rééduquer les troubles de l’équilibre et de la marche"
            ]
          }
        }
      },

      {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: [
          "Kinésithérapeute en hôpital ou clinique",
          "Kinésithérapeute en cabinet privé",
          "Kinésithérapeute sportif",
          "Rééducateur en centre de réadaptation",
          "Travail en institution pour personnes âgées ou handicapées",
          "Spécialisation en ostéopathie ou autres techniques",
          "Formateur ou enseignant en kinésithérapie",
          "Recherche en sciences de la motricité"
        ]
      },


      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: `la formation en kinésithérapie dure généralement 3 ans
         pour obtenir un Diplôme d'État de Technicien Supérieur (DTS).
          Elle comprend des enseignements théoriques, pratiques et des stages
           cliniques. Les étudiants sont formés à évaluer, traiter et rééduquer 
           les patients dans divers contextes médicaux et sociaux.`
      },

      {
        number: '05',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          "Apprentissage par problème (APP)",
          "Cours magistraux interactifs",
          "Travaux pratiques (TP)",
          "Simulation clinique",
          "Études de cas",
          "Apprentissage en stage",
          "Travail en groupe ou en binôme ",
          "Auto-apprentissage guidé"
        ]
      }
    ]
  },

  {
    id: 'sage-femme-maieuticien',
    title: 'Sage-Femme',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `L’objectif de la formation en maïeutique 
         (sage-femme/maïeuticien)
         est de former des professionnels compétents pour
         accompagner les femmes tout au long de la grossesse,
         de l’accouchement et du post-partum, en assurant leur
         sécurité ainsi que celle du nouveau-né. La formation 
         vise à développer des compétences cliniques, 
         relationnelles et techniques pour assurer un suivi prénatal,
         la surveillance du travail, la réalisation de l’accouchement 
         normal, et les soins postnataux. Elle inclut aussi la prévention,
         l’éducation à la santé, et la planification familiale. Le futur 
         sage-femme agit avec autonomie, responsabilité et éthique, 
         dans une démarche de respect, d’écoute et de bienveillance.`
      },

      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Élaborer un projet de soins personnalisé",
              "Interpréter les examens complémentaires (échographies, bilans sanguins, etc.)",
              "Évaluer les risques obstétricaux et néonataux",
              "Mobiliser les connaissances scientifiques à jour",
              "Gérer les urgences obstétricales avec réactivité",
              "Créer une relation de confiance avec la femme et sa famille",
              "Éduquer et informer sur la grossesse, l’accouchement et la parentalité",
              "Veille scientifique et technique ",
              "Capacité à motiver le patient",
              "Capacité à travailler dans des environnements variés",
              "Formation et transmission ",
              "Agir avec autonomie et responsabilité dans les champs bien délimités de sa fonction."
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Réaliser une consultation prénatale complète",
              "Évaluer la croissance et le bien-être fœtal",
              "Dépister les grossesses à risque et orienter si besoin",
              "Pratiquer l’examen clinique de la mère et du nouveau-né",
              "Réaliser une réanimation néonatale du nouveau-né",
              "Diagnostiquer le début du travail",
              "Assurer le respect du processus physiologique de la naissance",
              "Réaliser les premiers soins au nouveau-né;",
              "Surveiller l’état clinique de la mère après l’accouchement",
              "Conseiller sur les soins du nourrisson et l’hygiène du post-partum"
            ]
          }
        }
      },

      {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: [
          "Centres de santé ou PMI",
          "Hôpitaux publics ou privés",
          "Cliniques spécialisées",
          "ONG ou organisations humanitaires",
          "Enseignement et formation",
          "Fonction publique ou ministère de la Santé",
          "Consultante en périnatalité",
          "Coaching ou accompagnement en allaitement "
        ]
      },

      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: ` la formation en maïeutique dure trois ans après 
        l’obtention du Baccalauréat, aboutissant à un Diplôme d’État
         de Sage-Femme ou Maïeuticien. Elle comprend des enseignements 
         théoriques, pratiques et des stages cliniques en maternité,
          néonatologie et gynécologie, visant à former des professionnels
           compétents pour la santé maternelle et infantile.`
      },

      {
        number: '05',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          "Cours magistraux",
          "Cours magistraux interactifs",
          "Travaux pratiques (TP)",
          "Simulation clinique",
          "Stages cliniques supervisés",
          "Apprentissage en stage",
          "Travail en groupe ou en binôme ",
          "Jeux de rôles"
        ]
      }

    ]
  },

  {
    id: 'analyse-medicale',
    title: 'Analyse Médicale et Technique de Laboratoire',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `L’objectif de la formation en Analyse Médicale 
        et Technique de Laboratoire est de former des professionnels 
        capables de réaliser des examens biologiques fiables contribuant 
        au diagnostic, au traitement et à la prévention des maladies. 
        Les étudiants acquièrent des compétences en prélèvement, manipulation
         d’échantillons, utilisation d’équipements de laboratoire, 
         respect des normes de sécurité et contrôle qualité. La formation 
         développe également le sens de l’éthique, de la rigueur scientifique
          et du travail en équipe, en lien étroit avec les médecins et autres
           professionnels de santé dans un cadre hospitalier ou privé..`
      },
      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Appliquer les bases scientifiques des analyses médicales",
              "Utiliser correctement le matériel de laboratoire",
              "Gérer les stocks de réactifs et consommables",
              "Réceptionner et contrôler le prélèvement biologique et consigner la date, l’heure de prélèvement, les coordonnées du patient, etc. ;",
              "Préparer  les  analyseurs,  les  réactifs  et  l’échantillon  biologique  (fractionnement,",
              "Comparer les résultats de l’analyse aux résultats antérieurs, aux valeurs minimales maximales et établir le compte-rendu ;",
              " Suivre    l’état    des    stocks    des    consommables,    établir    les    commandes    de réapprovisionnement et effectuer le rangement du matériel selon leur date de validité et leurs conditions de conservation ;",
              "Procéder à l’évacuation et à destruction des déchets"
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Identifier, étiqueter et enregistrer les échantillons biologiques.",
              "Effectuer des prélèvements sanguins, urinaires et autres (selon les normes).",
              "Centrifuger, aliquoter et conserver les échantillons selon les protocoles",
              "Effectuer des examens biochimiques (glycémie, créatinine, enzymes, etc.).",
              "Effectuer des analyses d’urines (physico-chimie, cytologie, cristallurie).",
              "Collaborer avec le biologiste médical pour l’interprétation des résultats.",
              "Respecter la confidentialité des informations du patient",
              "Expliquer les procédures de prélèvement aux patients ou au personnel soignant",
              "Enregistrer, valider et transmettre les résultats",
              "Identifier des parasites dans des échantillons biologiques"
            ]
          }
        }
      },

      {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: [
          "Industrie pharmaceutique ou biotechnologique",
          "Laboratoires de contrôle qualité pharmaceutique ou alimentaire",
          "Banques de sang ",
          "ONG ou organisations humanitaires",
          "Industrie pharmaceutique ou biotechnologique",
          "Laboratoires vétérinaires",
          "Auto-emploi / création de laboratoire "
        ]
      },

      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: `Au **Cameroun**, la formation en **Analyse Médicale et
         Technique de Laboratoire** dure **trois (03) ans** après l’obtention 
         du **Baccalauréat**, notamment de la série scientifique. Elle combine
          des enseignements théoriques (biologie, biochimie, hématologie,
           microbiologie, immunologie, etc.) et des stages pratiques en
            laboratoire hospitalier ou privé. Cette durée permet d’acquérir 
            les compétences techniques, analytiques et éthiques nécessaires 
            pour exercer efficacement comme technicien supérieur en laboratoire
             biomédical, dans le respect des normes de qualité et de sécurité. 
             La formation est sanctionnée par un **Diplôme d’État** ou 
             un **Diplôme de Technicien Supérieur** reconnu par le ministère de la Santé.`
      },

      {
        number: '05',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          "Cours magistraux",
          "Cours magistraux interactifs",
          "Travaux pratiques (TP)",
          "Simulation clinique",
          "Stages cliniques supervisés",
          "Apprentissage en stage",
          "Travail en groupe ou en binôme ",
          "Jeux de rôles"
        ]
      },


    ]
  },

  {
    id: 'imagerie-medicale',
    title: 'Imagerie Médicale et Radiologie',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: ` L’objectif de la formation en Imagerie Médicale est
        de former des professionnels capables de réaliser et d’exploiter 
        des examens d’imagerie diagnostique (radiologie, échographie, scanner, IRM)
         avec compétence, précision et sécurité. Les étudiants apprennent à 
         manipuler les équipements d’imagerie, préparer les patients, appliquer
          les protocoles médicaux, tout en respectant les normes de radioprotection.
           La formation développe aussi le sens clinique, l’éthique professionnelle 
           et la collaboration interdisciplinaire. À la fin du cursus, le diplômé 
           est apte à assister les médecins radiologues dans le diagnostic et le suivi
            des pathologies.`
      },

      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Sens des responsabilités",
              "Précision technique",
              "Comprendre les bases anatomiques et physiopathologiques des examens d’imagerie",
              "Utiliser les logiciels de traitement et d’archivage d’images (PACS, RIS)",
              "Assurer la qualité technique des images produites",
              "Identifier les situations d’urgence et alerter le médecin",
              "Démontrer un esprit critique face aux anomalies techniques",
              "Faire preuve de rigueur, de précision et d’éthique",
              "Travailler en équipe avec les radiologues, médecins, infirmiers",
              "Organiser son travail selon les priorités médicales"
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Accueillir le patient et vérifier l’indication de l’examen",
              "Identifier les contre-indications (grossesse, allergie à un produit de contraste, etc.).",
              "Assurer la sécurité radiologique",
              "Réaliser des radiographies conventionnelles (thorax, os, abdomen, etc.).",
              "Effectuer des examens de tomodensitométrie (scanner) selon les prescriptions.",
              "Réaliser des examens IRM (neuro, abdo, musculo-squelettique).",
              "Adapter les paramètres d’acquisition (kv, mAs, temps d’exposition).",
              "Administrer un produit de contraste selon les protocoles et précautions",
              "Assurer la traçabilité des produits injectés et des incidents éventuels.",
              "Indexer et archiver les images dans le système PACS.",
              " Pouvoir utiliser les rayons ionisants pour détruire des tumeurs ou intervenir en médecine nucléaire.",
              "Réaliser les tests de contrôle qualité quotidiens ou hebdomadaires."
            ]
          }
        }
      },

      {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: [
          " Fonction publique",
          " Hôpitaux et cliniques privées",
          " ONG (Organisations Non Gouvernementales)",
          "Auto-emploi",
          "Cabinets de radiologie ",
          "Laboratoires biomédicaux équipés de services d’imagerie",
          "Centres d’imagerie spécialisés – IRM, scanner, échographie",
          "Recherche et formation"
        ]
      },

      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: `La formation dure généralement trois (03) ans après 
        l’obtention du Baccalauréat, notamment dans les filières scientifiques.
         Elle se déroule dans les écoles de santé agréées par le ministère de la 
         Santé Publique ou le ministère de l’Enseignement Supérieur. Le cursus 
         comprend des enseignements théoriques (anatomie, radiophysique, pathologies), 
         des modules techniques (radiographie, scanner, IRM, échographie) et de nombreux
          stages pratiques en structures hospitalières. À l’issue de la formation,
           l’étudiant obtient un Diplôme de Technicien Supérieur en Imagerie Médicale.`
      },

      {
        number: '05',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          "Cours magistraux",
          "Cours magistraux interactifs",
          "Travaux pratiques (TP)",
          "Simulation clinique",
          "Stages cliniques supervisés",
          "Apprentissage en stage",
          "Travail en groupe ou en binôme ",
          "Jeux de rôles"
        ]
      }
    ]
  },

  {
    id: 'science-pharmaceutique',
    title: 'Science Pharmaceutique',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `La formation en Science Pharmaceutique vise à former
         des professionnels compétents dans la conception, la fabrication,
          le contrôle, la dispensation et le bon usage des médicaments. 
          Elle combine des connaissances approfondies en chimie, biologie, 
          pharmacologie et technologies pharmaceutiques, avec une solide 
          formation en éthique, législation et santé publique. Les étudiants
           acquièrent les compétences nécessaires pour assurer la qualité,
            l'efficacité et la sécurité des produits pharmaceutiques. 
            Ils sont également préparés à conseiller les patients, 
            collaborer avec les équipes de soins, et contribuer à la 
            recherche et à l'innovation dans le domaine pharmaceutique.`
      },
      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Maîtriser les bases en chimie générale, organique et analytique",
              "Respecter la réglementation pharmaceutique",
              "Interpréter les ordonnances médicales",
              "Être autonome dans les tâches techniques",
              "Collaborer avec les autorités de santé",
              "Rédiger des comptes rendus clairs et précis",
              "Participer à la formation continue",
              "Interpréter les ordonnances médicales",
              "Gérer un stock de médicaments",
              "Respecter les normes éthiques et déontologiques",
              "Travailler en équipe pluridisciplinaire",
              "Comprendre les principes de biologie cellulaire et de microbiologie"

            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Préparer les formes galéniques (comprimés, solutions, crèmes, etc.)",
              "Réaliser des contrôles de qualité physico-chimiques et microbiologiques",
              "Conseils pharmaceutiques aux patients",
              "Assurer la délivrance correcte et sécurisée des médicaments",
              "Participer à la pharmacovigilance",
              "Appliquer les bonnes pratiques de fabrication (BPF)",
              "Effectuer des essais cliniques et des recherches pharmaceutiques",
              "Suivre la chaîne d’approvisionnement en médicaments",
              "Contrôler la conformité des produits importés",
              "Appliquer les normes ISO dans l'industrie pharmaceutique",
              "Superviser la production dans une usine pharmaceutique",
              "Assurer la stabilité et la conservation des produits",
              "Détecter les produits falsifiés ou non conformes",
              "Gérer un système d'information pharmaceutique",
            ]
          }
        }
      },

      {
        number: '03',
        title: 'DÉBOUCHÉS',
        content: [
          " Pharmacien d’officine (pharmacie communautaire)",
          " Pharmacien hospitalier",
          " Responsable qualité ou production en industrie pharmaceutique",
          "Pharmacien inspecteur à la Direction de la pharmacie",
          "Chercheur en pharmacologie ou chimie pharmaceutique",
          "Consultant en réglementation pharmaceutique",
          "Enseignant ou formateur en faculté de pharmacie",
          "Pharmacien grossiste-répartiteur"
        ]
      },
      {
        number: '04',
        title: 'DURÉE DE LA FORMATION',
        content: `La formation en Science Pharmaceutique dure
        généralement six (06) années après l’obtention du Baccalauréat 
        scientifique. Elle se déroule dans des facultés ou écoles de 
        pharmacie accréditées. Le cursus est composé de phases précliniques
         (sciences fondamentales), cliniques (pharmacologie, thérapeutique, 
         pathologies), et pratiques (stages hospitaliers, industrie, officine).
          La formation est sanctionnée par un Diplôme d’État de Docteur en Pharmacie,
           indispensable pour exercer légalement au Cameroun.`
      },

      {
        number: '05',
        title: 'APPROCHES PÉDAGOGIQUES',
        content: [
          " Cours magistraux interactifs",
          " Travaux pratiques en laboratoire",
          " Études de cas cliniques et pharmaceutiques",
          "Stages professionnels en pharmacie, hôpital ou industrie",
          "Travaux dirigés (TD) et groupes de réflexion",
          "E-learning et ressources numériques",
          "Simulations thérapeutiques ou galéniques",
          "Évaluations formatives continues"
        ]
      }
    ]
  },

  {
    id: 'odontostomatologie',
    title: 'Odontostomatologie',
    category: 'Sciences Médico-sanitaire',
    content: [
      {
        number: '01',
        title: 'OBJECTIF DE LA FORMATION',
        content: `Former des professionnels à la prévention, au diagnostic et au traitement des pathologies bucco-dentaires.`
      },
      {
        number: '02',
        title: 'COMPÉTENCES RECHERCHÉES',
        content: {
          generiques: {
            titre: "• Compétences génériques",
            items: [
              "Habileté manuelle",
              "Éthique",
              "Rigueur scientifique"
            ]
          },
          specifiques: {
            titre: "• Compétences spécifiques",
            items: [
              "Soins dentaires",
              "Chirurgie buccale",
              "Prothèses et orthodontie"
            ]
          }
        }
      },
      {
        number: '03',
        title: 'DURÉE DE LA FORMATION',
        content: `5 à 6 ans selon le parcours (chirurgie dentaire, soins conservateurs, etc.).`
      }
    ]
  },

    {
      id: "journalisme",
      title: "Journalisme",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: `L'objectif de la formation en Journalisme est de préparer 
          les étudiants à devenir des professionnels compétents dans le domaine de 
          l'information et des médias. Cette formation vise à développer des compétences
           techniques et créatives, ainsi qu'une compréhension approfondie de l'éthique
            et des responsabilités liées au journalisme. Les étudiants apprendront à
             recueillir, analyser, rédiger et diffuser des informations de manière 
             précise, objective et responsable à travers différents supports
              (presse écrite, radio, télévision, numérique). Ils acquerront également 
              les compétences nécessaires pour s'adapter aux évolutions technologiques
               et aux nouveaux formats de communication dans un environnement médiatique 
               en constante mutation.`
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: {
              titre: "Compétences Génériques",
              items: [
                 "Maîtrise des techniques d’écriture journalistique ",
                 "Capacité d’analyse et de synthèse des événements, avec un regard critique sur l’actualité.",
                  "Compétences en communication verbale et écrite adaptées à différents publics et supports médiatiques.",
                  "Gestion de la relation avec les sources et respect de l’éthique professionnelle.",
                  "Capacité à travailler sous pression et à respecter les délais.",
                  "Créer et gérer une entreprise",
                  "Planifier et suivre des travaux",
                  "Développer la créativité, l'esprit d'analyse et de synthèse",
                  "Comprendre l'environnement de l'entreprise",
                  "Comprendre le fonctionnement de la production audiovisuelle",
                  "Communiquer oralement et par écrit dans un cadre professionnel en français, en anglais et en d’autres langues étrangères "
                ]
            },
            specifiques: {
              titre: "Compétences Spécifiques",
              items: ["Rédiger des articles pour la presse écrite, radio, télévision et médias numériques.",
                     "Réaliser des interviews, reportages, enquêtes et analyses.",
                     "Maîtriser les outils numériques et les plateformes de diffusion en ligne.",
                     "Connaissance approfondie des lois, de l’éthique et de la déontologie du journalisme.",
                     "Savoir utiliser les logiciels de traitement d’image, vidéo et audio pour enrichir le contenu.",
                     "Maîtriser les sciences et techniques de l’information et de  la communication",
                     "Maîtriser le fonctionnement des médias : radio, télévision, presse écrite et internet.",
                     "Manipuler la plupart des outils techniques (caméra et matériel de prise de son notamment) ",
                     "Choisir les outils et les techniques de traitement de l’information en fonction desdifférents publics et des supports ",
                     " Maîtriser les différents styles journalistiques, la hiérarchie de l’information",
                     "Effectuer les prises de vues et exploiter les images ",
                     "Organiser et coordonner les différentes étapes d’un reportage"

                ]
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Journaliste reporter d’images (JRI) pour la presse, radio et télévision.",
             "Rédacteur en chef, reporter ou journaliste spécialisé.",
             "Community manager ou responsable de la communication numérique.",
             "Responsable de publication pour des sites web ou des blogs d’information.",
             "Consultant en stratégie médiatique ou chargé de communication dans des entreprises.",
             "Journaliste Radio, TV, Presse écrite ",
             "Documentariste ",
             "Responsable de la communication dans une entreprise publique ou privée"
          ]
        },

        {
          number: "04",
          title: "DURÉE DE LA FORMATION",
          content: `La durée de la formation en journalisme est généralement de 2 à 3 ans, selon le programme (formation initiale ou continue). Elle peut inclure des 
          stages pratiques dans les médias pour une expérience professionnelle concrète.`
        },

        {
          number: "05",
          title: "Débouchés",
          content: [
            "Cours théoriques sur les bases du journalisme, l’histoire des médias et les normes de déontologie..",
             "Ateliers pratiques ",
             "Séminaires animés par des professionnels du journalisme pour des retours d'expérience et des études de cas",
             "Stages professionnels dans des entreprises de médias pour une immersion dans le monde professionnel.",
             " Projets collaboratifs"
          ]
        }

      ]
    },
  
    {
      id: "telecommunication",
      title: "Télécommunication",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "La formation en télécommunication vise à former des professionnels capables de concevoir, déployer, gérer et maintenir des infrastructures et services de communication. Les étudiants apprendront à travailler avec les systèmes de communication, réseaux informatiques, câblage et technologies sans fil. Ils acquerront des compétences pratiques et théoriques dans la gestion des réseaux de télécommunication, des protocoles et des technologies de transmission des données. L’objectif est de préparer les étudiants à évoluer dans un secteur en constante évolution, en les dotant des compétences nécessaires pour intervenir sur des systèmes complexes et contribuer à l’innovation dans le domaine des télécommunications."
        },

        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Maîtrise des principes de base des systèmes de télécommunication.",
                "Connaissance des normes et des réglementations du secteur des télécommunications.",
                "Capacité à analyser les besoins d'un réseau et proposer des solutions adaptées.",
                "Gestion de projets techniques en télécommunication.",
                "Compétences en rédaction de rapports techniques.",
                "Connaissance des tendances du marché des télécommunications.",
                "Utilisation des outils et logiciels de simulation de réseaux.",
                "Capacité à travailler sous pression et dans des environnements dynamiques.",
                "Compréhension des enjeux environnementaux et durables des infrastructures.",
                "Adaptabilité aux nouvelles technologies du secteur.",
                " Collaboration en équipe multidisciplinaire.",
                "Capacité à résoudre des problèmes complexes de télécommunication."

              ] },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Maîtrise des technologies de transmission de données (fibre optique, DSL, etc.).",
                "Conception et installation de réseaux locaux et étendus.",
                "Configuration des équipements de communication (routeurs, switches, etc.).",
                "Expertise dans les protocoles de communication (IP, TCP/IP, etc.).",
                "Compétences en gestion des infrastructures de câblage.",
                "Installation et gestion des équipements radio pour les réseaux mobiles.",
                "Conception des architectures de réseaux à haute disponibilité.",
                "Implémentation des solutions de sécurité des télécommunications.",
                "Gestion des réseaux informatiques sur cloud.",
                "Déploiement des réseaux 4G/5G.",
                "Conception des réseaux IP et MPLS.",
                "Gestion des incidents et des pannes dans les infrastructures télécoms.",
                "Développement des applications mobiles pour la gestion des réseaux."

              ] }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Ingénieur télécoms.",
            "Responsable de la sécurité des réseaux.",
            "Architecte réseau.",
            "Consultant en télécommunication.",
            "Chef de projet en télécommunication.",
            "Administrateur de réseaux informatiques.",
            "Expert en gestion des infrastructures télécoms.",
            "Responsable des opérations réseaux"
          ]
        },

        {
          number: "04",
          title: "DURÉE DE LA FORMATION",
          content:  `La formation en télécommunication dure généralement entre
           2 à 3 ans, en fonction du programme choisi (BTS, Licence, Master).
            Elle inclut des périodes de stages pour permettre une immersion pratique 
            dans les entreprises spécialisées. Certains programmes peuvent 
          aussi offrir une formation continue pour les professionnels du secteur.`
        },

        {
          number: "05",
          title: "APPROCHES PÉDAGOGIQUES",
          content: [
            "Cours théoriques sur les principes fondamentaux des télécommunications.",
            "Travaux pratiques sur la configuration des réseaux.",
            "Projets de groupe pour la conception de réseaux complexes.",
            "Stages en entreprise pour une expérience pratique.",
            "Séminaires animés par des professionnels du secteur.",
            "Ateliers sur les dernières technologies de télécommunication.",
            "Cours en ligne pour compléter l’apprentissage théorique.",
            "Discussions en classe sur les enjeux du secteur des télécommunications."
          ]
        }
      ]
    },

    {
      id: "gestion-systeme-information",
      title: "Gestion-Systeme-Information",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "La formation en Gestion du Système d'Information (GSI) vise à développer des compétences dans la gestion, la mise en œuvre et l'optimisation des systèmes d’information d’une organisation. Les étudiants apprendront à concevoir, gérer et sécuriser des infrastructures informatiques, tout en garantissant leur alignement avec les objectifs stratégiques de l'entreprise. Ils acquerront des connaissances sur les outils de gestion de données, les systèmes ERP, la sécurité informatique, ainsi que sur la gestion de projets IT. L’objectif est de former des professionnels capables de garantir l’efficacité et la sécurité des systèmes d’information pour une gestion optimale des ressources organisationnelles."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: {
               titre: "Compétences Génériques", 
               items: [
                "Analyse des besoins d’information d’une organisation.",
                "Gestion de projets informatiques.",
                "Planification et mise en œuvre de systèmes d’information.",
                "Compréhension des enjeux stratégiques liés aux SI.",
                "Capacité à gérer des équipes techniques et non techniques.",
                "Analyse et gestion des risques liés aux systèmes d’information.",
                "Maîtrise des outils de gestion de bases de données.",
                "Développement et gestion des politiques de sécurité informatique.",
                "Intégration de nouvelles technologies dans les systèmes d’information.",
                "Compréhension des normes et standards liés aux SI.",
                "Optimisation des processus informatiques.",
                "Analyse des flux d'information et de données."
               ] 
              },
            specifiques: { 
              titre: "Compétences Spécifiques",
               items: [
                " Conception et déploiement des systèmes d’information.",
                "Gestion des bases de données relationnelles et non relationnelles.",
                "Configuration et gestion des systèmes ERP.",
                "Maîtrise des architectures systèmes et réseaux.",
                "Gestion de la sécurité des systèmes d’information.",
                "Configuration et gestion des systèmes de gestion de contenu (CMS).",
                "Gestion des systèmes de sauvegarde et de récupération de données.",
                "Application des normes ISO et des bonnes pratiques en GSI.",
                "Mise en place de solutions de virtualisation des serveurs.",
                "Conception de systèmes d’information décisionnels (BI).",
                "Gestion de la relation avec les fournisseurs de services informatiques.",
                "Gestion de la conformité et des audits des systèmes d’information.",
                "Réalisation de diagnostics techniques et organisationnels des SI."
              ] 
            }
          }
        },
        {
          number: "03",
          title: "Débouchés",
          content: [
            "Responsable des systèmes d'information.",
            " Chef de projet en gestion des SI.",
            "Consultant en systèmes d'information.",
            "Administrateur des bases de données.",
            "Expert en sécurité des systèmes d’information",
            "Architecte des systèmes d'information",
            "Responsable de la gestion des données d'entreprise",
            "Directeur informatique (CIO)",
            "Analyste fonctionnel des SI",
            "Auditeur des systèmes d'information."
          ]
        },

        {
          number: "04",
          title: "DURÉE DE LA FORMATION ",
          content: "La formation en Gestion du Système d'Information dure généralement entre 1 à 2 ans, selon le niveau (BTS, Licence ou Master). Elle combine des enseignements théoriques, des études de cas pratiques, et des stages en entreprise pour une immersion dans la gestion réelle des systèmes d'information en environnement professionnel."
        },

        {
          number: "05",
          title: "APPROCHES PÉDAGOGIQUES",
          content: [
            "Cours magistraux et travaux dirigés sur les concepts fondamentaux des SI.",
            " Études de cas réels sur la mise en place des systèmes d’information",
            "Projets pratiques de gestion de bases de données et systèmes ERP",
            "Séminaires avec des experts du secteur des SI.",
            "Développement de solutions logicielles en groupe.",
            "Ateliers sur la gestion de la sécurité des systèmes",
            "Utilisation d’outils de gestion de la qualité et de la performance des SI.",
            "Stages en entreprise pour appliquer les compétences acquises.",
            "Sessions de simulations et de résolution de problèmes réels de SI"
          ]
        }
      ]
    },

    {
      id: "infographie-webdesign",
      title: "Infographie-Webdesign",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "La formation en Infographie et Web Design a pour objectif de former des professionnels capables de créer des supports visuels et des interfaces web attrayantes et fonctionnelles. Les étudiants apprendront à utiliser les outils de conception graphique et de développement web pour produire des designs innovants et adaptés aux besoins des utilisateurs. La formation couvre également l'ergonomie, la typographie, l’illustration numérique, ainsi que la gestion de l’UX/UI. À la fin de cette formation, les étudiants seront aptes à concevoir des sites web et des éléments graphiques en respectant les standards du web moderne et en garantissant une expérience utilisateur optimale."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Création d’illustrations numériques.",
                "Conception de maquettes et prototypes web",
                "Utilisation de logiciels de conception graphique (Photoshop, Illustrator)",
                "Maîtrise des concepts d'ergonomie web.",
                "Gestion de la typographie et des couleurs dans le design",
                "Création de logos et de chartes graphiques.",
                "Connaissance des formats d’images et d’animations web.",
                "Sens de l'esthétique et de la créativité visuelle",
                "Gestion de projets de design de sites web.",
                "Communication et collaboration avec des équipes pluridisciplinaires.",
                "Respect des standards du design responsive.",
                "Prise en compte des besoins de l'utilisateur dans le design.",
                "Collaboration avec les développeurs front-end et back-end",
                "Rédaction et documentation des projets de design"
              ] },
            specifiques: {
               titre: "Compétences Spécifiques", 
               items: [
                "Conception et création de sites web responsives.",
                "Maîtrise des langages de programmation front-end (HTML, CSS, JavaScript).",
                "Création d'animations et d’effets visuels pour le web",
                "Intégration de contenu multimédia (vidéos, sons, etc.) dans le design",
                "Optimisation des sites web pour la performance et le SEO",
                "Création de sites interactifs et dynamiques",
                "Utilisation de CMS (WordPress, Joomla, etc.)",
                "Création de wireframes et de prototypes interactifs",
                "Design de sites e-commerce et de plateformes de vente en ligne",
                "Développement de sites web adaptatifs pour différents appareils.",
                "Gestion des animations et transitions dans les interfaces utilisateurs",
                "Création d'icônes et de graphiques pour le web",
                "Conception de supports visuels pour les réseaux sociaux",
                "Utilisation de la photographie numérique et de la retouche photo."
            
              ] }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Web designer",
            "Infographiste",
            "Développeur front-end.",
            "UX/UI designer",
            "Graphiste freelance.",
            "Chef de projet web.",
            "Concepteur d’interfaces utilisateur",
            "Développeur de sites e-commerce."
            
          ]
        },

        {
          number: "04",
          title: "DURÉE DE LA FORMATION",
          content: "La formation en Infographie et Web Design dure généralement 1 à 2 ans selon le niveau (BTS, Licence ou Master). Elle combine des cours théoriques, des ateliers pratiques, et des projets en entreprise. Les étudiants acquerront ainsi une expertise complète en conception graphique et en développement web."
        },

        {
          number: "05",
          title: "APPROCHES PÉDAGOGIQUES",
          content: [
            "Cours théoriques sur les principes du design graphique et du web",
            "Ateliers pratiques sur l’utilisation des logiciels de design (Photoshop, Illustrator)",
            "Séances de feedback et critique constructive des projets de design.",
            "Stages en entreprise pour une immersion dans le monde professionnel",
            "Formations en ligne et webinaires sur les nouvelles technologies de design.",
            "CDéveloppement de portfolios numériques pour la présentation des projets.",
            "Cours sur la gestion des projets de design et la collaboration avec les développeurs"
          ]
        }
      ]
    },

    {
      id: "ecommerce-marketing",
      title: "Ecommerce-Marketing",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation a pour but de former des professionnels capables de concevoir, gérer et optimiser des stratégies de vente en ligne et de marketing digital. Les apprenants maîtriseront les outils essentiels pour développer une présence digitale efficace, générer du trafic, convertir les leads et analyser les performances. La formation couvre les aspects techniques, créatifs et stratégiques du e-commerce et du marketing numérique."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Créativité et innovation",
                "Analyse critique des données",
                "Communication écrite et orale",
                "Travail en équipe et collaboration",
                "Adaptabilité aux nouvelles technologies",
                "Sens du relationnel client",
                "Esprit d’entrepreneuriat",
                "Négociation et persuasion",
                "Veille concurrentielle",
                "Organisation et planification",
                "Prise de décision stratégique",
                "Maîtrise des outils bureautiques",
                "Capacité à apprendre en continu"
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Gestion de boutique en ligne (Shopify, WooCommerce)",
                "SEO (Optimisation pour les moteurs de recherche)",
                "Publicité en ligne (Google Ads, Meta Ads)",
                "Email marketing et automatisation (Mailchimp, Klaviyo)",
                "Gestion des réseaux sociaux (Instagram, LinkedIn, TikTok)",
                "Content marketing et rédaction web",
                "Conversion Rate Optimization (CRO)",
                "Gestion de la relation client (CRM : HubSpot, Zoho)",
                "Dropshipping et logistique e-commerce",
                "Stratégie de pricing et promotions",
                "Data-driven marketing (interprétation KPI)",
                "Legal & compliance (RGPD, droit du e-commerce)",
                "Vidéo marketing (YouTube, TikTok Ads)",
                "Gestion de crise et e-réputation",
                "Marketplace management (Amazon, eBay)"
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Spécialiste SEO/SEA",
            "Chef de projet digital",
            "Community Manager",
            "Consultant en marketing digital",
            "Data Analyst e-commerce",
            "Influencer Marketing Manager",
            "Chargé de CRM et fidélisation",
            "Entrepreneur en dropshipping ou marketplace"
          ]
        },

{
          number: "04",
          title: "Durée de la Formation",
          content: "La formation s’étend sur 6 à 12 mois, avec un mix de cours théoriques, d’ateliers pratiques, de projets concrets et de stages en entreprise pour une immersion professionnelle optimale."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Cours interactifs avec experts du digital",
            "Études de cas réels (ex: optimisation d’un site e-commerce)",
            "Workshops avec professionnels du secteur",
            "Utilisation d’outils pro (Google Ads, SEMrush, Meta Business Suite)",
            "Jeux de rôle (négociation client, gestion de crise)",
            "Coaching individuel et mentorat",
            "Hackathons et challenges marketing",
            "Stages en agence ou entreprise e-commerce"
          ]
        }

      ]
    },

    {
      id: "maintenance-biomedical",
      title: "Maintenance-Biomedical",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation vise à former des techniciens qualifiés capables d’assurer la maintenance préventive et corrective des équipements biomédicaux, garantissant leur bon fonctionnement et leur conformité aux normes de sécurité. Les apprenants acquerront des compétences techniques et pratiques pour intervenir sur des dispositifs médicaux dans les hôpitaux, cliniques et centres de santé."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques",
               items: [
                "Résolution de problèmes",
                "Travail en équipe",
                "Communication efficace",
                "Gestion du temps",
                "Adaptabilité",
                "Rigueur et précision",
                "Autonomie",
                "Sens des responsabilités",
                "Gestion du stress",
                "Analyse critique",
                "Éthique professionnelle",
                "Esprit d’initiative",
                "Leadership"
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Lecture de schémas techniques biomédicaux",
                "Diagnostic des pannes sur appareils médicaux",
                "Maintenance des respirateurs artificiels",
                "Conformité aux normes ISO 13485",
                "Programmation des automates médicaux",
                "Maintenance des défibrillateurs",
                "Soudure de circuits électroniques",
                "Collaboration avec les ingénieurs biomédicaux",
                "Utilisation des logiciels de gestion de maintenance (GMAO)",
                "Sécurité électrique en milieu médical",
                "Formation des utilisateurs sur les appareils"
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Technicien de maintenance biomédicale en hôpital",
            "Responsable d’équipements médicaux en clinique",
            "Technicien itinérant pour fabricants d’appareils médicaux",
            "Formateur en maintenance biomédicale",
            "Technicien en service après-vente (SAV)",
            "Entrepreneur en réparation d’équipements médicaux",
            "Consultant en gestion de parc biomédical"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "La formation dure 12 à 24 mois, incluant des cours théoriques, des travaux pratiques en atelier et des stages en milieu professionnel pour une immersion complète dans le domaine biomédical."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Cours magistraux interactifs",
            "Travaux pratiques sur simulateurs et appareils réels",
            "Technicien itinérant pour fabricants d’appareils médicaux",
            "Études de cas concrets",
            "Stages en milieu hospitalier ou chez des fabricants",
            "Utilisation de la réalité virtuelle pour les diagnostics",
            "Ateliers de résolution de pannes complexes"
          ]
        }

      ]
    },

    {
      id: "hygiene-securite",
      title: "Hygiene-Securite",
      category: "Informatique & Communication",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation a pour but de former des professionnels capables d'identifier, évaluer et maîtriser les risques professionnels et environnementaux. Les apprenants acquerront les compétences nécessaires pour mettre en œuvre des politiques HSE, assurer la conformité réglementaire, promouvoir une culture sécurité et réduire l'impact environnemental des activités industrielles et organisationnelles."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Sens des responsabilités",
                "Rigueur et méthode",
                "Analyse et synthèse",
                "Communication persuasive",
                "Travail en équipe pluridisciplinaire",
                "Adaptabilité aux changements réglementaires",
                "Négociation avec les parties prenantes",
                "Autonomie dans l'action",
                "Gestion du stress en situations d'urgence",
                "Esprit critique",
                "Prise de décision sous pression",
                "Polyvalence sectorielle"
             
              ] 
            },
            specifiques: {
               titre: "Compétences Spécifiques", 
               items: [
                " Évaluation des risques professionnels (document unique)",
                "Conformité aux normes ISO 45001 et ISO 14001",
                "Audit HSE en entreprise",
                "Analyse des accidents du travail (arbre des causes)",
                "Prévention des risques chimiques et biologiques",
                "Mesures de prévention des TMS",
                "Élaboration de procédures HSE",
                "Management de la sécurité sur chantier",
                "Éco-conception et RSE",
                "Animation de formations sécurité",
                "Gestion des produits dangereux (étiquetage CLP)",
                "Analyse des indicateurs HSE (taux de fréquence)",
                "Mise en place de systèmes de management intégré"
               ] 
              }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Responsable HSE en industrie",
            "Consultant en risques professionnels",
            "Coordinateur sécurité chantier (SPS)",
            "Auditeur QHSE",
            "Chargé de mission RSE",
            "Formateur en prévention des risques",
            "Chef de service sécurité en entreprise"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "La formation s'étend sur 12 à 24 mois, alternant cours théoriques, travaux pratiques, simulations et stages en entreprise pour une application concrète des compétences."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Études de cas réels d'accidents industriels",
            "Visites techniques de sites industriels",
            "Ateliers d'analyse d'accidents (méthode 5 pourquoi)",
            "Utilisation de logiciels spécialisés (SAP EHS, GMAO)",
            "Cours inversés avec analyse de jurisprudence",
            "Stages opérationnels en milieu industriel"
          ]
        }

      ]
    },


    {
      id: "assurance",
      title: "Assurance(ASS)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation vise à former des professionnels polyvalents maîtrisant les techniques de gestion des risques, la commercialisation de produits d'assurance et la relation client. Les apprenants développeront une expertise en analyse des risques, réglementation du secteur, gestion de sinistres et stratégie commerciale pour évoluer dans les métiers de l'assurance dommages, des personnes ou de la banque-assurance."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: {
              titre: "Compétences Génériques",
              items: [
                "Analyse et synthèse d'informations complexes",
                 "Négociation et persuasion",
                 "Gestion du relationnel client exigeant",
                 "Résilience face aux situations difficiles",
                 "Rigueur dans le traitement des dossiers",
                 "Travail en équipe pluridisciplinaire",
                 "Maîtrise des outils bureautiques avancés",
                 "Gestion efficiente du temps",
                 "Sens développé de l'éthique professionnelle",
                 "Prise de parole en public",
                 "Management d'équipe commerciale",
                 "Analyse critique des données chiffrées",
                 "Esprit d'initiative et proactivité"
              
                ]
            },
            specifiques: {
              titre: "Compétences Spécifiques",
              items: [
                "Maîtrise des produits d'assurance dommages",
                 "Expertise en assurance de personnes",
                 "Utiliser les techniques spécifiques aux différentes branches d‟assurance",
                 "Conseiller le client et proposer des contrats d‟assurance",
                 "Montage de contrats sur mesure",
                 "Gestion des portefeuilles clients",
                 "Connaissance des marchés réassurance",
                 "Élaboration de rapports actuariels",
                 "Animation de formations produits",
                 "Mise en œuvre de plans de prévention",
                 "Techniques de souscription",
                 "Connaissance du Code des assurances"
                ]
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Conseiller en assurance",
            "Expert en sinistres automobiles",
            "Chargé d‟indemnisation",
            "Responsable d'agence assurance",
            "Collaborateur d‟agent général ou de coursier d‟assurance",
            "Technicien d‟assurance.",
            "Courtier en assurance",
            "Formateur en produits d'assurance"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation de 6 à 24 mois selon le niveau, combinant apprentissage théorique, études de cas concrets, simulations commerciales et stage en cabinet ou compagnie d'assurance."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Études de cas réels de sinistres complexes",
            "Jeux de rôle en négociation assurance",
            "Projets concrets de montage de contrats",
            "Utilisation de logiciels professionnels",
            "Visites en compagnies d'assurance",
            "Mémoires professionnels sur des thématiques actuelles"
          
          ]
        }
      ]
    },
  
    {
      id: "banque",
      title: "Bangue(BQ)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation a pour objectif de former des professionnels polyvalents capables d'évoluer dans l'environnement bancaire moderne. Les apprenants développeront des compétences en gestion de clientèle, analyse financière, produits bancaires, conformité réglementaire et digital banking. La formation couvre à la fois les aspects techniques, commerciaux et réglementaires du métier bancaire pour former des profils opérationnels adaptés aux mutations du secteur."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: {
               titre: "Compétences Génériques", 
               items: [
                "Excellente communication client",
                "Capacité d'analyse financière",
                "Sens commercial développé",
                "Maîtrise des outils numériques",
                "Gestion du stress",
                "Esprit d'équipe",
                "Éthique professionnelle",
                "Rigueur administrative",
                "Adaptabilité",
                "Sens de l'organisation",
                "Négociation",
                "Prise d'initiatives",
                "Maîtrise des langues étrangères",
                "Autonomie"
              ] 
            },
            specifiques: {
               titre: "Compétences Spécifiques", 
               items: [
                "Gestion de compte client",
                "Analyse de solvabilité",
                "Maîtrise des crédits immobiliers",
                "Gestion des moyens de paiement",
                "Gestion de portefeuille",
                "Fiscalité bancaire",
                "Maîtrise des logiciels bancaires",
                "Digital banking",
                "Etre capable de prendre du recul face à une problématique donnée et de trouver la solution appropriée respectant à la fois l‟attente du client et la politique commerciale de son établissement ",
                "Contribuer au développement de son établissement par son action commerciale auprès des clients professionnels",
                "Contribuer, par son action personnelle, à un accueil de qualité "

              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Conseiller clientèle particuliers",
            "Chargé d'affaires entreprises",
            "Gestionnaire de compte",
            "Conseiller en patrimoine",
            "Analyste crédit",
            "Conseiller en digital banking",
            "Chargé de conformité"

          ]
        },

        {
          number: "04",
          title: "Débouchés",
          content: "Formation de 6 à 24 mois selon le niveau, alternant théorie, études de cas, mises en situation professionnelle et stage en agence bancaire"
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Simulations d'entretiens clients",
            "Utilisation de logiciels bancaires",
            "Jeux de rôle commerciaux",
            "Analyse de dossiers clients",
            "Interventions de professionnels",
            "Visites d'agences bancaires",
            "Mémoires sur l'innovation bancaire"

          ]
        },
      ]
    },

    {
      id: "commerce-international",
      title: "Commerce International (CI)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation d'excellence forme des professionnels capables de piloter des opérations commerciales à l'international. Les apprenants développeront une expertise en négociation interculturelle, gestion des flux internationaux, marketing export et financement du commerce extérieur pour répondre aux enjeux de la globalisation des marchés."
        },

        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Maîtrise des langues étrangères (anglais + 2e langue)",
                "Adaptabilité interculturelle",
                "Négociation internationale",
                "Analyse des marchés étrangers",
                "Gestion des risques internationaux",
                "Rigueur documentaire",
                "Mobilité géographique",
                "Veille concurrentielle globale",
                "Communication interculturelle",
                "Flexibilité horaire (fuseaux)",
                "Esprit entrepreneurial",
                "Maîtrise des outils digitaux",
                "Éthique des affaires internationales"

              ] 
            },
            specifiques: {
               titre: "Compétences Spécifiques", 
              items: [
                "Techniques de prospection export",
                "Maîtrise des Incoterms 2020",
                "Financement du commerce international",
                "Logistique internationale",
                "Marketing international adapté",
                "Négociation interculturelle",
                "Comprendre les déterminants de la vente et de l‟achat compétitif à l‟étranger",
                "Gérer et manager les activités commerciales d‟une  entreprise liées à la vente, à l‟achat, au financement en prenant en compte la complexité et les risques liés au marché international",
                "Analyser un marché étranger",
                "Remplir les formalités export",
                "Gérer les risques liés aux paiements internationaux et risque de change",
                "Choisir la formule de vente la plus adaptée à l‟international"

              ] 
            }
          }
        },
        {
          number: "03",
          title: "Débouchés",
          content: [
            "Vendeur export",
            "Chargé(e) d'affaires internationales",
            "Acheteur international",
            "Responsable sourcing international",
            "Responsable logistique internationale",
            "Commercial export",
            "Manager des opérations de commerce international ",
            "Opérateur de douane ",
            " Agent export "
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 12 à 24 mois combinant enseignements théoriques, cas pratiques, simulations interculturelles et stage à l'international pour une immersion professionnelle complète."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Études de cas réels d'entreprises",
            "Projets d'export fictifs ou réels",
            "Analyse de contrats internationaux",
            "Responsable logistique internationale",
            "Interventions d'experts du secteur",
            "Business games internationaux ",
            "Préparation aux certifications ",
            " Mémoire professionnel appliqué"
          ]
        }
      ]
    },

    {
      id: "communication-organisation",
      title: "Communication des Organisation (CO)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation vise à former des professionnels polyvalents capables de concevoir, mettre en œuvre et évaluer des stratégies de communication interne et externe pour les entreprises, institutions et organisations. Les apprenants développeront des compétences en gestion de projet, relations médias, communication digitale, gestion de crise et analyse d'image pour répondre aux enjeux contemporains de la communication organisationnelle."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Excellente expression écrite et orale",
                "Créativité et innovation",
                "Esprit d'analyse et de synthèse",
                "Capacité d'adaptation",
                "Gestion de projet",
                "Travail en équipe",
                "Sens relationnel développé",
                "Curiosité intellectuelle",
                "Résistance au stress",
                "Sens de l'organisation",
                "Esprit critique",
                "Leadership",
                "Gestion du temps"
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Stratégie de communication globale",
                "Conception de supports print et digital",
                "Organisation d'événements",
                "Maîtriser les sciences et techniques de l’information et de  la communication ",
                " Maîtriser le fonctionnement des médias : radio, télévision, presse écrite et internet",
                "Avoir une solide culture économico-financière et une bonne maîtrise des réseauxsociaux ",
                "Analyser un système de communication des organisations",
                "Mettre en application les politiques, stratégies et actions de communication de son organisation",
                "Mise en place de plans média",
                "SEO et stratégie éditoriale",
                "Pilotage de campagnes publicitaires",
                "Évaluation des actions de communication"
               
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Concepteur-rédacteur",
            "Chargé de médiation",
            "Chef de projet digital",
            "Community manager",
            "Chargé de communication",
            "Responsable événementiel"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation de 12 à 24 mois incluant cours théoriques, ateliers pratiques, projets concrets et stages en entreprise pour une immersion professionnelle complète."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Études de cas réels",
            "Simulations de conférences de presse",
            "Workshops avec professionnels",
            "Utilisation d'outils professionnels",
            "Création de book professionnel",
            "Stages en agence ou service communication"
           
          ]
        }
      ]
    },

    {
      id: "comptabilite-gestion",
      title: "Comptabilité Informatisée de Gestion (CGE)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation vise à former des professionnels maîtrisant les outils informatiques de gestion comptable et financière. Les apprenants développeront des compétences en traitement des opérations comptables, analyse financière, gestion budgétaire et utilisation des logiciels spécialisés pour produire des états financiers fiables et des tableaux de bord pertinents."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Rigueur et précision",
                "Sens de l'organisation",
                "Analyse critique",
                "Esprit logique",
                "Travail en équipe",
                "Éthique professionnelle",
                "Gestion des priorités",
                "Maîtrise des outils bureautiques",
                "Sens des responsabilités",
                "Discrétion professionnelle",
                "Capacité à travailler sous pression",
                "Gestion du temps"
              ]
             },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Saisie comptable informatisée",
                "Établissement des documents fiscaux",
                "Élaboration du bilan et compte de résultat",
                "Maîtrise des logiciels (Sage, Ciel, EBP)",
                "Centraliser, organiser et redresser les comptabilités des entreprises",
                "Elaborer les budgets et suivre leur exécution",
                "Traitement des opérations bancaires",
                "Gestion des stocks",
                "Audit interne",
                "Conformité légale",
                "Tableaux de bord de gestion",
                "Reporting financier"

              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Assistant comptable",
            "Gestionnaire de paie",
            "Comptable unique",
            "Contrôleur de gestion junior",
            "Responsable comptable",
            "Gestionnaire back-office",
            "Chef comptable"
          ]
        },

        {
          number: "04",
          title: "Débouchés",
          content: "Formation intensive de 6 à 12 mois combinant apprentissage théorique, travaux pratiques sur logiciels professionnels et stage en entreprise pour une immersion complète dans le métier."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Ateliers pratiques sur logiciels",
            "Études de cas concrets",
            "Utilisation de données réelles d'entreprises",
            "Projets comptables complets",
            "Mises en situation professionnelle",
            "Stages en cabinet ou service comptable"          ]
        }

      ]
    },

    {
      id: "douane-transit",
      title: "Douane et Transit (DT)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation professionnalisante vise à former des spécialistes des opérations douanières et logistiques internationales. Les apprenants acquerront une expertise complète en réglementation douanière, procédures de dédouanement, techniques de transit et gestion des flux internationaux pour faciliter les échanges commerciaux dans le respect des normes nationales et internationales."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Maîtrise des langues étrangères",
                "Sens de l'organisation",
                "Rigueur administrative",
                "Précision dans le traitement des dossiers",
                "Communication interculturelle",
                "Maîtriser l‟environnement juridique et économique des affaires",
                " Maîtriser les types d‟actes juridiques",
                "Maîtrise des outils bureautiques",
                "Sens des responsabilités",
                "Polyvalence"
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Maîtrise du code des douanes",
                "Classification tarifaire (SH)",
                "Calcul des droits et taxes",
                "Dédouanement à l'import/export",
                "Utilisation des logiciels douaniers (SIDONIE, DELTA)",
                "Gestion des régimes douaniers spéciaux",
                "Connaissance des Incoterms",
                "Assister un opérateur économique lors d‟un contrôle douanier",
                " Procéder à l‟enlèvement de la marchandise de l‟enceinte douanière",
                "Gérer le contentieux douanier",
                "Etablir une déclaration en détail pour tous les régimes douaniers",
                "Etablir une cotation à l‟importation et à l‟exportation"
                
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Déclarant dans les sociétés de transit et de commissionnaire en douane agréé",
            "Commissionnaire en douane agréé",
            "Responsables en charge du service extérieur dans les banques commerciales",
            " Responsables transit dans les Administrations Publiques ; les Missions Diplomatiques, lesOrganisations Internationales ; les entreprises commerciales, de services et de production",
            "Responsable logistique internationale",
            "Chargé d'affaires import/export",
            "Gestionnaire des opérations internationales",
            "Transitaires"

          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 6 à 18 mois alternant théorie, études de cas pratiques, simulations sur logiciels professionnels et stage en entreprise pour une immersion professionnelle complète."
        },

        {
          number: "05",
          title: " Approches Pédagogiques",
          content: [
            "Études de dossiers douaniers réels",
            "Analyse de contentieux réels",
            "Projets de gestion de flux internationaux",
            "Interventions de professionnels du secteur",
            "Visites de plateformes logistiques",
            "Stages en entreprises de transit",
            "Mises en situation complexes"

          ]
        }
      ]
    },

    {
      id: "droit-affaires",
      title: "Droit des Affaires et de l'Entreprise (DAE)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation d'excellence vise à former des juristes spécialisés capables d'accompagner les entreprises dans leur environnement juridique complexe. Les apprenants développeront une expertise pointue en droit commercial, fiscalité d'entreprise, droit social et contentieux des affaires pour conseiller et défendre efficacement les intérêts des organisations."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Rigoureuse analyse juridique",
                "Maîtrise de la documentation légale",
                "Capacité d'argumentation persuasive",
                "Veille législative constante",
                "Adaptation aux réformes juridiques",
                "Éthique professionnelle irréprochable",
                "Gestion des dossiers sensibles",
                "Médiation et conciliation",
                "Communication claire et précise",
                "Résolution créative de conflits",
                "Organisation méthodique",
                "Maîtrise des délais procéduraux",
                "Maîtrise des outils numériques juridiques"

              ]
             },
            specifiques: {
               titre: "Compétences Spécifiques", 
               items: [
                "Droit des sociétés (création, modification, dissolution)",
                "Droit fiscal des entreprises",
                "Propriété intellectuelle en entreprise",
                "Droit social et relations employeurs",
                "Droit bancaire et financier",
                "Droit des contrats commerciaux",
                "Droit des assurances professionnelles",
                "Droit des transports et logistique",
                "Droit des fusions-acquisitions",
                "Audit juridique d'entreprise",
                "Gestion des litiges commerciaux",
                "Négociation de conventions collectives",
                "Rédaction d'actes juridiques"
               
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Juriste d'entreprise",
            "Conseiller juridique en cabinet",
            "Avocat d'affaires",
            "Huissier de justice commercial",
            "Médiateur d'entreprise",
            "Consultant en droit des sociétés",
            "Secrétaire juridique spécialisé"

          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation complète de 12 à 24 mois combinant enseignements théoriques fondamentaux, travaux pratiques sur cas réels, simulations contentieuses et stage professionnel obligatoire."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Analyse de jurisprudence commentée",
            "Rédaction complète de contrats types",
            "Études de contentieux complexes",
            "Utilisation de bases de données juridiques",
            "Projets d'audit juridique",
            "Stages en services juridiques d'entreprise",
            "Moot courts (plaidoiries simulées)"

          ]
        }
      ]
    },

    {
      id: "gestion-qualite",
      title: "Gestion de la Qualité (GQ)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation professionnalisante vise à former des experts capables de concevoir, déployer et piloter des systèmes de management de la qualité dans divers secteurs industriels et services. Les apprenants développeront une expertise en normalisation, amélioration continue et gestion des processus pour optimiser la performance des organisations."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Rigoureuse analyse des processus",
                "Excellente organisation méthodique",
                "Esprit d'analyse critique",
                "Capacité à standardiser les pratiques",
                "Communication inter-services efficace",
                "Management transversal",
                "Résolution systémique de problèmes",
                "Adaptation aux normes sectorielles",
                "Sens aigu du détail",
                "Pédagogie des bonnes pratiques",
                "Veille normative continue",
                "Management du changement",
                "Résistance aux pressions opérationnelles",
                "Maîtrise des outils qualité"
              ] 
            },
            specifiques: {
               titre: "Compétences Spécifiques", 
              items: [
               "Maîtrise des normes ISO 9001",
                "Audit qualité interne",
                "Mise en place de tableaux de bord",
                "Techniques d'amélioration continue (5S, Kaizen)",
                "Gestion des non-conformités",
                "Certification des systèmes qualité",
                "Techniques de résolution de problèmes (8D, PDCA)",
                "Qualité fournisseurs",
                "Qualité en environnement lean",
                "Benchmarking qualité",
                "Qualité spécifique secteur (automobile, agroalimentaire, etc.)",
                "Formation aux procédures qualité",
                "Pilotage des indicateurs QHSE"
                
              ] 
            }
          }
        },
        {
          number: "03",
          title: "Débouchés",
          content: [
            "",
                "Responsable qualité",
                "Auditeur qualité",
                "Consultant en systèmes qualité",
                "Chargé d'amélioration continue",
                "Responsable certification",
                "Qualiticien secteur spécifique",
                "Coordinateur QHSE",
                "Animateur qualité"
            
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 6 à 18 mois combinant enseignements théoriques, ateliers pratiques, études de cas sectoriels et stage en entreprise pour une immersion professionnelle complète."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
                "Travaux sur normes sectorielles",
                "Visites d'entreprises certifiées",
                "Interventions de responsables qualité",
                "Analyse de processus réels",
                "Utilisation de logiciels qualité",
                "Projets d'implémentation qualité",
                "Études de cas réels d'entreprises",
                "Ateliers d'audits simulés"

          ]
        }
      ]
    },

    {
      id: "gestion-fiscale",
      title: "Gestion Fiscale (GF)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation spécialisée vise à former des experts capables de maîtriser l'environnement fiscal complexe des entreprises. Les apprenants développeront des compétences pointues en fiscalité nationale et internationale, optimisation fiscale, conformité réglementaire et gestion des obligations déclaratives pour conseiller efficacement les organisations."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Analyse rigoureuse des textes fiscaux",
                "Rédaction précise de documents fiscaux",
                "Veille législative constante",
                "Gestion des échéances fiscales",
                "Sens aigu du détail",
                "Capacité à vulgariser des concepts complexes",
                "Éthique professionnelle irréprochable",
                "Gestion des dossiers sensibles",
                "Résolution de problèmes fiscaux",
                "Négociation avec les administrations",
                "Management d'équipe fiscale",
                "Maîtrise des délais légaux",
                "Pédagogie fiscale"

              ]
             },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Maîtrise du Code Général des Impôts",
                "Fiscalité des sociétés (IS, CVAE)",
                "TVA intracommunautaire",
                "Fiscalité internationale (BEPS, CRS)",
                "Optimisation fiscale légale",
                "Fiscalité des particuliers (IR, IFI)",
                "Régimes fiscaux spécifiques",
                "Droit douanier et fiscalité indirecte",
                "Gestion des crédits d'impôt",
                "Fiscalité des secteurs réglementés",
                "Fiscalité environnementale",
                "Audit fiscal",
                "Contentieux fiscal"
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Fiscaliste en entreprise",
            "Consultant en optimisation fiscale",
            "Juriste fiscal",
            "Expert-comptable spécialisé",
            "Auditeur fiscal",
            "Conseiller en gestion patrimoniale",
            "Chef de service contentieux fiscal"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 12 à 18 mois alternant enseignements théoriques, études de cas pratiques, simulations de contrôles fiscaux et stage en cabinet ou entreprise."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Analyse de jurisprudence fiscale",
            "Études de dossiers fiscaux réels",
            "Utilisation de logiciels fiscaux professionnels",
            "Interventions d'experts fiscaux",
            "Projets de reporting fiscal complet",
            "Ateliers d'optimisation fiscale"
          ]
        }
      ]
    },

    {
      id: "logistique-transport",
      title: "Logistique et Transport (GLT)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation professionnalisante vise à former des spécialistes capables d'optimiser les flux logistiques et d'organiser le transport des marchandises. Les apprenants développeront des compétences en gestion des stocks, planification des transports, gestion des entrepôts et maîtrise des outils logistiques pour répondre aux enjeux de la supply chain moderne."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Organisation et planification rigoureuse",
                "Faire preuve de rigueur dans l'organisation du travail et une capacité de réactivité et de créativité ",
                "Avoir une connaissance générale des langues étrangères, l‟anglais en particulier ",
                "Avoir le sens de la négociation, des relations commerciales et de la vente, comme de l'après- vente.",
                "Avoir  des  connaissances  générales  de  l‟environnement  social  et  économique  national, régional et international ",
                "Organisation et planification rigoureuse",
                "Gestion des priorités",
                "Résolution de problèmes opérationnels",
                "Adaptabilité aux imprévus",
                "Polyvalence sectorielle",
                "Management d'équipe",
                "Maîtrise des langues étrangères"
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Gestion des stocks et inventaires",
                "Optimisation des tournées",
                "Gestion des documents de transport",
                "Assurer le pilotage d‟une chaine logistique",
                "Connaître un large éventail des techniques liées à l‟exploitation  de la chaine logistique(entreposage, manutention, transitique, productique, transport, etc.) ",
                "Faciliter et coordonner l‟échange entre les acteurs internes de l‟entreprise ",
                "Contribuer à la résolution rapide des problèmes entre fournisseurs et clients ",
                "Gérer le changement et promouvoir des solutions nécessaires à l‟adhésion des partenaires",
                "Avoir des connaissances en gestion comptable et financière ainsi qu‟en contrôle de gestion",
                " Prévoir des alternatives performantes en cas de perturbations des flux en cours ",
                "Avoir des connaissances en gestion comptable et financière ainsi qu'en contrôle de gestion(plus centrées sur des outils de contrôle en temps réel que sur les méthodes comptables)",
                "Mettre en œuvre des méthodes à la fois souples et rationnelles, pour matérialiser son action et permettre la régulation des flux à travers le développement d‟un système logistique et des réseaux d‟information performants"

              ]
             }
          }
        },
        {
          number: "03",
          title: "Débouchés",
          content: [
            "Responsable des unités de transport ",
            "Gestionnaire des stocks et des approvisionnements ",
            "Gestionnaire des réseaux d‟entrepôts et des plates-formes",
            "Manutentionnaire",
            "Responsable logistique",
            "Responsable d'entrepôt",
            "Coordinateur logistique"

          ]
        },


        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 6 à 12 mois combinant cours théoriques, ateliers pratiques, études de cas concrets et stage en entreprise pour une immersion professionnelle."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Simulations de gestion d'entrepôt ",
            "Utilisation de logiciels professionnels",
            "Visites de plateformes logistiques",
            "Projets d'optimisation des flux",
            "Interventions de professionnels",
            "Mises en situation de crise",
            "Ateliers sur la sécurité logistique"

          ]
        }
      ]
    },

    {
      id: "marketing-vente",
      title: "Marketing Commerce Vente (MCV)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation polyvalente forme des professionnels opérationnels maîtrisant les techniques modernes de commercialisation et de relation client. Les apprenants développeront des compétences en stratégie marketing, analyse de marché, négociation commerciale et digital selling pour répondre aux exigences des entreprises et des consommateurs d'aujourd'hui."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Sens commercial développé",
                "Excellente communication verbale",
                "Capacité d'écoute active",
                "Résilience face aux objections",
                "Esprit d'analyse marché",
                "Créativité marketing",
                "Adaptabilité sectorielle",
                "Gestion du stress commercial",
                "Intelligence émotionnelle",
                "Curiosité permanente",
                "Maîtrise des outils bureautiques",
                "Polyvalence digitale"
                
              ] 
            },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
             
                "Gestion de portefeuille clients",
                "Marketing digital (SEO, réseaux sociaux)",
                "Techniques de closing",
                "CRM et fidélisation client",
                "Marketing sensoriel",
                "Faire la veille concurrentielle pour accroitre les ventes",
                "Animer un point de vente",
                "Conduire une équipe commerciale vers l‟atteinte des objectifs",
                "Étude et analyse de marché",
                "Techniques de vente consultative"
               
              ] 
            }
          }
        },

        {
          number: "03",
          title: "Débouchés",
          content: [
            "Chargé de marketing",
            "Responsable commercial",
            "Key account manager",
            "Conseiller clientèle expert",
            "Responsable e-commerce",
            "Chargé d'études marché",
            "Entrepreneur commercial"

          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation intensive de 6 à 12 mois alternant théorie, ateliers pratiques, mises en situation réelles et stage en entreprise pour une immersion professionnelle optimale."
        },

        {
          number: "05",
          title: "Approches Pédagogiques",
          content: [
            "Utilisation d'outils CRM professionnels",
            "Ateliers de pitch commercial",
            "Utilisation d'outils CRM professionnels",
            "Challenges commerciaux en équipe",
            "Analyse de campagnes réussies"
          ]
        }
      ]
    },

    {
      id: "ressources-humaines",
      title: "Ressources Humaines (RH)",
      category: "Gestion & Commerce",
      content: [
        {
          number: "01",
          title: "Présentation de la formation",
          content: "Cette formation complète vise à former des professionnels polyvalents capables de gérer l'ensemble du cycle de vie des collaborateurs au sein des organisations. Les apprenants développeront des compétences en gestion administrative du personnel, recrutement, formation, droit social et stratégie RH pour accompagner la performance des entreprises et le bien-être au travail."
        },
        {
          number: "02",
          title: "Compétences visées",
          content: {
            generiques: { 
              titre: "Compétences Génériques", 
              items: [
                "Excellente communication interpersonnelle",
                "Discrétion et éthique professionnelle",
                "Empathie et intelligence relationnelle",
                "Capacité d'écoute active",
                "Rigueur administrative",
                "Gestion des conflits",
                "Adaptation aux différentes cultures d'entreprise",
                "Sens de la confidentialitév",
                "Management d'équipe",
                "Négociation sociale",
                "Polyvalence fonctionnelle",
                "Esprit d'initiative",
                "Travail en mode projet"
                 ]
             },
            specifiques: { 
              titre: "Compétences Spécifiques", 
              items: [
                "Gestion des paies et déclarations sociales",
                "Conduite de processus de recrutement",
                "Gestion des compétences et GPEC",
                "Pilotage de plans de formation",
                "Gestion des relations sociales",
                "Utilisation de SIRH",
                "Prévention des risques psycho-sociaux",
                "Suivre des contrats d‟externalisation de service",
                " Réaliser des entretiens de recrutement",
                "Suivre des actions de formation, de mobilité ou de reclassement",
                "Suivre des actions de formation, de mobilité ou de reclassement"
              ]
             }
          }
        },
        {
          number: "03",
          title: "Débouchés",
          content: [
            "Assistant(e) RH",
            "Gestionnaire de paie",
            "Chargé(e) de recrutement",
            "Responsable formation",
            "Consultant(e) en RH",
            "Directeur(trice) des ressources humaines"
          ]
        },

        {
          number: "04",
          title: "Durée de la Formation",
          content: "Formation de 12 à 24 mois combinant enseignements théoriques, ateliers pratiques, mises en situation professionnelle et stage en entreprise pour une immersion complète."
        },

        {
          number: "05",
          title: " Approches Pédagogiques",
          content: [
            "Études de cas concrets",
            "Simulations d'entretiens professionnels",
            "Interventions de professionnels",
            "Projets de politique RH",
            "Visites d'entreprises",
            "Analyses de jurisprudence sociale",
            "Mémoire professionnel"

          ]
        }
      ]
    },

];
