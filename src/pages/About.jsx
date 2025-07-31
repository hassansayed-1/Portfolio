import { useEffect, useState } from 'react';
import Header2 from '../components/1-header/Header2'
import Footer from '../components/5-footer/Footer'
import { HelmetProvider, Helmet } from "react-helmet-async"
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
            <HelmetProvider>
                <Helmet>
                    <title>About</title>
                    <meta name="description" content="About Hassan Sayed" />
                </Helmet>
                <Header2 />
                <div
                style={{
                    minHeight: "81vh", // Adjust as needed
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h1 style={{ color: "var(--title)", textAlign: "center", margin: 0 }}>
                    Coming soon........!
                </h1>
            </div>
                <Footer />

                <a href="#up" style={{opacity: showScroll? "1": "0", transition: "1npms"}}>
                    <button className='scroll2top icon-keyboard_arrow_up'></button>
                </a>
            </HelmetProvider>
            
      
        </div>
    )
}
