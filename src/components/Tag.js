import React from 'react';
import { languages } from '../data';

const Tag = ({ label }) => {
  const language = languages.find((x) => x.name === label);
  return (
    <span className='tag' style={{ color: language.color }}>
      {language.icon}
    </span>
  );
};

export default Tag;
