import { useParams } from "react-router-dom";
const ProjectPage = () => {
    const { project_name } = useParams();

    return(
        <>
            <h1>PROJECT</h1>
            <p>{project_name}</p>
        </>
    )
}

export default ProjectPage;