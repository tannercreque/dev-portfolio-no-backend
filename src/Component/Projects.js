import { Component } from 'react'
import ProjectsContainer from '../Container/ProjectsContainer'
const apiUrl = 'http://localhost:3000/projects';

class Project extends Component {

    state = {
    projects: {}
    }

    componentDidMount= () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(projects => this.setState({ projects }))
    .then(console.log(this.state.projects))
    }

    render(){
        return(
            <div className="Project">
                <ProjectsContainer projects={this.state.projects} />
            </div>
        )
    }
}

export default Project;






