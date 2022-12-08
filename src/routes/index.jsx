import React, {Fragment, useEffect, useState} from "react";
import projects from "../api/AllData.json";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Index = () =>{
    
    /*==============================================================*/

    var final_hex;

    function randomNumber(min, max) {  
        return Math.random() * (max - min) + min; 
    }

    function randombg(id){
        var a = randomNumber(125, 255);       //Red
        var b = randomNumber(125, 255);       //Green
        var c = randomNumber(125, 255);       //Blue
    
        var sum= a+b+c;
        var background="rgb("+ a + ", " + b + ", " + c + ")";
    
        if(sum>=455){
            var bglist = document.getElementById(id);
            bglist.style.color = ("#010101")
        }
        else{
            var bglist = document.getElementById(id);
            bglist.style.color = ("#fcfcfc")
        }
    
        var bglist = document.getElementById(id);
        bglist.style.backgroundColor = (background);
    }
    
    const rbcg = () => {
    
            let items = document.querySelectorAll(".itemPortrait");
            let iLen = items.length;
    
            for(let i=0; i<iLen-1; i++){
                var a = randomNumber(125, 255);       //Red
                var b = randomNumber(125, 255);       //Green
                var c = randomNumber(125, 255);       //Blue
            
                var sum= a+b+c;
                var bg="rgb("+ a + ", " + b + ", " + c + ")";
            
                if(sum>=455){
                    items[i].style.color = ("#010101")
                }
                else{
                    items[i].color = ("#fcfcfc")
                }
            
                items[i].style.backgroundColor = bg;
            }
    
      }
    
    /*==============================================================*/

    
    const root = document.getElementById("root")
    let oldScrollVal = 0;

    root.addEventListener('wheel', (e =>{
        let x = e.deltaY;
        let showcase = root;
        if(oldScrollVal>-125 && oldScrollVal<4125){
            showcase.scrollBy(x, 0)
            oldScrollVal=x;
        }
        else if(oldScrollVal>4000){
            oldScrollVal = 4000
        }
        else if(oldScrollVal<0){
            oldScrollVal = 0
        }
    }))
    
    useEffect(()=>{
        rbcg();
    }, [])


    return(
        <Fragment>
                    <div className="itemWrapper itemLandscape cover">
                        <div className="item">
                            <br/><br/><br/>
                            <p className="tags">I am</p>
                            <p className="jumbotron name">SHIVENDRA</p>
                            <p className="jumbotron name">SAURAV</p>
                            <p className="tags">UI/UX Designer. Developer.</p>
                        </div>
                    </div>

                    {projects.map(
                        project => (
                            <div className={"itemWrapper " + project.class} key={project.title}>
                                <div className="item">
                                    <img className="thumbnail" src={project.img} alt={project.title}></img>
                                    <h2>{project.title}</h2>
                                    <h1>{project.type}</h1>
                                    <div className="links">
                                        <a href={project.rel} target="_blank" referrer="no-referrer">Visit</a>&nbsp;&nbsp;
                                        <a href={project.ghrel} target="_blank" referrer="no-referrer"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        )
                    )}

                    <div className="itemWrapper itemPortrait contactus">
                        <div className="item">
                            <h1>I am a full stack developer with a passion for creating beautiful and intuitive user interfaces. 
                                I have a strong background in web development and have worked on a wide range of projects. 
                                I am currently working as Senior Software Engineer at LTIMindtree.
                            </h1>
                            <h2>Like my Work</h2>
                            <a href="mailto:shivendrasaurav@gmail.com" target="_blank" referrer="no-referrer">Drop an Email</a>
                            <div className="socials">
                                <a href="https://github.com/shivendrasaurav" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://www.instagram.com/shivendrasaurav/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://in.linkedin.com/in/shivendra-saurav-80a8ba191" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.youtube.com/c/thecodedrop" target="_blank"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

        </Fragment>
    );

}

export default Index;
