import React from 'react'
import ProjectItem from '../components/ProjectItem' 
import '../styles/Project.css'
import {ProjectList} from '../helpers/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1> My Projects </h1>
      <div className='projectList'>
     {ProjectList.map((projectt, index)=>{
      return <ProjectItem id={index} name={projectt.name} image={projectt.image}/>
     })}
    
      </div>
    </div>
  )
}

export default Projects