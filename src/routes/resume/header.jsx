import React, {Fragment, useEffect, useState} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () =>{

    return(
        <Fragment>

            <div className="row">
                <div className="oneFifth">
                    <img src="./assets/hero.jpg" alt="profile" className="heroImg" />
                </div>
                <div className="fourFifth">
                    <p className="address">
                        <a href="tel:7348830375">+917348830375</a>
                        <a href="mailto:shivendrasaurav@gmail.com">shivendrasaurav@gmail.com</a>
                    </p>
                    <p className="name">
                        Shivendra Saurav, Full Stack Developer
                    </p>
                    <p className="bio">
                        Full Stack Developer with MERN, PERN, and JamStack experience. Led the development of a project for a coffee producer that was deemed "gold standard" by the client. well acquainted with the aspects of UI/UX design and responsible for the design of all projects in the portfolio showcase.
                    </p>
                </div>
            </div>

        </Fragment>
    );

}

export default Header;

