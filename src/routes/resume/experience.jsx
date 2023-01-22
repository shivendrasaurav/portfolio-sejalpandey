import React, {Fragment, useEffect, useState} from "react";

const Experience = () =>{

    return(
        <Fragment>

            <p className="sectionTitle">Experience</p>
            <p className="title">Senior Software Engineer - LTIMindtree, Bengaluru</p>
            <p className="time">May 2022 - Present</p>
            <ul className="pointers">
                <li>Gathered requirements and concerns from an external client and prepared sprint plans, bot flows, and other documentation.</li>
                <li>Used design specifications and documentation to complete the development of processes within the given timeline.</li>
                <li>Reported concerns and bugs as incidents to the team lead and solved them effectively.</li>
            </ul>
            
            <p className="title">Trainee Engineer - LTIMindtree, Chennai</p>
            <p className="time">July 2021 - April 2022</p>
            <ul className="pointers">
                <li>Provided support to external clients who utilised our services and were using the automation anywhere platform.</li>
                <li>Help with the development and production of bot runners on the Automation Anywhere platform.</li>
                <li>Collection and reporting of status for each process at the end of the day, and creating incidents for processes that failed to further look into the issues that may have led to the failure.</li>
            </ul>
            
        </Fragment>
    );

}

export default Experience;

