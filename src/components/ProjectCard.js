import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
    const [backgroundPos, setBackgroundPos] = useState("50% 50%");
    const navigate = useNavigate();

    return (
        <CardWrapper 
            image={project.thumbnail}
            imagePos={backgroundPos}
            className="card"
            onClick={() => navigate(`${project.url}`)}
            onMouseMove={(e) => setBackgroundPos(`${(((e.clientX - e.target.offsetLeft) - (e.target.offsetWidth/2))/7) + 50}% ${(((e.clientY - e.target.getBoundingClientRect().y) - (e.target.offsetHeight/2))/4) + 50}%`)}
            onMouseOut={() => setBackgroundPos("50% 50%")}
        >
            <h1>{project.name}</h1>
        </CardWrapper>
    )
}

export default ProjectCard;

const CardWrapper = styled.div`
    position: relative;
    width: calc((100vw /3) - 4px);
    background-size: auto 130%;
    background-position: ${(props) => props.imagePos};
    background-image: ${(props) => `url(${props.image})`};
    transition: background-position 1s cubic-bezier(.24,1.04,.79,1), background-size 1s cubic-bezier(.24,1.04,.79,1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 5/3;
    margin: 2px; 
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
        background-color: rgba(0, 0, 0, 0.3);
    }

    h1 {
        color: white;
        transition: all 0.4s;
        opacity: 0;
        font-size: 1.5vw;
        text-align: center;
        filter: blur(5px);
        pointer-events: none;
    }

    &:hover h1 {
        opacity: 1;
        filter: blur(0px);
    }

    @media screen and (max-width:830px){
        & {
            width: calc((100vw /2) - 2px);
            margin: 1px; 
            background-size: cover;
            background-position: center;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            background-size: cover;
        }

        &::before {
            background-color: rgba(0, 0, 0, 0.4);
        }

        &:hover::before {
            background-color: rgba(0, 0, 0, 0.4);
        }

        h1 {
            opacity: 1;
            filter: blur(0px);
            font-size: 13px;
        }
    }

    @media screen and (min-width:2050px){
        & {
            width: calc((100vw /4) - 4px);
        }
    }
    @media screen and (min-width:2750px){
        & {
            width: calc((100vw /5) - 4px);
        }
    }
`;