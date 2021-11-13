import "./payment.css"
import {useState} from "react";

function Checkout(){
    const grey= "#ACACAC";
    const [color,setColor] = useState(grey);
   
      const Check=(e)=>{
       // console.log(e.target.checked)
          if(e.target.checked){
            
            setColor("#00D215");
          }
          else{
              setColor(grey)
          }
      }
    return (
        <>
         <div id="pagelayout">
         <div id="blackdiv"></div>
         <div id="head">
                    <h3 id="headin">Checkout</h3>
                    <img id="dashimg" src="/iconimages/Payments/dash.svg" alt="Menu Button" />
        </div> 
     <h3 id="select">Select Payment mode</h3>
     
     <div id="input-box" className="dis_flex">
     <input onClick={Check}  type="checkbox" className="checkbox-round" />
        <p id="paracontent">Credit/Debit/ATM Card</p>
     </div>
     <div id="input-box" className="dis_flex">
     <input onClick={Check} type="checkbox" className="checkbox-round" />
     <p id="paracontent">Net Banking</p>
     </div>
     <div id="input-box" className="dis_flex">
     <input onClick={Check} type="checkbox" className="checkbox-round" />
     <p id="paracontent">UPI</p>
     </div>
     <div id="next_button">
         <button style={{backgroundColor : color}} id="smallbutton">NEXT</button>
     </div>
     </div>
        </>
    )
}
export {Checkout}