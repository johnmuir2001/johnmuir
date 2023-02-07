import styled from 'styled-components';
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

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  box-sizing: border-box;
`;