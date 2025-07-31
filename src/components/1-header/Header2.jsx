import { useEffect, useState } from 'react';
import './header.css';
import {NavLink} from "react-router"


export default function Header() {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");

    useEffect(() =>{
        if(theme === "light"){
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    },[theme])


    return (
        <header className='flex'>
            <NavLink to={'/'}>
                <img src="./cropped-me.png" alt="photo_error" />
            </NavLink>
            
            <nav>
                <ul className='flex'>
                <li>
                        <NavLink to={"/About"}>About
                        <span></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Articles"}>Articles
                        <span></span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Experiences"}>Experiences
                        <span></span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={"/Speaking"}>Speaking
                        <span></span>
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to={"/Uses"}>Uses
                        <span></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='flex' style={{gap: "0.5rem"}}>
                <button onClick={() => {
                    setshowModal(true)
                }} className='menu icon-menu'/>
                <button onClick={() => {
                    if(theme === "dark"){
                        localStorage.setItem("currentTheme", "light");
                        setTheme(localStorage.getItem("currentTheme"));
                    }else{
                        localStorage.setItem("currentTheme", "dark");
                        setTheme(localStorage.getItem("currentTheme"));
                    }
                }} className='moon flex'>
                    <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
                </button>
            </div>

            {showModal &&(
                <div className='fixed'>
                    <ul className='modal'>
                        <li>
                            <button className='icon-close' onClick={() => {
                                setshowModal(false)
                            }} />
                        </li>
                        <li>
                            <NavLink to={"/About"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Articles"}>Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Experiences"}>Experiences</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"/Speaking"}>Speaking</NavLink>
                        </li> */}
                        <li>
                            <NavLink to={"/Uses"}>Uses</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}