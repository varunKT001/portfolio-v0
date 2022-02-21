import React from 'react';
import { IoIosApps } from 'react-icons/io';
import ProjectCard from './ProjectCard';
import { languages, projects } from '../data';

export default function Projects() {
  const containerRef = React.useRef(null);
  return (
    <section className='projects' id='projects' ref={containerRef}>
      <div className='techstack-header'>
        <IoIosApps /> Projects
        <div className='horizontal-line'></div>
      </div>
      <div className='projects-container'>
        {projects
          .filter((project) => project.featured === true)
          .map((project, index) => {
            const stackList = project.stack.map((item) => {
              const language = languages.find((x) => x.name === item);
              return language;
            });
            return (
              <ProjectCard
                key={index}
                project={project}
                stackList={stackList}
                containerRef={containerRef}
                reverse={index % 2 !== 0 ? true : false}
              />
            );
          })}
      </div>
    </section>
  );
}
