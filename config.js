const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Syrine';
const LAST_NAME = 'Chelly';
const GITHUB_USERNAME = 'awesome-developer';
const TWITTER_USERNAME = 'awesome-developer';
const LINKEDIN_USERNAME = 'awesome-developer';
const PHONE_NUMBER = '+216 53996104';
const ADDRESS = 'Nabeul';
const EMAIL = 'syrinechelly5@gmail.com';
const FOOTER_URL = 'https://www.cto.ai';

const BIO = `
Etudiante actuellement en 3éme année ingénieur de spécialité ingénierie du développement logiciel. J’ai hâte de pouvoir élaborer de nouveaux projets auprès du domaine dans lequel je me suis spécialisée afin de renforcer mes compétences`;

const EXPERIENCE_LIST = [
  {
    title: 'Stage été ',
    company: 'Néopolis developpement ',
    description: `
    Conception et développement d’une application web pour récupérer des objets perdus intitulée Found.Me`,
    period: 'aout 2020 - septempbre 2020 ',
  },
  {
    title: 'Stage PFE',
    company: 'Startup Devrows  ',
    description: `
    Conception et développement d’une plateforme web et mobile de gestion d’un établissement d’enseignement supérieur privé `,
    period: 'Mars 2018 - Mai 2018 ',
  },
  {
    title: 'Stage de perfectionnement ',
    company: 'Tunisie Télécom  ',
    description: `
    Mise en place d’une application java de gestion de stagiaires `,
    period: 'Janvier 2017  ',
  },
  {
    title: 'Stage Initiation ',
    company: 'Hotel la badira   ',
    description: `
    Garantir le bon fonctionnement de tous les systèmes informatiques.
    Assurer et gèrer la continuité de service du réseau informatique.`,
    period: 'Janvier 2016  ',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Institut supérieur d’informatique',
   
    description: `
    Diplome national d’ingénieur en sciences appliquées et technologiques `,
    period: '2018-2021',
  },
  {
    institution: 'Institut supérieur des études technologiques',

    description: `
    Licence appliquée en technologies d’informatique `,
    period: '2016-2018',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'React', iconClass: 'fa-react' },
  { name: 'NodeJS', iconClass: 'fa-node-js' },
 
  { name: 'NPM', iconClass: 'fa-npm' },

];

const SKILLS = ['Polyvalence', 'Autonomie', 'Sociabilité','Integration'];

const PORTFOLIO = {
  introParagraphs: [
    
  ],
  items: [
    {
      name: 'Application de gestion des matchs QATAR 2022',
      description:
        '•	Conception et Réalisation d’une solution web développée avec le framework SpringBoot et Angular 8.',
      url: 'https://github.com/user/repo',
    },
    {
      name: ' Application mobile native pour l’adiministration de l’ISI',
      description:
        '•	Réalisation d’une application mobile qui permet aux étudiants de faire des demandes de scolarité et la consommation des API ProcessMaker d’une solution web, utilisant des bibliothèques OKhttp et retrofit 2.',
      url: 'https://github.com/user/repo',
    },
    {
      name: ' Application de reconnaissance d’objet ',
      description:
        '•Mise en place d’un sytéme de reconnaissance d’objets sur une image numérique en utilisant  un API de détection des objets TensorFlow.',
      url: 'https://github.com/user/repo',
    },
  ],
};
const ACTIVITES_LIST = [
  {
    institution: 'Institut supérieur d’informatique',
   
    description: `
    Diplome national d’ingénieur en sciences appliquées et technologiques `,
    period: '2018-2021',
  },
  {
    institution: 'Institut supérieur des études technologiques',

    description: `
    Licence appliquée en technologies d’informatique `,
    period: '2016-2018',
  },
];
const CERTIFICATIONS = [
  'Certification de participation "Tunisian students and young professionnel congress 2019"',
  'Certification de participation "INNOVATION CAMP"',
  
  
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/cto-ai.png',
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: `https://github.com/chellysyrine`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/syrine-chelly-021822144`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
