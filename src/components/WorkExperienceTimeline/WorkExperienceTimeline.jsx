import React from 'react';
import uniqid from 'uniqid'
import './WorkExperienceTimeline.css';
import { experiences } from '../../portfolio'

const WorkExperienceTimeline = () => {
  // Sample work experience data
  if (!experiences.length) return null  

  return (
    <section className='section workexp' id='workexp'>
    <div className='work-experience-timeline'>
      {/* <h2>Work Experience</h2> */}
      <h2 className='section__title'>Work Experience</h2>
      <div className='timeline'>
        {experiences.map((experience) => (
          <div key={uniqid()} className='timeline-item'>
            <div className='timeline-content'>
              <div className='title-locatn'>
                <div className='exp-title'>
                    <h3>{experience.title} | {experience.company}</h3>
                </div>
                <div className='exp-locatn'>
                    <p>{experience.location}</p>
                </div>
              </div>
              <div className='overvw-duratn'>
                <div className='overvw'>
                    <h5>{experience.overview}</h5>
                </div>
                <div className='duratn'>
                    <p>{experience.duration}</p>
                </div>
              </div>
              
              <br/>

              <ul className='responsibilities'>
                {experience.responsibilities.map((responsibility) => (
                  <li key={uniqid()}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default WorkExperienceTimeline;
