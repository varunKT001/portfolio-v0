import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiHeroku,
} from 'react-icons/si';

const navLinks = [
  {
    name: 'home',
    url: '#',
  },
  {
    name: 'about',
    url: '#',
  },
  {
    name: 'projects',
    url: '#',
  },
  {
    name: 'contact',
    url: '#',
  },
];

const themes = [
  {
    name: 'blue',
    color: '#2a93ec',
  },
  {
    name: 'magenta',
    color: '#ff00ff',
  },
  {
    name: 'orange',
    color: '#ff9f00',
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
    url: 'https://github.com/varunKT001/',
    icon: <FaFacebookF />,
  },
  {
    name: 'linkedin',
    url: 'https://github.com/varunKT001/',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'instagram',
    url: 'https://github.com/varunKT001/',
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
    desc: 'PostgreSQL is an advanced, enterprise class open source relational database that supports both SQL and JSON querying. It is used as the primary data store or data warehouse for many web, mobile, application.',
  },
  {
    name: 'expressjs',
    icon: (
      <p className='flex-center pd-0 mg-0 tf-y-5' width='36' height='36'>
        ex
      </p>
    ),
    color: '#ffffff',
    desc: 'The primary use of Express is to provide server-side logic for web and mobile applications, and as such it is used all over the place.',
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
];

export { navLinks, themes, socials, languages };
