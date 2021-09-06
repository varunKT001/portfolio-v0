import React from 'react';
import { useGlobalContext } from '../context';

export default function Submenu({ text }) {
  const { isSubmenuOpen, submenuText, location } = useGlobalContext();
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    containerRef.current.style.left = location.left;
    containerRef.current.style.top = location.top;
  });

  return (
    <div
      className={`${
        isSubmenuOpen ? 'submenu-container' : 'submenu-container hide'
      }`}
      ref={containerRef}
    >
      <div className='submenu'>
        <h4 className='submenu-heading'>{submenuText.name}</h4>
        <p className='submenu-desc'>{submenuText.desc}</p>
      </div>
    </div>
  );
}
