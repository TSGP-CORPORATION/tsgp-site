export const languages = {
  en: 'English',
  fr: 'Français',
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = 'en'

export const translations = {
  en: {
    site: {
      title: 'TSGP Corporation - Digital Solutions, Software Development & Tech Services',
    },
    nav: {
      menuLabel: 'Toggle mobile menu',
      links: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      },
      quote: 'Get a Quote',
      languageLabel: 'Language',
    },
    hero: {
      title: 'TECH FOR SOLUTIONS',
      subtitle: 'General Solution Corporation',
      description:
        'We find and deploy secure software solutions that make work easier and improve business service performance for a better Cameroon.',
      primaryCta: 'Get Started',
      secondaryCta: 'Our Services',
    },
    about: {
      label: 'About Us',
      title: 'Focused On Excellence In Every Project',
      text:
        'We are a passionate tech company dedicated to building modern digital solutions. From concept to deployment, we craft products that are fast, beautiful, and built to scale, driven by quality and innovation.',
      founders: 'Founders',
      cta: 'Contact Us',
      imageAlt: 'Tech team collaborating',
      stats: [
        'Client Satisfaction',
        'Successful Projects',
        'Expert Developers',
        'Years of Experience',
      ],
      teamLabel: 'The Team',
      teamTitle: 'The Minds Behind The Work',
      teamSubtitle: 'Two builders, one vision, crafting digital experiences that matter.',
      roles: {
        ceo: 'Chief Executive Officer',
        cto: 'Chief Technology Officer',
      },
    },
    services: {
      label: 'Our Services',
      title: 'Comprehensive Tech Solutions',
      subtitle:
        'We find and deploy secure software solutions to streamline work and improve the performance of businesses for a better Cameroon.',
      cards: [
        {
          title: 'Secure Software Solutions',
          description:
            'We develop and deploy robust, secure software tailored to protect your business data and streamline your operations for maximum efficiency.',
        },
        {
          title: 'Digital Transformation',
          description:
            'End-to-end support for SMEs stepping into the digital era, from process automation to full modernization of existing systems.',
        },
        {
          title: 'Performance & Analytics',
          description:
            'Smart dashboards and analytical tools to measure, track, and continuously improve your services and production in real time.',
        },
        {
          title: 'Support & Maintenance',
          description:
            'Ongoing technical assistance, regular updates, and responsive support to guarantee the availability and reliability of your solutions.',
        },
      ],
    },
    solutions: {
      title: 'Solutions We Provide',
      subtitle:
        'Secure, innovative software solutions tailored to improve the performance of SMEs in production and services for a better Cameroon.',
      readMore: 'Read More',
      menu: {
        software: 'Software Solutions',
        digital: 'Digital Transformation',
        analytics: 'Analytics',
        integration: 'Integration',
        support: 'Support',
        consulting: 'IT Consulting',
      },
      details: {
        software: {
          title: 'Secure Software Solutions',
          description:
            'We develop and deploy robust, secure software systems tailored to your business needs. Our solutions are built with security-first architecture to protect your data, streamline workflows, and help your teams operate at peak performance.',
          services: [
            'Custom Software Development',
            'Security Auditing',
            'API Development & Integration',
            'Cloud-Based Applications',
            'Database Architecture',
            'Software Testing & QA',
          ],
        },
        digital: {
          title: 'Digital Transformation',
          description:
            'We guide SMEs through every step of their digital journey, from strategy and planning to full deployment. We automate manual processes, modernize legacy systems, and equip your teams with digital tools.',
          services: [
            'Process Automation',
            'Legacy System Modernization',
            'Workflow Digitization',
            'ERP & CRM Deployment',
            'Change Management Support',
            'Employee Digital Training',
          ],
        },
        analytics: {
          title: 'Performance & Analytics',
          description:
            'Turn your raw data into actionable intelligence. We build dashboards and reports that give you real-time visibility into production, sales, and service metrics.',
          services: [
            'KPI Dashboard Design',
            'Real-Time Reporting',
            'Data Pipeline Setup',
            'Business Intelligence Tools',
            'Predictive Analytics',
            'Excel & BI Integration',
          ],
        },
        integration: {
          title: 'System Integration',
          description:
            'We connect your existing tools, platforms, and software into one seamless ecosystem so your information moves clearly across the business.',
          services: [
            'API & Third-Party Integrations',
            'ERP & CRM Linking',
            'Cross-Platform Sync',
            'Data Migration',
            'Multi-System Orchestration',
            'Integration Testing',
          ],
        },
        support: {
          title: 'Support & Maintenance',
          description:
            'Our support team keeps your software available, secure, and up to date through proactive monitoring, rapid incident response, and regular maintenance.',
          services: [
            '24/7 Technical Support',
            'Bug Fixes & Patches',
            'System Health Monitoring',
            'Software Updates',
            'User Support & Helpdesk',
            'Incident Management',
          ],
        },
        consulting: {
          title: 'IT Strategy & Consulting',
          description:
            'Our experts help you assess your current IT landscape and build a clear technology roadmap that fits your goals and budget.',
          services: [
            'IT Needs Assessment',
            'Technology Roadmapping',
            'Budget Optimization',
            'Vendor Selection',
            'Risk & Compliance Review',
            'Digital Strategy Planning',
          ],
        },
      },
    },
    features: {
      label: 'Why Choose Us',
      title: 'Innovation serving every organization.',
      items: [
        {
          title: 'Quality Guaranteed',
          description:
            'We engineer every product with precision, backed by testing, code reviews, and careful QA. Our commitment to reliability means software that performs at scale.',
        },
        {
          title: 'On-Time Delivery',
          description:
            'We run lean, agile sprints with transparent milestones so you always know where your product stands. Deadlines are a commitment.',
        },
        {
          title: 'Expert Team',
          description:
            'Our engineers, designers, and product strategists bring modern technical expertise focused on building solutions that drive real impact.',
        },
      ],
    },
    projects: {
      label: 'Our Work',
      title: 'Discover Our Projects',
      subtitle:
        "From concept to deployment, we build digital products that make an impact. Here's a look at what we've shipped so far.",
      items: [
        {
          title: 'New World Technology',
          category: 'Web Development',
          description:
            'A full-featured school website for a vocational training institution specializing in tech, electrical, and solar training.',
        },
      ],
    },
    testimonials: {
      label: 'Testimonials',
      titleLine1: 'Built On Trust, Proven',
      titleLine2: 'By Results',
      description:
        'Hear from satisfied clients who have experienced the quality and professionalism that defines our work.',
      cta: 'Work With Us',
      imageAlt: 'Professionals collaborating',
      previous: 'Previous testimonial',
      next: 'Next testimonial',
      items: [
        {
          text:
            'Working with this team was a great experience from start to finish. They delivered our school website on time, exactly as promised, and the quality of the work exceeded what we had in mind.',
          authorName: 'Founder',
          authorRole: 'Founder, New World Technology Vocational Training',
        },
      ],
    },
    faq: {
      title: "Got Questions? We've Got You Covered",
      subtitle:
        'From project planning to final touches, we have answered the most common questions to help you make informed decisions.',
      items: [
        {
          question: 'How long does a software project usually take?',
          answer:
            'The timeline depends on size and complexity. A simple website can take a few weeks, while larger platforms may take several months. We provide a clear schedule during planning.',
        },
        {
          question: 'Do you help businesses define their project needs?',
          answer:
            'Yes. We can help you clarify your goals, choose the right technology, and prepare a practical roadmap before development starts.',
        },
        {
          question: 'What technologies do you use?',
          answer:
            'We choose technologies based on the project requirements, with a focus on security, performance, maintainability, and long-term value.',
        },
        {
          question: 'Can I request changes after development starts?',
          answer:
            'Yes. We review each change with you and explain its impact on timeline, budget, and technical scope before moving forward.',
        },
        {
          question: 'How much will my project cost?',
          answer:
            'Cost depends on features, complexity, integrations, and timeline. We provide a transparent quote after understanding your needs.',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle:
        'Get more information about our services. We are here to support you in developing your project.',
      formTitle: 'Project Request',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        interest: 'Area of Interest',
        message: 'Message',
      },
      placeholders: {
        firstName: 'Your first name',
        lastName: 'Your last name',
        email: 'your@email.com',
        phone: '+237 XXX XXX XXX',
        interest: 'Select an area',
        message: 'Tell us about your project ...',
      },
      options: {
        software: 'Software Development',
        stock: 'Stock Management',
        education: 'Education',
        construction: 'Construction',
        all: 'All areas',
      },
      submit: 'Send Request',
      infoTitle: 'Contact Information',
      address: 'Address',
      addressLines: ['Yaounde, Centre Region', 'Cameroon'],
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hours: 'Opening Hours',
      hoursLines: ['Mon - Fri: 8:00 - 17:00', 'Sat: 8:00 - 13:00'],
      ctaTitle: 'Ready to work with us?',
      ctaText:
        'Tell us about your idea and benefit from our expertise, shared resources, and support network.',
      ctaButton: 'Learn More',
    },
    cta: {
      title: 'Ready to Build Your Digital Project?',
      description:
        'Let us transform your vision into reality. Our team is ready to discuss your needs and provide a complete solution.',
      button: 'Get Your Free Quote',
    },
    footer: {
      description:
        'We transform visions into reality through secure digital solutions and a strong commitment to quality.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
  },
  fr: {
    site: {
      title: 'TSGP Corporation - Solutions numériques, logiciels et services tech',
    },
    nav: {
      menuLabel: 'Ouvrir le menu mobile',
      links: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        projects: 'Projets',
        contact: 'Contact',
      },
      quote: 'Demander un devis',
      languageLabel: 'Langue',
    },
    hero: {
      title: 'TECH FOR SOLUTIONS',
      subtitle: 'General Solution Corporation',
      description:
        'Nous trouvons et déployons des solutions logicielles sécurisées pour faciliter le travail et améliorer la performance des services des entreprises, pour un Cameroun meilleur.',
      primaryCta: 'Commencer',
      secondaryCta: 'Nos services',
    },
    about: {
      label: 'À propos de nous',
      title: 'L’excellence au cœur de chaque projet',
      text:
        'Nous sommes une entreprise technologique passionnée par la création de solutions numériques modernes. De l’idée au déploiement, nous concevons des produits rapides, élégants et évolutifs, guidés par la qualité et l’innovation.',
      founders: 'Fondateurs',
      cta: 'Nous contacter',
      imageAlt: 'Équipe tech en collaboration',
      stats: [
        'Satisfaction client',
        'Projets réussis',
        'Développeurs experts',
        'Années d’expérience',
      ],
      teamLabel: 'L’équipe',
      teamTitle: 'Les esprits derrière le travail',
      teamSubtitle: 'Deux bâtisseurs, une vision, créer des expériences numériques utiles.',
      roles: {
        ceo: 'Directeur général',
        cto: 'Directeur technique',
      },
    },
    services: {
      label: 'Nos services',
      title: 'Solutions technologiques complètes',
      subtitle:
        'Nous trouvons et déployons des solutions logicielles sécurisées pour simplifier le travail et améliorer la performance des entreprises, pour un Cameroun meilleur.',
      cards: [
        {
          title: 'Solutions logicielles sécurisées',
          description:
            'Nous développons et déployons des logiciels robustes et sécurisés pour protéger vos données et rendre vos opérations plus efficaces.',
        },
        {
          title: 'Transformation digitale',
          description:
            'Un accompagnement complet des PME vers le numérique, de l’automatisation des processus à la modernisation des systèmes existants.',
        },
        {
          title: 'Performance et analyse',
          description:
            'Des tableaux de bord et outils d’analyse pour mesurer, suivre et améliorer vos services et votre production en temps réel.',
        },
        {
          title: 'Support et maintenance',
          description:
            'Une assistance technique continue, des mises à jour régulières et un support réactif pour garantir la disponibilité de vos solutions.',
        },
      ],
    },
    solutions: {
      title: 'Solutions que nous proposons',
      subtitle:
        'Des solutions logicielles sécurisées et innovantes pour améliorer la performance des PME dans la production et les services.',
      readMore: 'Lire plus',
      menu: {
        software: 'Solutions logicielles',
        digital: 'Transformation digitale',
        analytics: 'Analyse',
        integration: 'Intégration',
        support: 'Support',
        consulting: 'Conseil IT',
      },
      details: {
        software: {
          title: 'Solutions logicielles sécurisées',
          description:
            'Nous développons et déployons des systèmes logiciels sécurisés adaptés à vos besoins. Nos solutions protègent vos données, simplifient vos flux de travail et aident vos équipes à être plus performantes.',
          services: [
            'Développement logiciel sur mesure',
            'Audit de sécurité',
            'Développement et intégration API',
            'Applications cloud',
            'Architecture de base de données',
            'Tests logiciels et assurance qualité',
          ],
        },
        digital: {
          title: 'Transformation digitale',
          description:
            'Nous accompagnons les PME à chaque étape de leur parcours numérique, de la stratégie au déploiement complet.',
          services: [
            'Automatisation des processus',
            'Modernisation des systèmes existants',
            'Digitalisation des flux de travail',
            'Déploiement ERP et CRM',
            'Accompagnement au changement',
            'Formation numérique des employés',
          ],
        },
        analytics: {
          title: 'Performance et analyse',
          description:
            'Transformez vos données en informations utiles grâce à des tableaux de bord et rapports en temps réel.',
          services: [
            'Conception de tableaux de bord KPI',
            'Rapports en temps réel',
            'Mise en place de pipelines de données',
            'Outils de business intelligence',
            'Analyse prédictive',
            'Intégration Excel et BI',
          ],
        },
        integration: {
          title: 'Intégration de systèmes',
          description:
            'Nous connectons vos outils, plateformes et logiciels existants dans un écosystème cohérent.',
          services: [
            'Intégrations API et services tiers',
            'Connexion ERP et CRM',
            'Synchronisation multiplateforme',
            'Migration de données',
            'Orchestration de systèmes',
            'Tests d’intégration',
          ],
        },
        support: {
          title: 'Support et maintenance',
          description:
            'Notre équipe garde vos logiciels disponibles, sécurisés et à jour grâce au suivi, à l’assistance rapide et à la maintenance régulière.',
          services: [
            'Support technique 24/7',
            'Correction de bugs et patchs',
            'Surveillance de l’état du système',
            'Mises à jour logicielles',
            'Support utilisateur',
            'Gestion des incidents',
          ],
        },
        consulting: {
          title: 'Stratégie et conseil IT',
          description:
            'Nos experts vous aident à analyser votre environnement IT et à construire une feuille de route adaptée à vos objectifs et à votre budget.',
          services: [
            'Analyse des besoins IT',
            'Feuille de route technologique',
            'Optimisation du budget',
            'Choix des fournisseurs',
            'Revue des risques et conformité',
            'Planification de stratégie digitale',
          ],
        },
      },
    },
    features: {
      label: 'Pourquoi nous choisir',
      title: 'L’innovation au service de chaque structure.',
      items: [
        {
          title: 'Qualité garantie',
          description:
            'Nous concevons chaque produit avec précision, avec des tests, des revues de code et un contrôle qualité attentif.',
        },
        {
          title: 'Livraison à temps',
          description:
            'Nous travaillons avec des étapes claires afin que vous sachiez toujours où en est votre produit.',
        },
        {
          title: 'Équipe experte',
          description:
            'Nos ingénieurs, designers et stratèges produit apportent une expertise moderne pour créer des solutions à fort impact.',
        },
      ],
    },
    projects: {
      label: 'Nos réalisations',
      title: 'Découvrez nos projets',
      subtitle:
        'De l’idée au déploiement, nous construisons des produits numériques utiles. Voici ce que nous avons déjà livré.',
      items: [
        {
          title: 'New World Technology',
          category: 'Développement web',
          description:
            'Un site web complet pour un centre de formation professionnelle spécialisé en technologies, électricité et solaire.',
        },
      ],
    },
    testimonials: {
      label: 'Témoignages',
      titleLine1: 'Fondé sur la confiance, prouvé',
      titleLine2: 'par les résultats',
      description:
        'Découvrez l’avis de clients satisfaits qui ont bénéficié de la qualité et du professionnalisme de notre travail.',
      cta: 'Travailler avec nous',
      imageAlt: 'Professionnels en collaboration',
      previous: 'Témoignage précédent',
      next: 'Témoignage suivant',
      items: [
        {
          text:
            'Travailler avec cette équipe a été une excellente expérience du début à la fin. Le site web de notre école a été livré à temps, comme promis, avec une qualité supérieure à nos attentes.',
          authorName: 'Fondateur',
          authorRole: 'Fondateur, New World Technology Vocational Training',
        },
      ],
    },
    faq: {
      title: 'Des questions ? Nous avons les réponses',
      subtitle:
        'De la planification au déploiement, nous répondons aux questions les plus fréquentes pour vous aider à décider.',
      items: [
        {
          question: 'Combien de temps dure généralement un projet logiciel ?',
          answer:
            'La durée dépend de la taille et de la complexité. Un site simple peut prendre quelques semaines, tandis qu’une plateforme plus large peut prendre plusieurs mois.',
        },
        {
          question: 'Aidez-vous les entreprises à définir leurs besoins ?',
          answer:
            'Oui. Nous vous aidons à clarifier vos objectifs, choisir la bonne technologie et préparer une feuille de route pratique.',
        },
        {
          question: 'Quelles technologies utilisez-vous ?',
          answer:
            'Nous choisissons les technologies selon les besoins du projet, avec priorité à la sécurité, la performance et la maintenance.',
        },
        {
          question: 'Puis-je demander des changements après le début du développement ?',
          answer:
            'Oui. Nous analysons chaque changement avec vous et expliquons son impact sur le délai, le budget et le périmètre technique.',
        },
        {
          question: 'Combien coûtera mon projet ?',
          answer:
            'Le coût dépend des fonctionnalités, de la complexité, des intégrations et du délai. Nous proposons un devis transparent après analyse.',
        },
      ],
    },
    contact: {
      title: 'Contactez-nous',
      subtitle:
        'Obtenez plus d’informations sur nos services. Nous sommes là pour vous accompagner dans le développement de votre projet.',
      formTitle: 'Demande de projet',
      fields: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        interest: 'Domaine d’intérêt',
        message: 'Message',
      },
      placeholders: {
        firstName: 'Votre prénom',
        lastName: 'Votre nom',
        email: 'votre@email.com',
        phone: '+237 XXX XXX XXX',
        interest: 'Sélectionnez un domaine',
        message: 'Parlez-nous de votre projet ...',
      },
      options: {
        software: 'Développement logiciel',
        stock: 'Gestion de stock',
        education: 'Éducation',
        construction: 'Construction',
        all: 'Tous les domaines',
      },
      submit: 'Envoyer la demande',
      infoTitle: 'Informations de contact',
      address: 'Adresse',
      addressLines: ['Yaoundé, Région du Centre', 'Cameroun'],
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      hours: 'Heures d’ouverture',
      hoursLines: ['Lun - Ven : 8h00 - 17h00', 'Sam : 8h00 - 13h00'],
      ctaTitle: 'Prêt à travailler avec nous ?',
      ctaText:
        'Présentez-nous votre idée et bénéficiez de notre expertise, de nos ressources et de notre réseau de soutien.',
      ctaButton: 'En savoir plus',
    },
    cta: {
      title: 'Prêt à construire votre projet numérique ?',
      description:
        'Transformons votre vision en réalité. Notre équipe est prête à discuter de vos besoins et à proposer une solution complète.',
      button: 'Obtenir un devis gratuit',
    },
    footer: {
      description:
        'Nous transformons les idées en réalité grâce à des solutions numériques sécurisées et un engagement fort pour la qualité.',
      quickLinks: 'Liens rapides',
      contactInfo: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.',
    },
  },
} as const

export type Translations = typeof translations[Language]
