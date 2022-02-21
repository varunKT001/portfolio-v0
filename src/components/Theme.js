import React from 'react';
import { themes } from '../data';

export default function Theme() {
  const [colorTheme, setColorTheme] = React.useState('blue');

  React.useEffect(() => {
    if (localStorage.getItem('theme')) {
      setColorTheme(localStorage.getItem('theme'));
      loadTheme();
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', colorTheme);
    loadTheme();
    // eslint-disable-next-line
  }, [colorTheme]);

  function changeTheme(themeName) {
    setColorTheme(themeName);
  }
  function loadTheme() {
    const allColors = themes.find((theme) => theme.name === colorTheme);
    allColors.clrValues.forEach((item, i) => {
      if (i >= 1 && i <= 18) {
        document.documentElement.style.setProperty(
          `--clr-primary-${21 - 2 - i}`,
          `#${item.hex}`
        );
      }
    });
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
