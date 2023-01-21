import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Education = () =>{

    return(
        <Fragment>

<div className="row">
                <div className="oneFifth">
                    <p className="title">Education</p>
                </div>
                <div className="fourFifth">
                    <p className="title">Bachelor of Technology, REVA University</p>
                    <p className="time">July 2017 - July 2021</p>
                    <ul className="pointers">
                        <li>Graduated with a specialisation in computer science and engineering.</li>
                        <li>Core member and Mentor at Google Developers Student Club, REVA University.</li>
                        <li>Organised and Participated in many events as member of Hackathon Club, REVA University</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="oneFifth">
                    <p className="title">Certifications</p>
                </div>
                <div className="fourFifth">
                    <p className="title">Full Stack Web Development with React, Coursera</p>
                    <p className="time">April 2020 - June 2020</p>
                    <ul className="pointers">
                        <li>Course by The Hong Kong University of Science and Technology.</li>
                        <li>Focuses on building Full Stack Web Applications using the MERN Stack.</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="oneFifth">
                </div>
                <div className="fourFifth">
                    <p className="title">UI/UX Design, Coursera</p>
                    <p className="time">January 2020 - March 2020</p>
                    <ul className="pointers">
                        <li>Course by The California Institute of the Arts.</li>
                        <li>Focuses on building intuitive designs for Mobile and Desktop using The Design Thinking Process.</li>
                    </ul>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Education;

