import React from 'react';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import Hero from './components/Hero';
import Social from './components/Social';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Footer />
      </footer>
    </>
  );
}

export default App;
