import React, { useContext } from "react";
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import clouds from './assets/images/cloud.jpeg';
import beach from './assets/images/beach.png';
import './App.css'
import Border from './components/Border';
import { ThemeContext } from './Theme';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="App" className={`${theme}`}>
      <Border />
      <Parallax className="wrapper" pages={2}>
        <h1 className="headerText">JOHN MUIR</h1>
        <ParallaxLayer className="clouds" style={{background: `url(${clouds}) repeat-x 0 100% / 800px auto`}} speed={-0.5}></ParallaxLayer>
        <ParallaxLayer speed={-0.4}>
          <img className="beach" src={beach} alt="beach"/>
        </ParallaxLayer>
        <ParallaxLayer className="about" offset={1}>
          <h1>About</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;