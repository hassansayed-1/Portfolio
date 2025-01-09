import ReactDom from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router"
import './index.css'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Articles from "./pages/Articles.jsx"
import Projects from "./pages/Projects.jsx"
import Speaking from "./pages/Speaking.jsx"
import Uses from "./pages/Uses.jsx"

const root = document.getElementById("root");


ReactDom.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Speaking" element={<Speaking />} />
      <Route path="/Uses" element={<Uses />} />
    </Routes>
  </BrowserRouter>
);
