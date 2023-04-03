import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Theme";

const MobileThemeBtn = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <ThemeButton col={theme} onClick={() => toggleTheme()}></ThemeButton>
    )
}

export default MobileThemeBtn;

const ThemeButton = styled.div`
    height: 23px;
    width: 23px;
    background-color: var(--text-color);
    border-radius: 50%;
    border: 10px solid var(--primary-background);
    box-shadow: ${(props) => props.col === 'light' ? '2px 2px 10px rgb(30, 30, 30)' : '-2px -2px 10px rgb(30, 30, 30)'};
    cursor: pointer;
    transform: ${(props) => props.col === 'light' ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: all 0.2s;
    z-index: 10;
    margin: 10px;
    position: absolute; 
    top: 0;
    right: 0;
    display: none;

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

    @media screen and (max-width:830px){
        & {
            display: block;
        }
    }
`;