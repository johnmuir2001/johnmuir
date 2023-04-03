import { useContext } from "react";
import NavBar from "./NavBar";
import { ThemeContext } from "../Theme";
import styled from "styled-components";
import MobileThemeBtn from "./MobileThemeBtn";

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return(
        <PageWrap className={`${theme}`}>
            <MobileThemeBtn />
            <NavBar />
            {children}
        </PageWrap>
    )
}

export default Layout

const PageWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;