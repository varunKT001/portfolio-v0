import React from 'react';

export default function Submenu({ text }) {
  return (
    <div className='submenu'>
      <h4 className='submenu-heading'>{text.name}</h4>
      <p className='submenu-desc'>{text.desc}</p>
    </div>
  );
}
