import React from 'react';
import { navLinks } from '../data';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = React.useState(false);
  const navRef = React.useRef(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let navHeight = navRef.current.getBoundingClientRect().height;
    if (navIsOpen) {
      containerRef.current.style.height = `${navHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  }, [navIsOpen]);

  function toggleNav() {
    setNavIsOpen(!navIsOpen);
  }
  return (
    <header>
      <nav className='nav flex-space-between pd-side-large'>
        <div className='nav-header flex-space-between'>
          <h3 className='nav-logo'>{`<varun/>`}</h3>
          <button
            className='nav-toggle-btn btn-transparent'
            onClick={toggleNav}
          >
            <FaBars />
          </button>
        </div>
        <div className='nav-links-container' ref={containerRef}>
          <ul className='nav-links flex' ref={navRef}>
            {navLinks.map((link) => {
              return (
                <li
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
