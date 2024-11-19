import React from 'react'
import Carousel from 'react-material-ui-carousel'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__carousel'>
        <Carousel
          indicators={true}
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          animation="slide"
        >
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects
