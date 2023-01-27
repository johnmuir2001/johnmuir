import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

const App = () => {

  return (
    <>
      <Routes>
        
        <Route path="/" element={ 
          <Layout> 
            <Home /> 
          </Layout> 
        }></Route>

        <Route path="/:project_name" element={ <ProjectPage /> }></Route>
      </Routes>
    </>
  );
}

export default App;