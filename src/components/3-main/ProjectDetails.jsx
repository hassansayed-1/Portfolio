import { useParams } from "react-router";
import { allProjects } from "./allProjects";
import { useEffect, useState } from 'react';
import Header2 from '../1-header/Header2';
import Footer from '../5-footer/Footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;
  useEffect(() => {
    window.addEventListener(("scroll"), () => {
        if(window.scrollY > 300) setshowscroll(true);
        else setshowscroll(false);
    })
  },[])
      
    const [showScroll, setshowscroll] = useState(false);
  return (
    <div id='up' className='container'>
        <Header2 />
    <div
      style={{
        // textAlign: "center",
        marginTop: "2rem",
        // background: "var(--background)",
        // color: "var(--title)",
        minHeight: "78vh",
        // transition: "background 0.3s, color 0.3s"
      }}
    >
        <h1 style={{ color: "var(--title)", marginTop: "1rem" }}>
        {project.projectTitle}
      </h1>
      <img
        src={project.imgPath}
        alt="image_error"
        width={400}
        style={{
          borderRadius: "12px",
        //   boxShadow: "0 4px 24px var(--shadow)",
        //   background: "var(--card-bg)"
        }}
      />
      
      {/* Add more details here if needed */}
    </div>
    <Footer />

    <a href="#up" style={{opacity: showScroll? "1": "0", transition: "1npms"}}>
        <button className='scroll2top icon-keyboard_arrow_up'></button>
    </a>
    </div>
  );
};

export default ProjectDetails;