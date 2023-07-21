import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () =>{
    
    const divData = Array.from({ length: 60 }, (_, index) => `Div ${index + 1}`);

    useEffect(()=>{
        //alert
    }, [])

    return(
        <Fragment>

            <div id="hero">
                <div className="hero-filter">
                    <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
                </div>
                <div className="hero-text">
                    <p className="subtitle text-white">
                        I am
                    </p>
                    <p className="title text-white">
                        Shivendra Saurav
                    </p>
                    <p className="subtitle text-green">
                        And I strive to be the best at<br/> what I do
                    </p>
                </div>
            </div>
            
        </Fragment>
    );
}

export default Hero;