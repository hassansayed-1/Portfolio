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
            <button onClick={() => {
                setshowModal(true)
            }} className='menu icon-menu'/>
            <div />

            <nav>
                <ul className='flex'>
                    <li>
                        <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Articles"}>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Projects"}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Speaking"}>Speaking</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Uses"}>Uses</NavLink>
                    </li>
                </ul>
            </nav>

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

            {showModal &&(
                <div className='fixed'>
                    <ul className='modal'>
                        <li>
                            <button className='icon-close' onClick={() => {
                                setshowModal(false)
                            }} />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}