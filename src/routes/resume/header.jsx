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
                        +917348830375 &nbsp;&nbsp; shivendrasaurav@gmail.com
                    </p><br/>
                    <p className="name">
                        Shivendra Saurav
                    </p>
                </div>
            </div>

        </Fragment>
    );

}

export default Header;

