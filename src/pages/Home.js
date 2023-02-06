import styled from 'styled-components';
import clouds from '../assets/images/cloud.webp';
import beach from '../assets/images/beach.webp';
import { projects } from "../ProjectWork";
import ProjectCard from "../components/ProjectCard";

const Home = () => {

  return (
    <>
      <div id="work">
        <h1>WORK</h1>
        <ProjectCardWrapper>
          {projects.map((work, index) => {
            return(
              <ProjectCard key={index} project={work}/>
            )
          })}
        </ProjectCardWrapper>
      </div>
    </>
  );
}

export default Home;

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
  max-width: 2200px;
  box-sizing: border-box;
`;