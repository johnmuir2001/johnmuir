import { useContext } from "react";
import App from "../App";
import NavBar from "./NavBar";
import { ThemeContext } from "../Theme";

const Layout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`${theme}`}>
            <NavBar />
            {children}
        </div>
    )
}

export default Layout