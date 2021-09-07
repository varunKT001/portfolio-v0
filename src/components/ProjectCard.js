import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import LanguageIcon from './LanguageIcon';

export default function ProjectCard({
  project,
  stackList,
  reverse,
  containerRef,
}) {
  return (
    <div
      className='project-card'
      style={{
        flexDirection: `${reverse ? 'row-reverse' : 'row'}`,
      }}
    >
      <div
        className='project-card-img'
        style={{ transform: `${reverse ? 'translateX(5rem)' : ''}` }}
      >
        <img src={project.image} alt='' />
      </div>
      <div className='project-card-info'>
        <h6 className='project-card-title-featured'>featured project</h6>
        <h1 className='project-card-title'>{project.name}</h1>
        <span className='project-card-links'>
          <a href={project.site_url} target='_blank' rel='noopener noreferrer'>
            <BsBoxArrowUpRight />
          </a>
        </span>
        <span className='project-card-links'>
          <a
            href={project.github_url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </span>
        <p className='project-card-text'>{project.desc}</p>
        <div className='stack-container'>
          <h3>Tech stack used : </h3>
          {stackList.map((language, index) => {
            return (
              <LanguageIcon
                key={index}
                language={language}
                containerRef={containerRef}
                cardIcon={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
