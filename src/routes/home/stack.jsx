import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import stackData from "../../api/StackData.json";

const Stacks = () =>{

    let stacks = stackData;

    const [stackTitle, setStackTitle] = useState(stackData[0].title);
    const [stackInfo, setStackInfo] = useState(stackData[0].info);
    const [stackIcons, setStackIcons] = useState(stackData[0].iconrow);

    const setStackData = (index) =>{
        setStackTitle(stacks[index].title);
        setStackInfo(stacks[index].info);
        setStackIcons(stacks[index].iconrow);
    }


    return(
        <Fragment>

            <div id="stacks">
                <div className="wrapper columns large12 medium12 small12">
                    <div className="flexCenter flexCenterVert lg-5 md-6 sm-9 primary_red">
                        <h1 className="title">Stacks and Toolsets</h1>
                        <div className="stackBtns">
                            <button onClick={() => setStackData(0)}>Figma</button>
                            <button onClick={() => setStackData(1)}>Balasmiq</button>
                            <button onClick={() => setStackData(2)}>Jamstack</button>
                            <button onClick={() => setStackData(3)}>PERN</button>
                            <button onClick={() => setStackData(4)}>MERN</button>
                            <button onClick={() => setStackData(5)}>Flutter</button>
                            <button onClick={() => setStackData(6)}>MDR</button>
                            <button onClick={() => setStackData(7)}>FDWeb</button>
                        </div>
                    </div>
                    <div className="flexCenter flexCenterVert lg-4 md-4 sm-9 primary_white right">
                        <h1 id="stackTitle" className="title" style={{borderBottom: '4px solid red'}}>{stackTitle}</h1>
                        <p id="stackInfo" className="info">{stackInfo}</p>
                        <div id="stackIcons" className="iconRow">
                            {stackIcons.map(
                                icon => (
                                    <img key={icon} src={icon} className="stackIcon" alt={stackTitle} />
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