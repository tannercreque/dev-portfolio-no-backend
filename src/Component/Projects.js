import { Component } from 'react'

const apiUrl = 'http://localhost:3000/projects';

class Project extends Component {

    state = {
    projects: {},
    image: [],
    description: []
    }
    componentDidMount= () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => this.setState({ projects: data.results }))
    }

    render(){
        return(
            <div className="Project">
                
            </div>
        )
    }
}

export default Project;






