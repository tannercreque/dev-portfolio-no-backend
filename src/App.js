import './App.css';
import { Component } from 'react';
import ProjectsContainer from'./Container/ProjectsContainer'

class App extends Component {
  render(){
    return (
    <div className="App">
      <ProjectsContainer />
    </div>
    );
  }  
}


export default App;
