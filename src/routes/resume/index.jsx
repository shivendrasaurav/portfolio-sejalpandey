import React, {Fragment, useEffect} from "react";
import "./resume.css"

const Resume = () =>{
    let percentage = 0;

    const load = () =>{
        const bar = document.querySelectorAll('.progress')[0];
        console.log(bar)
        
        const measureName = 'pageLoadTime';

        if (!window.performance.getEntriesByName(measureName).length) {
        window.performance.measure(measureName, { start: 0, end: 0 });
        }

        const measures = window.performance.getEntriesByName(measureName);
        const total = measures[0].duration;
        const current = new Date() - window.performance.timeOrigin;
        //const percentage = Math.min((current / total) * 100, 100);
        percentage = percentage+10
        bar.classList.add('per' + percentage)

        if (percentage === 100) {
            setTimeout(()=>{
                const bar = document.querySelectorAll('#loading-container')[0].style.display = 'none';
            }, 2000);
        }
    }

    useEffect(()=>{
        setInterval(()=>{
            load();
        }, 20)
    }, [])

    return(
        <Fragment>

            <div className="testWrapper">
                <div className="data">
                    <h1>Hello World</h1>
                </div>
                <div id="loading-container">
                    <div className="loader">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>

        </Fragment>
    );

}

export default Resume;

