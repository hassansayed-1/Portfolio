import { useState } from 'react';
import './main.css';
import { allProjects } from './allProjects';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "react-router";


const Main = () => {
    const [Currentstat, setCurrentstat] = useState("all");
    const [arr, setArr] = useState(allProjects);


    function clickevent(buttonCategory) {
        setCurrentstat(buttonCategory);
        const newArr = allProjects.filter((item) => {
            const arrStar = item.category.find((internalItem) => {
                return internalItem === buttonCategory;
            });
            return arrStar === buttonCategory;
        });
        setArr(newArr);
    }


    return (
        <main className='flex'>
            <div className="left flex">
                <button onClick={() => { setCurrentstat("all"); setArr(allProjects); }} className={(Currentstat === "all") ? "active" : null}>
                    all projects
                </button>
                <button onClick={() => { clickevent("frontend") }} className={(Currentstat === "frontend") ? "active" : null}>
                    Frontend
                </button>
                <button onClick={() => { clickevent("embedded") }} className={(Currentstat === "embedded") ? "active" : null}>
                    Embedded
                </button>
                <button onClick={() => { clickevent("electronics") }} className={(Currentstat === "electronics") ? "active" : null}>
                    Electronics
                </button>
            </div>
            <div className="flex right">
                {arr.map((item) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <AnimatePresence>
                            <Link to={`/project/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                exit={{ transform: "scale(0)" }}
                                transition = {{type: "spring", damping: 8, stiffness: 50}}
                                key={item.imgPath} className='card'>
                                <img width={266} src={item.imgPath} alt="image error" />
                                <div style={{ width: 266 }} className="box">
                                    <h1>{item.projectTitle}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea. Recusandae earum, commodi nihil cupiditate unde tempora suscipit alias tempore itaque mollitia eveniet rem velit ratione. Omnis ea sapiente magnam!</p>
                                    <div className="icons flex">
                                        <div className="twoicons flex">
                                            <div className="icon-link"></div>
                                            <div className="icon-github"></div>
                                        </div>
                                        <a href="" className="link flex">
                                            more
                                            <span className="icon-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                            </Link>
                        </AnimatePresence>

                    )
                })}
            </div>
        </main>
    )
}
export default Main;