import './hero.css';
import Lottie from "lottie-react";
import developerAnimation2 from "../../../public/animation/developerAnimation2.json";



export default function Hero() {
    return (
        <section style={{gap: "2rem"}} className="hero flex">
            <div className="left">
                <div className='avatar flex'>
                    <img src="./cropped-me.png" alt="photo error" />
                    <div className='icon-verified'></div>
                </div>
                <div>
                    <h1>Software developer, Fullstack developer and Cybersecurity Engineer</h1>
                </div>
                <div>
                    <p>I&apos;m Hassan, a fullstack developer and cybersecurity engineer. I&apos;m studying penetration testing now and I plan to work as a bughunter in the future.</p>
                </div>
                <div className='icons flex'>
                    <a href='https://web.facebook.com/profile.php?id=61561180268593' target='_blank' className='icon icon-facebook'></a>
                    <a href='https://www.linkedin.com/in/hassansayed1' target='_blank' className='icon icon-linkedin'></a>
                    <a href='https://www.github.com/hassansayed-1' target='_blank' className='icon icon-github'></a>
                    <a href='https://x.com/hassansayed02' target='_blank' className='icon icon-x'></a>
                    {/* <a href='' className='icon icon-instagram'></a> */}
                </div>
            </div>
            <div className="right">
            <Lottie className='animation1' style={{width: "130%"}} animationData={developerAnimation2}></Lottie>
            </div>
        </section>
    )
}
