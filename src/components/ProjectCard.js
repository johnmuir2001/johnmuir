import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
    const [backgroundPos, setBackgroundPos] = useState("50% 50%")

    return (
        <CardLink to={`${project.url}`}>
            <CardWrapper 
                image={project.image_main}
                imagePos={backgroundPos}
                className="card"
                onMouseMove={(e) => setBackgroundPos(`${(((e.clientX - e.target.offsetLeft) - (e.target.offsetWidth/2))/7) + 50}% ${(((e.clientY - e.target.getBoundingClientRect().y) - (e.target.offsetHeight/2))/4) + 50}%`)}
                onMouseOut={() => setBackgroundPos("50% 50%")}
            >
                <h1>{project.name}</h1>
            </CardWrapper>
        </CardLink>
    )
}

export default ProjectCard;

const CardLink = styled(Link)`
    width: calc(100% /3);
`;

const CardWrapper = styled.div`
    position: relative;
    background-color: red;
    background-size: auto 130%;
    background-position: ${(props) => props.imagePos};
    background-image: ${(props) => `url(${props.image})`};
    transition: all 1s cubic-bezier(.24,1.04,.79,1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 5/3;
    cursor: pointer;

    &:hover {
        background-size: auto 120%;
    }

    &::before {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: all 0.4s;
    }

    &:hover::before {
        background-color: rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: white;
        letter-spacing: 5px;
        transition: all 0.4s;
        opacity: 0;
        filter: blur(5px);
        pointer-events: none;
    }

    &:hover h1 {
        letter-spacing: 1px;
        opacity: 1;
        filter: blur(0px);
    }
`;