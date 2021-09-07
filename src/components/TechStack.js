import React from 'react';
import { languages } from '../data';
import { FaStackOverflow } from 'react-icons/fa';
import LanguageIcon from './LanguageIcon';

export default function TechStack() {
  const containerRef = React.useRef(null);

  return (
    <section className='techstack' ref={containerRef}>
      <div className='techstack-header'>
        <FaStackOverflow /> Tech Stack
        <div className='horizontal-line'></div>
      </div>
      <div className='techstack-languages'>
        {languages.map((language, index) => {
          return (
            <LanguageIcon
              key={index}
              language={language}
              containerRef={containerRef}
              style={{ margin: '5px' }}
            />
          );
        })}
      </div>
    </section>
  );
}
