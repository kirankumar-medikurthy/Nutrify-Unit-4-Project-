import "./page.css";
import React from "react";
// import {useEffect,useState} from "react";
// let data = [];
function Page({handleStep}){
    // const [loading,setLoading] = useState(true);
    // useEffect(()=>{
    //     getCategory();
    //   },)
    // const getCategory = () => {
    //     var xhr = new XMLHttpRequest();
    //     var getUrl = "http://localhost:7878/categorys";
    //     xhr.open("GET", getUrl);
    //     xhr.send();
    //     xhr.onload = function () {
    //       var response = JSON.parse(this.response);
    //       for (var i = 0; i < response.category.length; i++) {
    //         if (i === 0) {
    //           console.log(response.category[0].catergory_name);
    //           data.push(response.category);
    //           setLoading(false);
    //         }
    //         break;
    //       }
    //     };
    //   };
    
    return(
        <>
            <div id="pageLayout">
                <div id="heading2"></div>
                <div id="header">
                    <h3 id="heading">Nutrify</h3>
                    <div id="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div> 
                <div id="bottomSection">
                    <div id="heading1">
                        <h4>Diagnosis</h4>
                    </div> 
                    <div id="inputbox">
                        <input id="inputcontent" type="text" placeholder="Type your problem area"/>
                    </div>
                    <div id="text">You can select from below categories</div>        
                    {
                        <div id="icons">
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/Eye.png" />data1</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/weight.png" />data2</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/ear.png" />data3</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/blood.png" />data4</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/bones.png" />data5</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/smile.png" />data6</div>
                             <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/breathe.png" />data7</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/joints.png" />data8</div>
                            <div className="icon" onClick={handleStep}><img className="img" alt={"images.png"}src="/iconimages/energy.png" />data9</div>           
                        </div> 
                    }
                </div>
            </div>
        </>
    )
}

export {Page};