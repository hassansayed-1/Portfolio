import ReactDom from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router"
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Articles from "./pages/Articles.jsx"
import Experiences from "./pages/Experiences.jsx"
// import Speaking from "./pages/Speaking.jsx"
import Uses from "./pages/Uses.jsx"
import ProjectDetails from "./components/3-main/ProjectDetails.jsx"; 
import * as seviceWorkerRegistration from "../public/serviceWorkerRegistration.js"

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Experiences" element={<Experiences />} />
      {/* <Route path="/Speaking" element={<Speaking />} /> */}
      <Route path="/Uses" element={<Uses />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>
);

seviceWorkerRegistration.register();
