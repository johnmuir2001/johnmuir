import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme";
import paintStroke from "../assets/images/paintStroke.png";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <NavWrapper>
            <h3 style={{backgroundImage: `url(${paintStroke})`}}>JOHN MUIR</h3>
            <RightNavSection>
                <Link to="/">WORK</Link>
                <Link to="/about">ABOUT</Link>
                <ThemeButton col={theme} onClick={() => toggleTheme()}></ThemeButton>
            </RightNavSection>
        </NavWrapper>
    )
}

export default NavBar;

const NavWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100vw;
    background-color: var(--primary-background);
    box-sizing: border-box;
    padding: 0 50px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        margin: 0;
        display: grid;
        place-items: center;
        background-size: cover;
        padding: 10px 0 4px 0;
        width: 130px;
        color: var(--primary-background);
    }
`;

const RightNavSection = styled.div`
    display: flex;
    align-items: center;

    a {
        margin: 0 20px;
        text-decoration: none;
        transform: translateY(2px);
        transition: all 0.3s;

        &:hover {
            opacity: 0.6;
        }
    }
`;

const ThemeButton = styled.div`
    height: 23px;
    width: 23px;
    background-color: var(--text-color);
    border-radius: 50%;
    cursor: pointer;
    transform: ${(props) => props.col === 'light' ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: all 0.2s;
    z-index: 10;
    margin-left: 10px;

    &::before {
        position: absolute;
        content: '';
        left: 50%;
        top: 50%;
        transform: translate(-100%, -50%);
        height: 80%;
        width: 40%;
        border-bottom-left-radius: 100px;
        border-top-left-radius: 100px;
        background-color: white;
    }
    &::after {
        position: absolute;
        content: '';
        left: 50%;
        top: 50%;
        transform: translate(5%, -50%);
        height: 80%;
        width: 40%;
        border-bottom-right-radius: 100px;
        border-top-right-radius: 100px;
        background-color: black;
    }

    &:hover + .themeToggleText {
        opacity: 1;
        transform: translateY(1px) translateX(-5px);
    }
`;