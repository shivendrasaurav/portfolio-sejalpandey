import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import stackData from "../../api/StackData.json";

const Skills = () =>{

    return(
        <Fragment>

            <div id="skills">
                <p className="ta_center title text-green">Rizz</p>
                <p className="ta_center subtitle text-warm">I'm on a mission to constantly improve and expand my skills.</p>
                <div className="tools">
                    <div className="tool text-warm">
                        <p className="name">Balsamiq</p>
                        <p className="type">wire-framing</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">Figma</p>
                        <p className="type">ui/ux design</p>
                    </div>
                </div>
                
                <div className="tools">
                    <div className="tool text-warm">
                        <p className="name">React</p>
                        <p className="type">with vite</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">Next JS</p>
                        <p className="type">vercel</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">Qwik</p>
                        <p className="type">ssr</p>
                    </div>
                </div>
                
                <div className="tools">
                    <div className="tool text-warm">
                        <p className="name">Postrgres</p>
                        <p className="type">database</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">Express</p>
                        <p className="type">apis</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">MySQL</p>
                        <p className="type">database</p>
                    </div>
                    <div className="tool text-warm">
                        <p className="name">Node</p>
                        <p className="type">runtime</p>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Skills;