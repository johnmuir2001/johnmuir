import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../ProjectWork";
import styled from "styled-components";

const ProjectPage = () => {
    const { project_name } = useParams();
    const [curProject, setCurProject] = useState({})

    useEffect(() => {
        projects.forEach((project) => {
            if(project.url === project_name) {
                setCurProject(project)
            }
        })
    }, [project_name])

    return(
        <ProjectWrapper>
            <BackLink to="/"> &#x3c; back to works</BackLink>
            <img src={curProject.image_main} />
            <h1>{curProject.name}</h1>
            <h3>{curProject.subHeading}</h3>
            <p>{curProject.description}</p>
            <img src={curProject.image_main} />
            <img src={curProject.image_main} />
        </ProjectWrapper>
    )
}

export default ProjectPage;

const ProjectWrapper = styled.div`
    max-width: 1500px;

    img {
        width: 100%;
    }
`;

const BackLink = styled(Link)`
    width: 100%;
    display: inline-block;
    margin: 20px 0;
    padding: 5px 0 0 0;
    text-decoration: none;
    color: var(--secondary-text-color);
    border-bottom: 2px solid black;
`;