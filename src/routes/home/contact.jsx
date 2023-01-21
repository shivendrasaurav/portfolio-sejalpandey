import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () =>{
        
    useEffect(()=>{
//        console.log("lol");
    }, [])

    return(
        <Fragment>

            <div id="contact">
                <div className="wrapper columns large12 medium12 small12">
                    <div className="flexCenter flexCenterVert lg-5 md-6 sm-9">
                        <h1 className="title">About Me</h1>
                        <p className="info">
                            All right people let's do this one more time. My name is Shivendra Saurav. I chrome fitted my PC and for the last few years, I have been coding a lot. I'm pretty sure you know the rest. <br />
                            You see, I started making awesome webpages, learned designing interfaces, made more webpages, learnt full stack development, became a content creator, won hackathons, spoke at DSC OMG 2020, and made it all look easy.<br />
                            Right now I'm working at LTIMindtree as a Senior Software Engineer and I'm loving every bit of it.
                        </p>
                    </div>
                    <div className="flexCenter flexCenterVert lg-4 md-3 sm-9 frostInverted right" id="talk">
                        <h1 className="title">Like my Work</h1>
                        <p className="label">
                            Adept in working with other professionals to achieve goals and solve problems together.<br/>
                        </p>
                        <p className="label">
                            With every project, I try to push my work to a new level while prioritizing quality first.<br/>
                        </p>
                        <p className="label">
                            I'm on a mission to constantly improve and expand my skills.<br/>
                        </p>
                        <p className="label">
                            Follow me on: <br/>
                        </p>
                        <div className="socials">
                            <a href="https://github.com/shivendrasaurav" target="_blank"><i className="fab fa-github"></i></a>
                            <a href="https://www.instagram.com/shivendrasaurav/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/c/thecodedrop" target="_blank"><i className="fab fa-youtube"></i></a>
                            <a href="https://twitter.com/ShivendraSaurav" target="_blank"><i className="fab fa-twitter"></i></a><br/><br/>
                            <a className="mailBtn" href="mailto:shivendrasaurav@gmail.com" target="_blank" referrer="no-referrer">Drop an Email</a>
                            <a className="mailBtn" href="mailto:shivendrasaurav@gmail.com" target="_blank" referrer="no-referrer">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Contact;