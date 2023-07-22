import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () =>{
    

    useEffect(()=>{        
        const fragmentContainer = document.getElementById('fragment-container');
        const totalFragments = 50;

        for (let i = 0; i < totalFragments; i++) {
            const fragment = document.createElement('div');
            fragment.classList.add('fragment');
            fragmentContainer.appendChild(fragment);
        }
    }, [])

    return(
        <Fragment>

            <div id="hero">
                <div id="fragment-container">
                </div>
                <div className="hero-text">
                    <p className="subtitle text-white">
                        I am
                    </p>
                    <p className="title text-white">
                        Shivendra<br/> Saurav
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