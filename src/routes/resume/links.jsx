import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Links = () =>{

    return(
        <Fragment>

            <div className="row">
                <div className="oneFifth">
                    <p className="title">Links</p>
                </div>
                <div className="fourFifth">
                    <div className="links">
                        <a href="https://github.com/shivendrasaurav">GitHub</a>
                        <a href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191">LinkedIn</a>
                        <a href="http://shivendrasaurav.vercel.app/">Portfolio</a>
                    </div>
                </div>
            </div>

            
        </Fragment>
    );

}

export default Links;

