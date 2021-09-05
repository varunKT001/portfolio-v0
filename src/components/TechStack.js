import React from 'react';
import { languages } from '../data';
import Submenu from './Submenu';
import { FaStackOverflow } from 'react-icons/fa';

export default function TechStack() {
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [submenuText, setSubmenuText] = React.useState('');
  const submenuRef = React.useRef(null);
  const containerRef = React.useRef(null);

  function openSubmenu(e, text) {
    setIsSubmenuOpen(true);
    setSubmenuText(text);
    let { left, bottom, right } = e.target.getBoundingClientRect();
    let subt = containerRef.current.getBoundingClientRect().left;
    submenuRef.current.style.left = `${(left + right) / 2 - subt - 100}px`;
    submenuRef.current.style.top = `${bottom + window.scrollY + 20}px`;
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <section className='techstack' ref={containerRef}>
      <div className='submenu-container' ref={submenuRef}>
        {isSubmenuOpen && <Submenu text={submenuText} />}
      </div>
      <div className='techstack-header'>
        <FaStackOverflow /> Tech stack
        <div className='horizontal-line'></div>
      </div>
      <div className='techstack-languages'>
        {languages.map((language, index) => {
          return (
            <button
              key={index}
              className='techstack-language-icon btn-transparent'
              style={{ color: language.color }}
              onMouseOver={(e) =>
                openSubmenu(e, { name: language.name, desc: language.desc })
              }
              onMouseLeave={closeSubmenu}
            >
              {language.icon}
            </button>
          );
        })}
      </div>
    </section>
  );
}
