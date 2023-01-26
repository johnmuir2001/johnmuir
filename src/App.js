import { useState } from 'react';
import styled from 'styled-components';
import clouds from './assets/images/cloud.webp';
import beach from './assets/images/beach.webp';
import { projects } from "./ProjectWork";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  const [backgroundPos, setBackgroundPos] = useState("50% 50%")

  return (
    <Parallax id="App" className="wrapper">
      <h1 className="headerText">JOHN MUIR</h1>
      <ParallaxGroup>
        <ParallaxLayer className="clouds deep" style={{background: `url(${clouds}) repeat-x 0 100% / 800px auto`}}></ParallaxLayer>
        <ParallaxLayer className="back">
          <img className="beach" src={beach} alt="beach"/>
        </ParallaxLayer>
      </ParallaxGroup>
      <ParallaxGroup>
        <ParallaxLayer className="about">
          <h1>Projects</h1>
          <ProjectCardWrapper>
            {projects.map((work, index) => {
              return(
                <CardWrapper 
                  key={index}
                  image={work.image_main}
                  imagePos={backgroundPos}
                  className="card"
                  onMouseMove={(e) => setBackgroundPos(`${(((e.clientX - e.target.offsetLeft) - (e.target.offsetWidth/2))/7) + 50}% ${(((e.clientY - e.target.getBoundingClientRect().y) - (e.target.offsetHeight/2))/4) + 50}%`)}
                  onMouseOut={(e) => setBackgroundPos("50% 50%")}
                >
                  <h1>{work.name}</h1>
                </CardWrapper>
              )
            })}
          </ProjectCardWrapper>
        </ParallaxLayer>
      </ParallaxGroup>
    </Parallax>
  );
}

export default App;

const Parallax = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
`;

const ParallaxGroup = styled.div`
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;

  .back {
    transform: translateZ(-300px) scale(2);
    z-index: 3;
  }

  .deep {
    transform: translateZ(-600px) scale(3);
    z-index: 2;
  }

  .about {
    min-height: 100vh;
  }
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: red;
  box-sizing: border-box;
  padding: 50px;
`;

const CardWrapper = styled.div`
    position: relative;
    margin: 5px;
    width: calc((100% - 50px) /3);
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