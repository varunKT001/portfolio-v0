import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer-info'>
      <a
        href='https://github.com/varunKT001/personal-portfolio'
        target='_blank'
        rel='noreferrer'
        className='fancy-link line-height-175'
      >
        Designed and build with <FaHeart /> by Varun Kumar Tiwari
      </a>
    </div>
  );
}
