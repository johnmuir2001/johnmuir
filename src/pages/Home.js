import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from "../ProjectWork";
import ProjectCard from "../components/ProjectCard";
import beach from "../assets/images/beach.webp";


const Home = () => {
  const [projectFilter, setProjectFilter] = useState("all");
  const [projectList, setProjectList] = useState([...projects]);
  const [sliderPos, setSliderPos] = useState("0%");

  useEffect(() => {
    let updatedList = (projectFilter === "all") ? [...projects] : projects.filter(project => project.tags.includes(projectFilter));

    if(projectFilter === "development"){
      setSliderPos({left: "116.9px", width: "158.3px"});
    } else if (projectFilter === "animation"){
      setSliderPos({left: "275.2px", width: "126.8px"});
    } else {
      setSliderPos({left: "0px", width: "116.9px"});
    }

    setProjectList(updatedList)
  }, [projectFilter])

  return (
    <HomeWrapper>
      <header></header>
      <div id="landingContent">
        <h1>Hi, I'm John</h1>
        <h2>I am a Full-stack Web Developer and Animator</h2>
      </div>
      
      <div id="work">
        <FilterWrapper pos={sliderPos}>
          <button onClick={() => setProjectFilter("all")}>All Work</button>
          <button onClick={() => setProjectFilter("development")}>Development</button>
          <button onClick={() => setProjectFilter("animation")}>Animation</button>
          <div id="bar"></div>
        </FilterWrapper>
        <ProjectCardWrapper>
          {projectList.map((work, index) => {
            return(
              <ProjectCard key={index} project={work}/>
            )
          })}
        </ProjectCardWrapper>
      </div>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  height: calc(100vh - 50px);
  overflow-x: hidden;
  perspective: 300px;
  perspective-origin: center top;
  transform-style: preserve-3d;

  header {
    height: calc(100vh - 50px);
    background: url(${beach});
    background-size: cover;
    background-position: center center;
    position: relative;
    vertical-align: top;
    transform-origin: center top;
    transform: translateZ(-300px) scale(2);
    filter: grayscale(100%);
  }

  #landingContent {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 50px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 100px;
      margin: 0;
      color: white;
    }
    h2 {
      font-size: 40px;
    }
  }

  #work {
    box-sizing: border-box;
    min-height: calc(100vh - 50px);
    background-color: var(--primary-background);
    transform: translateZ(0);
  }
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  box-sizing: border-box;
`;

const FilterWrapper = styled.div`
  margin: 0px 50px 20px 50px;
  padding: 20px 0 0 0;
  position: relative;
  width: fit-content;

  button {
    background-color: var(--primary-background);
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 10px 20px;
  }

  #bar {
    position: absolute;
    height: 3px;
    width: ${(props) => props.pos.width};
    background-color: var(--accent-color);
    top: calc(100% - 3px);
    left: ${(props) => props.pos.left};
    transition: all 0.5s;
  }
`;