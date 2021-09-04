import React from 'react';
import { socials } from '../data';

export default function Social() {
  return (
    <aside className='social'>
      <div className='social-container'>
        {socials.map((social) => {
          return (
            <a className='social-icon' href={social.url} target='_blank'>
              {social.icon}
            </a>
          );
        })}
      </div>
      <div className='verticle-line'></div>
    </aside>
  );
}
