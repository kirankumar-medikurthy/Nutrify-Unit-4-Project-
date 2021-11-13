import { useState, useEffect } from "react";
import "./Nutricon.css";
let data = [];
function NutriconSecond() {
    const [count,setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleNutricon();
  },[count]);
  const handleCount = (count) =>{
      if(count !== 0) {
        setCount(count);
      }
  }
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
  };
  return loading ? (
    "loading ..."
  ) : (
    <div id="NutriconSecondLayout">
      <div id="Nutricionheading1"></div>
      <div id="Nutriconheader">
        <h3 id="Nutricionheading">Nutricon</h3>
        <div id="Nutricontoggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="Shopping-cart">Shopping Cart</div>
      <div id="Nutricon-self-tracking">
          <div className="Nutriocon-image-box">
              <div>
              <img src="/iconimages/Payments/nutricon.png" alt={data[0].product_name}/>
              </div>
              <div>
                  <div className="Nutricon-self-tracking-data">Nutricon self nutrition tracking device</div>
                  <div className="Nutricon-self-tracking-price">{`Rs ${data[0].Subtotal}`}</div>
                  <div id="counterbtns">
                        <button onClick={()=>{handleCount(count-1)}} id="minus">-</button>
                        <button id="count">{count}</button>
                        <button onClick={()=>{handleCount(count+1)}} id="plus">+</button>
                  </div>
              </div>
          </div>
          <div id="Order-summary">Order Summary</div>
          <div id="orderSummaryBelowBox">
              <div className="subtotal">Subtotal<span>{`Rs ${data[0].Subtotal}`}</span></div>
              <div className="Discount">Discount<span>{`Rs ${data[0].Discount}`}</span></div>
              <div className="Shipping">Shipping & Delivery charge<span>{data[0].Shipping_and_Delivery_charge}</span></div>
              <div className="TotalAmount">Total amount<span><b>{`Rs ${(count*data[0].Subtotal)-data[0].Discount}`}</b></span></div>
          </div>
          <button id="proceed">Proceed</button>
      </div>
      {/* <h1>{data[0].product_name}</h1>
      <h1>{data[0].Discount}</h1> */}
    </div>
  );
}
export { NutriconSecond };
