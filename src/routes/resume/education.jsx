import React, {Fragment, useEffect, useState} from "react";

const Education = () =>{

    return(
        <Fragment>

                    <p className="sectionTitle">Education</p>
                    <p className="title">Bachelor of Technology - REVA University, Bengaluru</p>
                    <p className="time">July 2017 - July 2021</p>
                    <ul className="pointers">
                        <li>Graduated with a specialisation in computer science and engineering.</li>
                        <li>Core member and Mentor at Google Developers Student Club, REVA University.</li>
                        <li>Organised and Participated in many events as member of Hackathon Club, REVA University.</li>
                    </ul>
                    <p className="sectionTitle">Certifications</p>
                    <p className="title">Full Stack Web Development with React - Coursera</p>
                    <p className="time">April 2020 - June 2020</p>
                    <ul className="pointers">
                        <li>Course by The Hong Kong University of Science and Technology.</li>
                        <li>Focuses on building Full Stack Web Applications using the MERN Stack.</li>
                    </ul>
                    <p className="title">UI/UX Design - Coursera</p>
                    <p className="time">January 2020 - March 2020</p>
                    <ul className="pointers">
                        <li>Course by The California Institute of the Arts.</li>
                        <li>Focuses on building intuitive designs for Mobile and Desktop using The Design Thinking Process.</li>
                    </ul>
            
        </Fragment>
    );

}

export default Education;

