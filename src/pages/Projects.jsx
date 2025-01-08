import { useEffect, useState } from 'react';
import Header from '../components/1-header/Header'
import Footer from '../components/5-footer/Footer'
import Hero from '../components/2-hero/Hero'


export default function About() {

    useEffect(() => {
        window.addEventListener(("scroll"), () => {
          if(window.scrollY > 300) setshowscroll(true);
          else setshowscroll(false);
        })
    },[])
      
    const [showScroll, setshowscroll] = useState(false);
    return(
        <div id='up' className='container'>
            <Header />
            <Hero />
            <Footer />

            <a href="#up" style={{opacity: showScroll? "1": "0", transition: "1npms"}}>
                <button className='scroll2top icon-keyboard_arrow_up'></button>
            </a>
      
        </div>
    )
}
