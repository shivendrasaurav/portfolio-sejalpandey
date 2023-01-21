import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./hero";
import Stacks from "./stack";
import Projects from "./projects";
import Contact from "./contact";

const Portfolio = () =>{

    return(
        <Fragment>

            <Hero/>
            <Stacks />
            <Projects />
            <Contact />

            <div className="bgmPlayer" style={{display: 'none'}}>
                <video controls={true} autoPlay={false} name="media" id="bgmNoir" loop={true}>
                    <source src="./assets/bgm.mp3" type="audio/mpeg" />
                </video>
            </div>

        </Fragment>
    );

}

export default Portfolio;

