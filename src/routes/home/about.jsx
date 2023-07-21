import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () =>{

    return(
        <Fragment>
            
            <div id="about">
                <p className="ta_center title text-green">About Me</p>
                <p className="ta_center subtitle text-warm">I do magic with my hands, keyboard and ide</p>
                <p className="ta_center paragraph text-white">
                    I am a Full Stack Developer who knows how to express a great product using a unique design language, animations and craft which makes every experience a rich and unique story for the user.<br/>
                    From canvas to code, I orchestrate and create pwas, static websites, spas and api endpoints to complete end to end functionality of every website.
                </p>
                <div className="stats">
                    <div className="stat text-warm">
                        <p className="num">8</p>
                        <p className="info">projects completed</p>
                    </div>
                    <div className="stat text-green">
                        <p className="num">2200+</p>
                        <p className="info">open source contributions</p>
                    </div>
                    <div className="stat text-warm">
                        <p className="num">2</p>
                        <p className="info">years experience</p>
                    </div>
                </div>
            </div>

        </Fragment>
    );

}

export default About;

