import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = () =>{

    var clippers = ['Full Stack Developer', 'UI / UX Designer', 'Content Creator', 'eSports Player'];
    const [heroClip, setHeroClip] = useState('Full Stack Developer');
    var clipIndex = 0;

    const heroClipShow = () => {
        setHeroClip(clippers[clipIndex]);
        if(clipIndex == 3)
            clipIndex=0;
        else{
            clipIndex++;
        }
//        console.log(clipIndex);
        setTimeout(() => {
            heroClipShow();
        }, 2800);
    }

    const goNoir = () => {
        let btn = document.getElementById("noirBtn");
        if(btn.innerText == "Go Noir"){
            btn.innerText = "Back to Color";
            document.getElementById('root').style.filter = "grayscale(100%)";
            document.getElementById('bgmNoir').play();
        }
        else{
            btn.innerText = "Go Noir";
            document.getElementById('root').style.filter = "grayscale(0%)";
            document.getElementById('bgmNoir').pause();
        }
    }

    useEffect(()=>{
        heroClipShow();
    }, [])

    return(
        <Fragment>
                      
            <div id="hero">
                <div className="wrapper large12 medium12 small12">
                    <div className="flexCenter columns lg-4 md-3 sm-9 frostInverted">
                        <div className="large8 medium10 small12">
                            <p className="subTitle">
                                Shivendra Saurav
                            </p>
                            <img className="fullCrop" src="./assets/hero.jpg" />
                            <p className="label">
                                Senior Software Enginner, LTIMindtree
                            </p>
                        </div>
                    </div>
                    <div className="flexCenter flexCenterVert columns lg-5 md-6 sm-9">
                        <p className="subTitle">I am a</p>
                        <p className="jumbotron">{heroClip}</p>
                        <button id="noirBtn" onClick={goNoir}>Go Noir</button>
                    </div>
                </div>
            </div>
              
            <div id="navigation">
                <div className="pivot_menu columns large12 medium12 small12 primary_inverted">
                    <a className="pivot_button" href="#">Shivendra Saurav</a>
                    <a className="pivot_button right notPhone" href="#contact">Let's Talk</a>
                    <a className="pivot_button right notPhone" href="#projects">Projects</a>
                    <a className="pivot_button right notPhone" href="#stacks">Stacks</a>
                    <a className="pivot_button right notPhone" href="#hero">Hero</a>
                    <a className="pivot_button right onlyPhone" href="#hero"><i className="fa-solid fa-bars"></i></a>
                </div>
            </div>
            
        </Fragment>
    );

}

export default Hero;