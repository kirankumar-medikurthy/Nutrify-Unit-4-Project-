import "./payment.css"
import axios from "axios"
import { useState } from "react";


function Payment(){
    const [formdata, setFormdata] = useState({})
    const grey= "#ACACAC";
    const [color,setColor] = useState(grey);
      const Colour =  ()=>{
        let color="#00D215"
setColor(color);
      }
      
      
  const handlechange = (e) => {
          const {name, value} = e.target;
      //   Colour()
  if(e.target.name==="expiry_year" && e.target.value.length>0){
    Colour()
  }else{
    setColor(grey)
  }
          setFormdata({
              ...formdata,
              [name]: value
          })
       
          // console.log(name, value);
      }
  
  
      
      const handlesubmit = () => {
     //   Colour()
       const {Card_number,expiry_month,expiry_year}=formdata;
       if(Card_number.length===16 && Number(expiry_month)<13 && Number(expiry_year)<3000){
       //console.log(Card_number,expiry_month)
          axios.post('http://localhost:3001/payment', 
          formdata
        )
       }else{
           alert("Check your card details")
       }
      //  window.location.href="PaymentPage.jsx"
      }
  
  
    
     return <>
     <div id="pagelayout">
     <div id="blackdiv"></div>
     
     <div id="head">
                    <h3 id="headin">Card details</h3>
                    <img id="dashimg" src="/iconimages/Payments/dash.svg" alt={"Menu Button"} />
        </div> 
     <h3 id="select">Enter your card details</h3>     
     <div >
        
     <input id="input-box" onChange={handlechange} type="text" name="Cardholder_name" placeholder="Name of the card holder" />
     </div>
     <div >
     <input id="input-box" onChange={handlechange} type="Number" name="Card_number"  placeholder="Card number" />
     </div>
     <div id="expiry">
         Expiry date
     </div>
     <div id="expirydiv">
     <div >
     <input id="smallinputbox" onChange={handlechange} type="Number" name="expiry_month"  placeholder="Month" />
     </div>
     <div >
     <input id="smallinputbox_year" onChange={handlechange} type="Number" name="expiry_year"  placeholder="Year" />
     </div>
     </div>
     <div id="cont_button">
         <button onClick={handlesubmit} style={{backgroundColor : color}} id="smallbutton">CONTINUE</button>
     </div>
     </div>
     </>
   
}
export {Payment}