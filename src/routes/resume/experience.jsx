import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Experience = () =>{

    return(
        <Fragment>

            <div className="row">
                <div className="oneFifth">
                    <p className="title">Employment History</p>
                </div>
                <div className="fourFifth">
                    <p className="title">Senior Software Engineer, LTIMindtree</p>
                    <p className="time">May 2022 - Present</p>
                    <ul className="pointers">
                        <li>Gathered requirements and concerns from an external client and prepared sprint plans, bot flows, and other documentation.</li>
                        <li>Used design specifications and documentation to complete the development of processes within the given timeline.</li>
                        <li>Reported concerns and bugs as incidents to the team lead and solved them effectively.</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="oneFifth">
                </div>
                <div className="fourFifth">
                    <p className="title">Trainee Engineer, LTIMindtree</p>
                    <p className="time">July 2021 - April 2022</p>
                    <ul className="pointers">
                        <li>Provided support to external clients who utilised our services and were using the automation anywhere platform.</li>
                        <li>Help with the development and production of bot runners on the Automation Anywhere platform.</li>
                        <li>Collection and reporting of status for each process at the end of the day, and creating incidents for processes that failed to further look into the issues that may have led to the failure.</li>
                    </ul>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Experience;

