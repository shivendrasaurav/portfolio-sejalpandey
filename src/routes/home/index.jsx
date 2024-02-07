import React, {Fragment, useEffect} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";

const Portfolio = () =>{

    const animate = (entries, observer) =>{
        entries.forEach(entry => {
            let box = entry.target;
            let visiblePercent = `${Math.floor(entry.intersectionRatio * 100)}`;
            box.className = `opc${visiblePercent}`
        });
    }

    const animateLeftToRight = (entries, observer) =>{
        entries.forEach(entry => {
            let box = entry.target;
            let visiblePercent = `${100-Math.floor(entry.boundingClientRect.y/10)}`;
            box.className = `ltr${visiblePercent}`
            if(visiblePercent>100)
                box.className = `ltr100`

        });
    }

    const animateRightToLeft = (entries, observer) =>{
        entries.forEach(entry => {
            let box = entry.target;
            let visiblePercent = `${100-Math.floor(entry.boundingClientRect.y/10)}`;
            box.className = `rtl${visiblePercent}`
            if(visiblePercent>100)
                box.className = `rtl100`
        });
    }

    const createObservers = () =>{
        let Observer;

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: []
        }

        Observer = new IntersectionObserver(animate, options)
        Observer.observe(document.getElementById('skills'))
        Observer.observe(document.getElementById('about'))
        //Observer.observe(document.getElementById('projects'))
        Observer.observe(document.getElementById('contact'))
    }

    const createEvenProjectObservers = () =>{
        let Observer;

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: []
        }

        Observer = new IntersectionObserver(animateRightToLeft, options)
        Observer.observe(document.getElementById('The Code Drop'))
        Observer.observe(document.getElementById('PokeDex'))
        Observer.observe(document.getElementById('Sejal Pandey'))
        Observer.observe(document.getElementById('REVA Hack 2020 </> App'))
    }

    const createOddProjectObservers = () =>{
        let Observer;

        let options = {
            root: null,
            rootMargin: '0px',
            threshold: []
        }

        Observer = new IntersectionObserver(animateLeftToRight, options)
        Observer.observe(document.getElementById('Fluent Design For Web'))
        Observer.observe(document.getElementById('LunaSyz'))
        Observer.observe(document.getElementById("Rukku's Coffee"))
        Observer.observe(document.getElementById('Corona Rakshak'))
    }

    const generateDynamicStyles = () => {
        let dynamicOpacityCSS = '';
        let dynamicLTRCSS = '';
        let dynamicRTLCSS = '';

        for (let x = 0; x <= 100; x++) {
          let opacity = x / 10;
          let scale = x / 1000;
          let translateY = 100 - x;
          let opcClassName = `opc${x}`;
          let ltrClassName = `ltr${x}`;
          let rtlClassName = `rtl${x}`;
          let delay = 100;
  
          dynamicOpacityCSS += `
            .${opcClassName} {
              opacity: ${opacity};
              transform: translateY(${translateY}px) scale(${0.92+scale});
              transition: ${delay}ms;
            }
          `;
  
          dynamicLTRCSS += `
            .${ltrClassName} {
              opacity: ${opacity};
              transform: translateX(${translateY}vh) scale(${0.92+scale});
              transition: ${delay}ms;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `;
  
          dynamicRTLCSS += `
            .${rtlClassName} {
              opacity: ${opacity};
              transform: translateX(-${translateY}vh) scale(${0.92+scale});
              transition: ${delay}ms;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `;
        }
        document.getElementById('generatedOpacityClasses').innerHTML = dynamicOpacityCSS;
        document.getElementById('generatedLTRClasses').innerHTML = dynamicLTRCSS;
        document.getElementById('generatedRTLClasses').innerHTML = dynamicRTLCSS;
    }

    window.onscroll = async () =>{
        createObservers();
        createEvenProjectObservers();
        createOddProjectObservers();
    }

    window.onmousemove = async (e) =>{
        const cursor = document.getElementById('cursor');
        cursor.style.position = 'fixed';
        cursor.style.top = e.y + 'px';
        cursor.style.left = e.x + 'px';
    }

    useEffect(()=>{
        generateDynamicStyles();        
    }, [])

    return(
        <Fragment>

            <Hero/>
            <About/>
            <Skills/>
            <Projects />
            <Contact />

            <div className="bgmPlayer" style={{display: 'none'}}>
                <video controls={true} autoPlay={true} name="media" id="bgmNoir" loop={false}>
                    <source src="./assets/bgm.mp3" type="audio/mpeg" />
                </video>
            </div>
            <span id='cursor'></span>

        </Fragment>
    );

}

export default Portfolio;

