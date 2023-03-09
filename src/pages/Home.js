import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from "../ProjectWork";
import ProjectCard from "../components/ProjectCard";

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
    <>
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
    </>
  );
}

export default Home;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  box-sizing: border-box;
`;

const FilterWrapper = styled.div`
  margin: 10px 50px;
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