import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () =>{



    return(
        <Fragment>
            
            <div id="about">
                <div className="wrapper columns large12 medium12 small12">
                    <div className="flexCenter large4 medium4 small12 skillColor">
                        <h1 className="title ta_left">I can help you with</h1>
                        <ul className="items itemsLeft">
                            <li>Interface Design</li>
                            <li>User Experience</li>
                            <li>Progressive Web Apps</li>
                            <li>Single Page Applications</li>
                            <li>Android Apps</li>
                            <li>Basic SEO</li>
                        </ul>
                    </div>
                    
                    <div className="flexCenter large4 medium4 small12 statColor">
                        <h1 className="title ta_center">STATSMASTER</h1>
                        <ul className="items itemsCenter">
                            <li>Projects in Production: 8</li>
                            <li>All Time Projects: 21</li>
                            <li>GitHub Repositories : 85</li>
                            <li>Total Pull Requests : 93</li>
                            <li>Total Contributions : 2194</li>
                            <li>Lines of Code : 200K+</li>
                        </ul>
                    </div>

                    <div className="flexCenter large4 medium4 small12 skillColor">
                        <h1 className="title ta_right">I can help you with</h1>
                        <ul className="items itemsRight">
                            <li>Interface Design</li>
                            <li>User Experience</li>
                            <li>Progressive Web Apps</li>
                            <li>Single Page Applications</li>
                            <li>Android Apps</li>
                            <li>Basic SEO</li>
                        </ul>
                    </div>
                </div>
            </div>

        </Fragment>
    );

}

export default About;

