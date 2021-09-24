import { Component } from 'react'

const apiUrl = 'http://localhost:3000/projects';

state = {
    projects = {},
    image = [],
    description = []
}

fetch(apiUrl)
    .then(response => response.json())
    .then(data => this.state({ projects: data.results }))  

class Project extends Component {
    render(){
        return(
            <div className="Project">

            </div>
        )
    }
}

export default Project;






