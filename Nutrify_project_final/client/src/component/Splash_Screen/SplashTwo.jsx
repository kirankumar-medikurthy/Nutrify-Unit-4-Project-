import React from "react";
import "./Splash.css";

function SplashTwo({handleStep}){
    return (
        <div id="SplashTwoLayout">
            <div id="SplashTwoBox"></div>
            <div id="SplashTwoInnerBox">
                <div id="SplashTwoInnerContent">Do you like to recieve notifications from Nutrify?</div>
                <div id="AllowDenyBox">
                    <button onClick={handleStep} className="Allow">Allow</button>
                    <button onClick={handleStep} className="Deny">Deny</button>
                </div>
            </div>
        </div>
    );
}
export {SplashTwo}