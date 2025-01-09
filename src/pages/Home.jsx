import { useEffect, useState } from 'react';
import Header from '../components/1-header/Header'
import Footer from '../components/5-footer/Footer'
import Hero from '../components/2-hero/Hero'
import Main from '../components/3-main/Main'
import Contact from '../components/4-contact/Contact'
import {Helmet, HelmetProvider} from "react-helmet-async"

export default function Home() {
  
  useEffect(() => {
    window.addEventListener(("scroll"), () => {
      if(window.scrollY > 300) setshowscroll(true);
      else setshowscroll(false);
    })
  },[])
  
  const [showScroll, setshowscroll] = useState(false);

  return (
    <div id='up' className='container'>
      <HelmetProvider>
        <Helmet>
          <title>Hassan Sayed</title>
          <meta name="description" content="Eng Hassan Sayed Hassan & Fullstack Developer & Cybersecurity Engineer" />
        </Helmet>
        <Header />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />

        <a href="#up" style={{opacity: showScroll? "1": "0", transition: "1npms"}}>
          <button className='scroll2top icon-keyboard_arrow_up'></button>
        </a>
      </HelmetProvider>
      
    </div>
  )
}
