import Projects from '../Component/Projects'
  
function ProjectsContainer (props) {

    const renderProjects = () => {
        return props.projects.map (project => {
            return <Projects 
            project={project}
            />
        })
    }
    return(
        <div>
            {renderProjects} My name is Tanner Creque and I am a Full-Stack Software Engineer
        </div>
    )
}
export default ProjectsContainer;
