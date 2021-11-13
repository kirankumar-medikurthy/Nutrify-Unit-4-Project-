import "./Splash.css";
import React from "react";

function SplashOne({handleStep}){
    return (<div>
        <div id="splashOneLayout">
            <div id="splashOnebox">
                <div className="brandname1">NUT<span style={{color:" #FB8612"}}>R</span>IFY</div>
                <div className="quote1">For a better Life</div>
            </div>

        <div className="NextBtn"><button onClick={handleStep}>Next</button></div>
        </div>

    </div>);
}

export {SplashOne}