import React, { useContext } from "react";
import styled from "styled-components";
import arrow from "../assets/images/arrow.png"
import { ThemeContext } from "../Theme";

const Border = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <BorderWrapper>
            <div className='horizontal top'>
                <h3>JOHN MUIR</h3>

                <ThemeToggleWrapper>
                    <ThemeButton col={theme} onClick={() => toggleTheme()}></ThemeButton>
                    <p className="themeToggleText">{theme === 'light' ? 'dark' : 'light'} mode</p>
                </ThemeToggleWrapper>
        
            </div>
            <div className='horizontal bottom'>
                <ScrollIcon src={arrow} alt='arrow pointing down'></ScrollIcon>
            </div>
            <div className='vertical left'></div>
            <div className='vertical right'></div>
        </BorderWrapper>
    )
}

export default Border;

const BorderWrapper = styled.div`
    & > div {
        background-color: var(--primary-background);
        position: fixed;
        box-sizing: border-box;
        z-index: 10;
    }

    .horizontal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        height: 40px;
        width: 100vw;

        h3 {
            font-weight: 900;
            transform: translateY(2px);
            color: var(--accent-color);
        }
    }
    .top, .left {
        top: 0;
        left: 0;
    }
    .bottom {
        bottom: 0;
        left: 0;
    }

    .vertical {
        padding: 40px 0;
        height: 100vh;
        width: 40px;
    }
    .right {
        top: 0;
        right: 0;
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
    height: 19px;
    width: 19px;
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