import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

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

export { navLinks, themes, socials };
