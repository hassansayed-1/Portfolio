import './hero.css';
import Lottie from "lottie-react";
import developerAnimation2 from "../../../public/animation/developerAnimation2.json";



const Hero = () => {
    return (
        <section style={{gap: "2rem"}} className="hero flex">
            <div className="left">
                <div className='avatar flex'>
                    <img src="../public/me.png" alt="photo error" />
                    <div className='icon-verified'></div>
                </div>
                <div>
                    <h1>CS student and Software developer <br /> cs cyber security</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat
                         corporis minus ut, sapiente nemo est rerum, molestiae ipsum placeat hic maxime
                          expedita consequatur perspiciatis ab exercitationem, laboriosam a eius. </p>
                </div>
                <div className='icons flex'>
                    <div className='icon icon-x'></div>
                    <div className='icon icon-instagram'></div>
                    <div className='icon icon-github'></div>
                    <div className='icon icon-linkedin'></div>
                </div>
            </div>
            <div className="right">
            <Lottie className='animation1' style={{width: "130%"}} animationData={developerAnimation2}></Lottie>
            </div>
        </section>
    )
}
export default Hero;