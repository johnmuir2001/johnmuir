import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="/:project_name" element={ <ProjectPage /> }></Route>
      </Routes>
    </>
  );
}

export default App;