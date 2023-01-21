import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import Links from "./links";
import Skills from "./skills";

const Resume = () =>{

    return(
        <Fragment>

            <div className="resumeWrapper">
                <br/><br/>
                <div className="resumeArea">
                    
                    <Header />
                    <Skills />
                    <Experience />
                    <Education />
                    <Links />

                </div>
                <br/><br/>
            </div>

        </Fragment>
    );

}

export default Resume;

