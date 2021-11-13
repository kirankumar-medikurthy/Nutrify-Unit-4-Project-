import "./Nutricon.css"
import {useEffect,useState} from "react";
let data = [];
function Nutricon(){
    const [loading,setLoading] = useState(true);
    useEffect(() =>{
        handleNutricon();
    })
    const handleNutricon = () => {
        var xhr = new XMLHttpRequest();
        var getUrl = "http://localhost:7878/products";
        xhr.open("GET", getUrl);
        xhr.send();
        xhr.onload = function () {
          var response = JSON.parse(this.response);
          for (var i = 0; i < response.product.length; i++) {
            if (i === 0) {
              //console.log(response.product[0].product_name);
              data.push(response.product[0]);
              setLoading(false);
            }
            break;
          }
        };
    }
    return loading?"loading ... please wait":(
        <div id="NutriconLayout">
                    <div id="Nutricionheading1"></div>
                    <div id="Nutriconheader">
                        <h3 id="Nutricionheading">Nutricon</h3>
                        <div id="Nutricontoggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> 
                    <div id="NutriconimageLayout">
                        <div id="Nutriconimageinnerlayout">
                            <img src="/iconimages/Payments/nutricon.png" alt={data[0].product_name}/>
                        </div>
                        <div id="sidebarsymbols">
                            <div>{"<"}</div>
                            <div>{">"}</div>
                        </div>
                    </div>
                    <div id="NutriconContent">
                            <h2 id="price">{`Rs ${data[0].Subtotal}`}</h2>
                            <h5 id='Nutriconuse'>How Nutricon works?</h5>
                            <div id="Nutricondata">{data[0].Description}</div>
                            <h5 id="question2">How to take the test?</h5>
                            <button id="BuyNow"><span id="Buynowdata">Buy now</span></button>
                    </div>
        </div>)
}
export {Nutricon};