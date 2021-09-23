import React from 'react'


componentDidMount(); {
    fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(data => console.log(data) )
        //.then(data => this.setState({ project: data.total }))   
  }

  
  
export const ProjectsContainer = () => {
    return (
        <div>
            
        </div>
    )
}
