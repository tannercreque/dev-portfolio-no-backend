import React, { Component } from 'react'
import { Component } from 'react'
  
function ProjectsContainer (props) {
    const renderProjects = () => {
        return props.projects.map (project => {
            return <Project 
            key={project.id}
            project={project}
            
            />
        })
    }
}
export default ProjectsContainer;
