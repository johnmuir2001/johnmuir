import React, { useContext } from "react";
import styled from "styled-components";
import arrow from "../assets/images/arrow.png"
import { ThemeContext } from "../Theme";

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <NavWrapper>
            <h3>JOHN MUIR</h3>
            <ThemeToggleWrapper>
                <ThemeButton col={theme} onClick={() => toggleTheme()}></ThemeButton>
                <p className="themeToggleText">{theme === 'light' ? 'dark' : 'light'} mode</p>
            </ThemeToggleWrapper>
            {/* <ScrollIcon src={arrow} alt='arrow pointing down'></ScrollIcon> */}
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
        transform: translateY(2px);
        margin: 0;
    }
`;

const ThemeToggleWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    p {
        margin: 0;
        width: 60px;
        direction: rtl;
        font-size: 9px;
        transform: translateY(1px) translateX(10px);
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.2s, transform 0.2s, color 0.2s;
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

const ScrollIcon = styled.img`
    position: absolute;
    bottom: 60px;
    left: 50%;
    height: 30px;
    filter: invert(1);
    animation: 2s arrBounce infinite;
    
    @keyframes arrBounce {
        15%, 85%{
            transform: translateY(0px);
        } 
        35%, 65% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(5px);
        }
    }
`;