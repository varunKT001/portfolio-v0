import React from 'react';
import { themes } from '../data';

export default function Theme() {
  const [colorTheme, setColorTheme] = React.useState('blue');
  React.useEffect(() => {
    if (localStorage.getItem('theme')) {
      setColorTheme(localStorage.getItem('theme'));
      loadTheme();
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem('theme', colorTheme);
    loadTheme();
  }, [colorTheme]);

  function changeTheme(themeName) {
    setColorTheme(themeName);
  }

  function loadTheme() {
    if (colorTheme === 'magenta') {
      document.documentElement.style.setProperty('--clr-primary-1', '#330033');
      document.documentElement.style.setProperty('--clr-primary-2', '#4d004d');
      document.documentElement.style.setProperty('--clr-primary-3', '#660066');
      document.documentElement.style.setProperty('--clr-primary-5', '#990099');
      document.documentElement.style.setProperty('--clr-primary-10', '#ff00ff');
      document.documentElement.style.setProperty('--clr-primary-15', '#ff80ff');
      document.documentElement.style.setProperty('--clr-primary-17', '#ffccff');
    }
    if (colorTheme === 'blue') {
      document.documentElement.style.setProperty('--clr-primary-1', '#081d2f');
      document.documentElement.style.setProperty('--clr-primary-2', '#0d2c47');
      document.documentElement.style.setProperty('--clr-primary-3', '#113b5e');
      document.documentElement.style.setProperty('--clr-primary-5', '#19588e');
      document.documentElement.style.setProperty('--clr-primary-10', '#3f9eee');
      document.documentElement.style.setProperty('--clr-primary-15', '#aad4f7');
      document.documentElement.style.setProperty('--clr-primary-17', '#d4e9fb');
    }
    if (colorTheme === 'orange') {
      document.documentElement.style.setProperty('--clr-primary-1', '#332000');
      document.documentElement.style.setProperty('--clr-primary-2', '#4d3000');
      document.documentElement.style.setProperty('--clr-primary-3', '#664000');
      document.documentElement.style.setProperty('--clr-primary-5', '#995f00');
      document.documentElement.style.setProperty('--clr-primary-10', '#ffa919');
      document.documentElement.style.setProperty('--clr-primary-15', '#ffd999');
      document.documentElement.style.setProperty('--clr-primary-17', '#ffeccc');
    }
  }
  return (
    <aside className='theme'>
      <div className='theme-container'>
        {themes.map((theme, index) => {
          return (
            <div
              key={index}
              className='theme-circle'
              style={{ backgroundColor: theme.color }}
              onClick={() => changeTheme(theme.name)}
            ></div>
          );
        })}
      </div>
      <div className='verticle-line'></div>
    </aside>
  );
}
