import './footer.css';
import {NavLink} from "react-router"


export default function Footer() {
    return (
        <footer className='flex'>
            <div>
                <ul className='flex'>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Articles">Articles</NavLink></li>
                    <li><NavLink to="/Experiences">Experiences</NavLink></li>
                    {/* <li><NavLink to="/Speaking">Speaking</NavLink></li> */}
                    <li><NavLink to="/Uses">Uses</NavLink></li>
                </ul>
            </div>
            <div className=''>
                <p>© 2024 Hassan Sayed. All rights reserved.</p>
            </div>
        </footer>
    )
}
