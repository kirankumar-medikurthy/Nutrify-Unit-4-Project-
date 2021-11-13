function Status(){
    
    return <>
    <div id="pagelayout">
    <div id="blackdiv"></div>
    <div id="head">
                    <h3 id="headin">Status</h3>
                    <img id="dashimg" src="/iconimages/Payments/dash.svg" alt="Menu Button" />
        </div> 
    <h3 id="select" style={{fontWeight: "bold"}}>Success !</h3> 
    <p style={{textAlign: "center",fontWeight: 400,fontSize: "12px",marginTop: "21px"}}>Your order is confirmed</p>
    <img id="tickimg" src="/iconimages/Payments/Tick.svg" alt="Completed Status"/>
    <div id="cont_button">
         <button style={{backgroundColor : "green"}} id="smallbutton">DONE</button>
     </div>
    </div>
    </>
}
export {Status}