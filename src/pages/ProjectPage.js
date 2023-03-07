import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../ProjectWork";
import styled from "styled-components";
import LoadingPage from "./LoadingPage";

const ProjectPage = () => {
    const { project_name } = useParams();
    const [curProject, setCurProject] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        projects.forEach((project) => {
            if(project.url === project_name) {
                setCurProject(project)
                setLoading(false);
            }
        })
    }, [project_name])

    if(loading){
        return(
            <LoadingPage />
        )
    }

    return(
        <ProjectWrapper>
            <BackLink to="/"> &#x3c; back to works</BackLink>
            <h1>{curProject.name}</h1>
            <h3>{curProject.subHeading}</h3>
            {(curProject.project_link !== null) && <a className="projectLink" href={curProject.project_link} target="_blank" rel="noopener noreferrer">{curProject.project_link}</a>}
            <p>{curProject.description}</p>
            {(curProject?.main?.type === "video") ? (
                <iframe src={`https://www.youtube.com/embed/${curProject.main.media}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                
            ):(
                <img src={curProject.main.media} alt="project example" />
            )}
            {/* <img src={curProject.image_main} alt="project example" />
            <img src={curProject.image_main} alt="project example" /> */}
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
    iframe {
        width: 100%;
        border: none;
        aspect-ratio: 16/9;
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