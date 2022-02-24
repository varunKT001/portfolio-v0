import React from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  const [submenuText, setSubmenuText] = React.useState('');
  const [location, setLocation] = React.useState({});

  function openSubmenu(e, text, containerRef) {
    let { left, bottom, right } = e.target.getBoundingClientRect();
    let subt = containerRef.current.getBoundingClientRect().left;
    let leftCordinate = `${(left + right) / 2 - subt - 105}px`;
    let topCordinate = `${bottom + window.scrollY + 20}px`;
    setIsSubmenuOpen(true);
    setSubmenuText(text);
    setLocation({ left: leftCordinate, top: topCordinate });
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        submenuText,
        location,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
