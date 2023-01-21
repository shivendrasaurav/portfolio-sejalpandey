import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () =>{

    return(
        <Fragment>

            <div className="row">
                <div className="oneFifth">
                    <p className="title">Skills</p>
                </div>
                <div className="fourFifth">
                    <div className="skills">
                        <a href="#">HTML/CSS</a>
                        <a href="#">JavaScript</a>
                        <a href="#">React</a>
                        <a href="#">Node JS</a>
                    </div>
                    <div className="skills">
                        <a href="#">Express JS</a>
                        <a href="#">Flutter</a>
                        <a href="#">Python</a>
                        <a href="#">MySQL</a>
                    </div>
                </div>
            </div>

            
        </Fragment>
    );

}

export default Skills;

