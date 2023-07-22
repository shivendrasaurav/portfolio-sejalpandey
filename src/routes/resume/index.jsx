import React, {Fragment, useEffect} from "react";
import "./resume.css"

const Resume = () =>{

    useEffect(()=>{        
        const fragmentContainer = document.getElementById('fragment-container');
        const totalFragments = 100;

        for (let i = 0; i < totalFragments; i++) {
            const fragment = document.createElement('div');
            fragment.classList.add('fragment');
            fragmentContainer.appendChild(fragment);
        }
    }, [])

    return(
        <Fragment>

            <div className="testWrapper">
                <div className="data">
                    <h1>Hello World</h1>
                </div>
                <div id="fragment-container"/>
            </div>

        </Fragment>
    );

}

export default Resume;

