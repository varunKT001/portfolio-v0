import React from 'react';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import Hero from './components/Hero';
import Social from './components/Social';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const mainRef = React.useRef(null);
  return (
    <>
      <Navbar mainRef={mainRef} />
      <main className='container' ref={mainRef}>
        <Submenu />
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Social />
        <div className='footer-info'>
          <a
            href='https://github.com/varunKT001/personal-portfolio'
            target='_blank'
            className='fancy-link'
          >
            Designed and build with ♥ by Varun Kumar Tiwari
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
