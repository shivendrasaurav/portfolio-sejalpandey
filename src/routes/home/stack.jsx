import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import stackData from "../../api/StackData.json";

const Stacks = () =>{
    /*==============================================================*/

    function randomNumber(min, max) {  
        return Math.random() * (max - min) + min; 
    }
    
    const rbcg = () => {
    
            let items = document.querySelectorAll(".itemPortrait");
            let iLen = items.length;
    
            for(let i=0; i<iLen; i++){
                var a = randomNumber(155, 255);       //Red
                var b = randomNumber(155, 255);       //Green
                var c = randomNumber(155, 255);       //Blue
            
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
    
    let stacks = stackData;
    
    useEffect(()=>{
        rbcg();

        let slider = document.getElementById("stackScroll");
        slider.addEventListener('wheel', (e =>{
            e.preventDefault();
            let x = e.deltaY;
            slider.scrollBy(x, 0);
        }))
    }, [])

    return(
        <Fragment>

            <div id="stacks">
                <div className="wrapper columns large12 medium12 small12">
                    <div className="flexCenter flexCenterVert">
                        <h1 className="title">The tools and stacks I use</h1>
                        <div className="projectSlides" id="stackScroll">
                            {stacks.map(
                                stack => (
                                    <div className={"itemWrapper itemPortrait dlevel2"} key={stack.title}>
                                        <div className="item">
                                            <p className="projectTitle">{stack.title}</p>
                                            <p className="projectTags">{stack.info}</p>
                                            <div className="iconRow">
                                                {stack.iconrow.map(
                                                    icon => (
                                                        <img key={icon} src={icon} className="stackIcon" alt={stack.title} />
                                                    )
                                                )}
                                            </div>
                                        </div>
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

export default Stacks;