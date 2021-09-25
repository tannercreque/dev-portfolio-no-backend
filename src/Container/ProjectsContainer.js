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
            {renderProjects} Render
        </div>
    )
}
export default ProjectsContainer;
