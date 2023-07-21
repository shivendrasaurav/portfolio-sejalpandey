import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import projectData from "../../api/ProjectsData.json";

const Projects = () =>{
    
    const projects = projectData;

    return(
        <Fragment>

            <div id="projects">
                <p className="ta_center title text-green">The Project Showcase</p>
                <p className="ta_center subtitle text-warm">With every project, I try to push my work to a new level while prioritizing quality first.</p>
                <div className="project-wrapper">
                    {projects.map(
                        project => (
                            <div id={project.title} key={project.title}>
                                <div className={"item-wrapper"}>
                                    <div className={project.class + ' thumbnail'}>
                                        <span style={{background: `url(${project.img})`}}></span>
                                    </div>
                                    <div className="project-info">
                                        <div className="top">
                                            <p className="project-title">{project.title}</p>
                                            <p className="project-tags">{project.stack}</p>
                                        </div>
                                        <div className="bottom">
                                            <p className="project-description">{project.info}</p><br/>
                                            <a href={project.rel} target="_blank" referrer="no-referrer">
                                                Check out the project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            
        </Fragment>
    );

}

export default Projects;