import "./page.css";
import Axios from 'axios';
import {useEffect,useState} from "react";
function Page(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getCategory();
      },)
      const getCategory = async ()=>{
          const {data} = await Axios.get("http://localhost:3001/categorys")
          setData(data);
          setLoading(false);
      }
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
                    <div id="icons">
                            <div className="icon"><img className="img"src="/iconimages/Eye.png" alt={data[0].name}/><br/>{data[0].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/weight.png" alt={data[1].name}/><br/>{data[1].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/ear.png" alt={data[2].name}/><br/>{data[2].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/blood.png" alt={data[3].name}/><br/>{data[3].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/bones.png" alt={data[4].name}/><br/>{data[4].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/smile.png" alt={data[5].name}/><br/>{data[5].name}</div>
                             <div className="icon"><img className="img"src="/iconimages/breathe.png" alt={data[6].name}/><br/>{data[6].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/joints.png" alt={data[7].name}/><br/>{data[7].name}</div>
                            <div className="icon"><img className="img"src="/iconimages/energy.png" alt={data[8].name}/><br/>{data[8].name}</div>               
                    </div>
                </div>
            </div>
        </>
    )
}

export {Page};