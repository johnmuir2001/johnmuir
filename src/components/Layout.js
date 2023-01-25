import { useContext } from "react";
import App from "../App";
import NavBar from "./NavBar";
import { ThemeContext } from "../Theme";

const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return(
        <div className={`${theme}`}>
            <NavBar />
            <App />
        </div>
    )
}

export default Layout