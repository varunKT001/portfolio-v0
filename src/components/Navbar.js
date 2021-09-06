import React from 'react';
import logo from '../logo.png';
import { navLinks } from '../data';
import { FaBars } from 'react-icons/fa';
import Theme from './Theme';

export default function Navbar({ mainRef }) {
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const navRef = React.useRef(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let navHeight = navRef.current.getBoundingClientRect().height;
    if (navIsOpen) {
      containerRef.current.style.height = `${navHeight + 5}px`;
      mainRef.current.style.filter = `blur(5px)`;
    } else {
      containerRef.current.style.height = `0px`;
      mainRef.current.style.filter = `blur(0px)`;
    }
  }, [navIsOpen]);

  function toggleNav() {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <header>
      <nav className='nav flex-space-between pd-side-large'>
        <div className='nav-header flex-space-between'>
          <div className='nav-logo'>
            <img src={logo} alt='varun' className='nav-logo-img' />
          </div>
          <Theme />
          <button
            className='nav-toggle-btn btn-transparent'
            onClick={toggleNav}
          >
            <FaBars />
          </button>
        </div>
        <div className='nav-links-container' ref={containerRef}>
          <ul className='nav-links flex' ref={navRef}>
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className='links-list-item pd-side-medium'
                  onClick={toggleNav}
                >
                  <a href={link.url} className='fancy-link'>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
