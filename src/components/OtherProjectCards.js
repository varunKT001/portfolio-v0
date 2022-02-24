import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { IoApps } from 'react-icons/io5';
import { projects } from '../data';
import Tag from './Tag';

const maxLimit = 3;

const OtherProjectCards = () => {
  const [buttonText, setButtonText] = useState('show all');

  // eslint-disable-next-line
  const [unFeaturedProjects, setUnFeaturedProjects] = useState([
    ...projects.filter((item) => item.featured === false),
  ]);

  const [otherProjects, setOtherProjects] = useState([
    ...projects.filter((item) => item.featured === false).slice(0, maxLimit),
  ]);

  const handleClick = () => {
    if (otherProjects.length <= maxLimit) {
      setOtherProjects((prev) => {
        return [...unFeaturedProjects];
      });
      setButtonText('show less');
    } else {
      setOtherProjects((prev) => {
        return [...unFeaturedProjects.slice(0, maxLimit)];
      });
      setButtonText('show all');
    }
  };

  return (
    <section className='other-projects'>
      <div className='other-projects-header'>
        <h1>other projects</h1>
      </div>
      <div className='other-projects-container'>
        {otherProjects.map((item, index) => {
          return (
            <div key={index} className='card'>
              <div className='face face1'>
                <div className='content'>
                  <h2>{item.name}</h2>
                  <div className='other-projects-card-links'>
                    <span className='project-card-links'>
                      <a
                        href={item.site_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <BsBoxArrowUpRight />
                      </a>
                    </span>
                    <span className='project-card-links'>
                      <a
                        href={item.github_url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </span>
                  </div>
                  <p>{item.desc}</p>
                  <div className='stack'>
                    {item.stack.map((stack, index) => {
                      return <Tag key={index} label={stack} />;
                    })}
                  </div>
                </div>
              </div>
              <div className='face face2'>
                <IoApps />
                <h2>{item.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
      {unFeaturedProjects.length > maxLimit && (
        <button
          className='primary-btn other-projects-show-btn'
          onClick={handleClick}
        >
          <p>{buttonText}</p>
        </button>
      )}
    </section>
  );
};

export default OtherProjectCards;
