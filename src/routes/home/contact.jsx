import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () =>{
        
    useEffect(()=>{
//        console.log("lol");
    }, [])

    return(
        <Fragment>

            <div id="contact">
                    <p className="title ta_center text-green">Get In Touch</p>
                    <p className="subtitle ta_center text-warm">
                        Adept in working with other professionals to achieve goals and solve problems together
                    </p>
                    <div className="buttons">
                        <a className="mailBtn" href="mailto:shivendrasaurav@gmail.com" target="_blank" referrer="no-referrer">Drop an Email</a>
                        <a id="resumeBtn" className="mailBtn" href="https://docs.google.com/document/d/1CzQTMW5k6CpvzPTSyxjlXEr_-vrwjSpUWgncHYoojiw/edit?usp=sharing" target="_blank" referrer="no-referrer" download>Download CV</a>
                    </div>
                    <p className="subtitle ta_center text-warm">
                        Know me better through my social media handles
                    </p>
                    <div className="socials">
                        <a href="https://github.com/shivendrasaurav" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/shivendrasaurav/" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191" target="_blank"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com/c/thecodedrop" target="_blank"><i className="fab fa-youtube"></i></a>
                        <a href="https://twitter.com/ShivendraSaurav" target="_blank"><i className="fab fa-twitter"></i></a><br/><br/>
                    </div>
                </div>
            
        </Fragment>
    );

}

export default Contact;
