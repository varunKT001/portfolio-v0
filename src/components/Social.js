import React from 'react';
import { socials } from '../data';

export default function Social() {
  return (
    <aside className='social'>
      <div className='social-container'>
        {socials.map((social, index) => {
          return (
            <a
              key={index}
              className='social-icon'
              href={social.url}
              target='_blank'
              rel='noreferrer'
            >
              {social.icon}
            </a>
          );
        })}
      </div>
      <div className='verticle-line'></div>
    </aside>
  );
}
