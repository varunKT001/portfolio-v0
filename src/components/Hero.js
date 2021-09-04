import React from 'react';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-header'>
        <p className='hero-small-heading '>Hi, I'am</p>
        <h1 className='hero-big-heading'>Varun Tiwari,</h1>
        <h1 className='hero-big-heading secondry-big-heading'>
          MERN stack web developer
        </h1>
        <p className='hero-desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          accusantium reprehenderit voluptates id dicta omnis veniam tempore
          rerum error neque laudantium recusandae sint.
        </p>
      </div>
      <button className='hero-btn primary-btn'>
        <p>Check my projects</p>
      </button>
    </section>
  );
}
