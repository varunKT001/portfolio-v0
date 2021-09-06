import React from 'react';
import Navbar from './components/Navbar';
import Submenu from './components/Submenu';
import Hero from './components/Hero';
import Theme from './components/Theme';
import Social from './components/Social';
import TechStack from './components/TechStack';
import { themes } from './data';

function App() {
  const mainRef = React.useRef(null);
  return (
    <>
      <Navbar mainRef={mainRef} />
      <main className='container' ref={mainRef}>
        <Submenu />
        <Hero />
        <TechStack />
      </main>
      <footer>
        <Social />
      </footer>
    </>
  );
}

export default App;
