import "./page.css";
import {useEffect,useState} from "react";
let data = [];
function Page(){
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getCategory();
      },)
    const getCategory = () => {
        var xhr = new XMLHttpRequest();
        var getUrl = "http://localhost:7878/categorys";
        xhr.open("GET", getUrl);
        xhr.send();
        xhr.onload = function () {
          var response = JSON.parse(this.response);
          for (var i = 0; i < response.category.length; i++) {
            if (i === 0) {
              console.log(response.category[0].catergory_name);
              data.push(response.category);
              setLoading(false);
            }
            break;
          }
        };
      };
    
    return loading?"loading ....":(
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
                            <div className="icon"><img className="img"src="/iconimages/Eye.png" alt={data[0][0].catergory_name}/><br/>{data[0][0].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/weight.png" alt={data[0][1].catergory_name}/><br/>{data[0][1].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/ear.png" alt={data[0][2].catergory_name}/><br/>{data[0][2].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/blood.png" alt={data[0][3].catergory_name}/><br/>{data[0][3].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/bones.png" alt={data[0][4].catergory_name}/><br/>{data[0][4].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/smile.png" alt={data[0][5].catergory_name}/><br/>{data[0][5].catergory_name}</div>
                             <div className="icon"><img className="img"src="/iconimages/breathe.png" alt={data[0][6].catergory_name}/><br/>{data[0][6].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/joints.png" alt={data[0][7].catergory_name}/><br/>{data[0][7].catergory_name}</div>
                            <div className="icon"><img className="img"src="/iconimages/energy.png" alt={data[0][8].catergory_name}/><br/>{data[0][8].catergory_name}</div>           
                        </div> 
                    }
                </div>
            </div>
        </>
    )
}

export {Page};