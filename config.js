const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Amal';
const LAST_NAME = 'Ben Khelifa';
const GITHUB_USERNAME = 'amal ben khelifa';
const TWITTER_USERNAME = 'amal ben khelifa';
const LINKEDIN_USERNAME = 'amel ben khelifa';
const PHONE_NUMBER = '51598718';
const ADDRESS = 'Rue Borj Bou khelifa Nabeul';
const EMAIL = 'amelbk7@gmail.com';
const FOOTER_URL = 'https://www.cto.ai';

const BIO = `
Je suis actuellement étudiante en 3éme année en ingénierie informatique spécialité 
 génie logiciel à l'institut supérieur d’informatique Ariana. `;

const EXPERIENCE_LIST = [
  {
    title: 'Stage dété',
    company: 'DOTCOM',
    description: `
    conception et développement d'une application Web qui aide les recruteurs à trouver
    les étudiants qui cherchent des stages
    Durée: 3 Mois
    Technologies utilisées: Angular Node js`,
    
      period: '07/2020-09/2020',
  },
  {
    title: 'Stage PFE',
    company: 'INDAFRI',
    description: `
    Conception et réalisation d’un site blog de voyage pour promouvoir le tourisme
    en Tunisie.
    Durée: 5 Mois
Technologies utilisées: WordPress, Html5, css, php5, Javascript, bootstrap.
    
    `,
    period: '02/2018-06/2018',
  },
  {
    title: 'Stage été',
    company: 'Tunisie télécom',
    description: `
    Conception et réalisation d’une application de gestion des stagiaires en VB.net.
    Durée: 1 Mois
    Technologies utilisées: Vb. Net,Mysql.`,
    
      period: '06/2017-07/2017',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Institut Supérieur dInformatique Ariana',
    qualification: 'DIPLÔME NATIONAL EN INGÉNIEURIE DU DÉVÉLOPPEMENT DE LOGICIEL',
    period: '2018-2020',
  },
  {
    institution: 'Institution 2L’institut supérieur d’informatique et de techniques de communication',
    qualification: 'LICENCE APPLIQUÉE EN TECHNOLOGIES DU MULTIMÉDIA ET DÉVELOPPEMENTWEB',
    period: '2015-2018',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'React', iconClass: 'fa-react' },
  { name: 'NodeJS', iconClass: 'fa-node-js' },
  { name: 'Wordpress', iconClass: 'fa-wordpress' },
  { name: 'NPM', iconClass: 'fa-npm' },
  
];

const SKILLS = ['Créativité', 'Sociabilité', 'Autonomie'];

const PORTFOLIO = {
  introParagraphs : [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification de participation "nuit dinfo ISITCOM 2017"',
  'Certification de participation "nuit dinfo ISITCOM 2019"',
  
  
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
      url: `https://github.com/amal-ben-khelifa`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://www.linkedin.com/in/ben-khelifa-amel-7835661a0/`,
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
