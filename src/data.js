import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
  FaMarkdown,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiSocketDotIo,
  SiHeroku,
  SiNetlify,
} from 'react-icons/si';

import values from 'values.js';

import bloggLogo from './images/blogg.png';
import tomperChatLogo from './images/tomperchat.png';
import sudarshanLogo from './images/sudarshan.png';
import monkStoreLogo from './images/monkstore.png';

const navLinks = [
  {
    name: 'home',
    url: '#',
  },
  {
    name: 'projects',
    url: '#projects',
  },
  {
    name: 'contact',
    url: '#contact',
  },
];

const themes = [
  {
    name: 'blue',
    color: '#2a93ec',
    clrValues: new values('#2a93ec').all(10),
  },
  {
    name: 'lightgreen',
    color: '#90EE90',
    clrValues: new values('#90EE90').all(10),
  },
  {
    name: 'pink',
    color: '#ff69b4',
    clrValues: new values('#ff69b4').all(10),
  },
  {
    name: 'silvergrey',
    color: '#C0C0C0',
    clrValues: new values('#C0C0C0').all(10),
  },
];

const socials = [
  {
    name: 'github',
    url: 'https://github.com/varunKT001/',
    icon: <FaGithub />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/people/Varun-Tiwari/100057310502325/',
    icon: <FaFacebookF />,
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/varun-tiwari-454591178',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/varuntiwari55/',
    icon: <FaInstagram />,
  },
];

const languages = [
  {
    name: 'javascript',
    icon: <SiJavascript />,
    color: '#f0db4f',
    desc: 'JavaScript is commonly used for creating web pages. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.',
  },
  {
    name: 'react',
    icon: <SiReact />,
    color: '#61DBFB',
    desc: 'React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.',
  },
  {
    name: 'nodejs',
    icon: <FaNodeJs />,
    color: '#68a063',
    desc: 'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It is used for traditional web sites and back-end API services',
  },
  {
    name: 'html5',
    icon: <SiHtml5 />,
    color: '#e34c26',
    desc: 'HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content.',
  },
  {
    name: 'css3',
    icon: <SiCss3 />,
    color: '#264de4',
    desc: 'CSS (Cascading Style Sheets) is used to style and layout web pages',
  },
  {
    name: 'postgres',
    icon: <SiPostgresql />,
    color: '#0064a5',
    desc: 'PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile application.',
  },
  {
    name: 'expressjs',
    icon: (
      <p className='flex-center pd-0 mg-0 tf-y-5' width='36' height='36'>
        ex
      </p>
    ),
    color: '#ffffff',
    desc: 'ExpressJS is a javascript library. The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.',
  },
  {
    name: 'git',
    icon: <FaGitAlt />,
    color: '#f34f29',
    desc: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
  },
  {
    name: 'github',
    icon: <FaGithub />,
    color: '#ffffff',
    desc: 'Github is a web-based platform used for version control. Git simplifies the process of working with other people and makes it easy to collaborate on projects.',
  },
  {
    name: 'heroku',
    icon: <SiHeroku />,
    color: '#6567a5',
    desc: 'Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.',
  },
  {
    name: 'netlify',
    icon: <SiNetlify />,
    color: '#00C7B7',
    desc: 'Netlify is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and static websites.',
  },
  {
    name: 'socketio',
    icon: <SiSocketDotIo />,
    color: '#ffffff',
    desc: 'Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.',
  },
  {
    name: 'markdown',
    icon: <FaMarkdown />,
    color: '#ffffff',
    desc: 'A lightweight markup language for creating formatted text using a plain-text editor.',
  },
];

const projects = [
  {
    name: 'tomper chat',
    image: tomperChatLogo,
    github_url: 'https://github.com/varunKT001/tomperchat-frontend',
    site_url: 'https://tomperchat.netlify.app/',
    desc: 'Tomper Chat is a web-based chatting application, allowing users to either chat in public rooms or make their own rooms, by providing a unique room ID. Users can also share images with other room members. Nodejs as the backend, with a React frontend, are used to emit chat messages via socketio.',
    stack: [
      'javascript',
      'react',
      'nodejs',
      'socketio',
      'css3',
      'netlify',
      'heroku',
    ],
    featured: true,
  },
  {
    name: 'tomper blogg',
    image: bloggLogo,
    github_url: 'https://github.com/varunKT001/blogg-frontend',
    site_url: 'https://tomperblogg.netlify.app/',
    desc: 'Blogg is a markdown based blogging system that lets users insert photos, videos, spreadsheets, presentations, and other content into their blogs to make it more interactive. Backend is composed of Nodejs and PostgreSQL. Additionally, the authentication and email verification of users is handled using JsonWebToken (JWT). ',
    stack: [
      'html5',
      'css3',
      'javascript',
      'markdown',
      'nodejs',
      'postgres',
      'netlify',
      'heroku',
    ],
    featured: true,
  },
  {
    name: 'sudarshan',
    image: sudarshanLogo,
    github_url: 'https://github.com/varunKT001/sudarshan',
    site_url: 'https://sudarshan.netlify.app/',
    desc: `Sudarshan an online tool allows users to alter the size of images as per their needs. The app also features an image compressor that reduces the image's size according to user preferences.`,
    stack: ['html5', 'css3', 'javascript', 'netlify'],
    featured: true,
  },
  {
    name: 'monk store',
    image: monkStoreLogo,
    github_url: 'https://github.com/varunKT001/the-monk-store',
    site_url: 'https://webkriti-the-monk-store.herokuapp.com/',
    desc: 'Monk Store is a fully featured online store that facilitates the easy purchase of gadgets like smartphones, laptops, and storage devices. Users can purchase electronic goods and even sell them. The backend is powered by Nodejs and PostgreSQL. JsonWebToken(JWT) is used for user authentication and email verification. ',
    stack: ['html5', 'css3', 'javascript', 'nodejs', 'postgres', 'heroku'],
    featured: true,
  },
];

export { navLinks, themes, socials, languages, projects };
