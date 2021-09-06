import React from 'react';
import { languages } from '../data';
import Submenu from './Submenu';
import { FaStackOverflow } from 'react-icons/fa';
import { useGlobalContext } from '../context';

export default function TechStack() {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const containerRef = React.useRef(null);

  return (
    <section className='techstack' ref={containerRef}>
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
                openSubmenu(
                  e,
                  { name: language.name, desc: language.desc },
                  containerRef
                )
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
