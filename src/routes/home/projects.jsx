import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import projectData from "../../api/ProjectsData.json";

const Projects = () =>{
    
    let projects = projectData;
    
    useEffect(()=>{
        let slider = document.getElementById("xScroll");
        slider.addEventListener('wheel', (e =>{
            e.preventDefault();
            let x = e.deltaY;
            slider.scrollBy(x, 0);
        }))
    }, [])

    return(
        <Fragment>

            <div id="projects">
                <div className="wrapper columns large12 medium12 small12">
                    <div className="flexCenter flexCenterVert">
                        <h1 className="title">The Project Showcase</h1>
                        <div className="projectSlides" id="xScroll">
                            {projects.map(
                                project => (
                                    <div className={"itemWrapper " + project.class} key={project.title}>
                                        <a href={project.rel} target="_blank" referrer="no-referrer">
                                            <img className="thumbnail" src={project.img} alt={project.title} />
                                        </a>
                                        <p className="projectTile">{project.title}</p>
                                        <p className="projectTags">{project.tags}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Projects;