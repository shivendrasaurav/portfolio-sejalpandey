import React, {Fragment, useEffect, useState} from "react";
import Header from "./header";
import Experience from "./experience";
import Education from "./education";
import Links from "./links";
import Skills from "./skills";
import Expertise from "./expertise";

const Resume = () =>{

    return(
        <Fragment>

            <div className="resumeWrapper">
                <br/><br/>
                <div className="resumeArea">
                    
                    <Header />
                    <div className="row">
                        <div className="fourFifth">
                            <Experience />
                            <Education />
                        </div>
                        <div className="oneFifth">
                            <Skills />
                            <Expertise />
                            <Links />
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>

        </Fragment>
    );

}

export default Resume;

