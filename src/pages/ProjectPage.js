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
            <img src={curProject.image_main} alt="project example" />
            <h1>{curProject.name}</h1>
            <h3>{curProject.subHeading}</h3>
            {(curProject.project_link !== null) && <a className="projectLink" href={curProject.project_link} target="_blank" rel="noopener noreferrer">{curProject.project_link}</a>}
            <p>{curProject.description}</p>
            <img src={curProject.image_main} alt="project example" />
            <img src={curProject.image_main} alt="project example" />
        </ProjectWrapper>
    )
}

export default ProjectPage;

const ProjectWrapper = styled.div`
    max-width: 1500px;
    margin: 0 50px;

    img {
        width: 100%;
    }

    h1 {
        margin: 10px 0 0 0;
    }
    h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        color: var(--secondary-text-color);
    }
    .projectLink {
        color: var(--accent-color);
        margin: 0;
    }
    p {
        font-size: 14px;
    }
`;

const BackLink = styled(Link)`
    width: 100%;
    display: inline-block;
    margin: 20px 0;
    padding: 5px 0 0 0;
    text-decoration: none;
    color: var(--secondary-text-color);
    border-bottom: 1px solid var(--secondary-text-color);
`;