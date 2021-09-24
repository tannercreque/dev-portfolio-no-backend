import React from 'react';

state = {
    project = {},
    image = {},
    description = {}
}

componentDidMount(); {
    fetch('http://localhost:3000/projects')
        .then(response => response.json())
        .then(response => console.log(response.json))
        //.then(data => this.setState({ project: data.total }))   
  }

  
export const Projects = () => {
    return (
        <div>
            
        </div>
    )
}
