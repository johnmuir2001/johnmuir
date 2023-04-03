import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from "../ProjectWork";
import ProjectCard from "../components/ProjectCard";
import beach from "../assets/images/beach_bw.webp";


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
        <h1>I'm John</h1>
        <h2>A Full-stack Web Developer and Animator</h2>
      </div>
      
      <div id="work">
        <FilterWrapper pos={sliderPos}>
          <button className={projectFilter === "all" ? "active" : ""} onClick={() => setProjectFilter("all")}>All Work</button>
          <button className={projectFilter === "development" ? "active" : ""} onClick={() => setProjectFilter("development")}>Development</button>
          <button className={projectFilter === "animation" ? "active" : ""} onClick={() => setProjectFilter("animation")}>Animation</button>
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
  width: 100vw;

  header {
    height: calc(100vh - 50px);
    background: url(${beach});
    background-size: cover;
    background-position: center center;
    position: relative;
    vertical-align: top;
    transform-origin: center top;
    transform: translateZ(-300px) scale(2);
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
      color: white;
    }
  }

  #work {
    box-sizing: border-box;
    min-height: calc(100vh - 50px);
    background-color: var(--primary-background);
    transform: translateZ(0);
  }

  @media screen and (max-width:830px){
        & {
            width: 100vw;
            margin: 1px; 
            background-size: cover;
            background-position: center;
        }

        &::before {
            background-color: rgba(0, 0, 0, 0.4);
        }
        h1 {
            opacity: 1;
            filter: blur(0px);
            font-size: 13px;
        }
        header {
          background-size: auto 100%;
          background-position: 35% 50%;
        }

        #landingContent {
          align-items: flex-start;
          padding: 0 10px 0 10px;
          box-sizing: border-box;

          h1 {
            font-size: 60px;
          }
          h2 {
            font-size: 30px;
          }
        }
  }
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0px;


  @media screen and (max-width:830px){
    & {
      padding-bottom: 50px;
    }
  }
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

  @media screen and (max-width:830px){
    & {
      margin: 0;
      padding: 10px 0;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
    }

    button {
      font-size: 15px;
      padding: 6px 16px;
    }

    #bar {
      display: none;
    }

    .active {
      color: var(--accent-color);
    }
  }
`;