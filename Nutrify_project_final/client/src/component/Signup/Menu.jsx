import "./Signup.css";
// import { useEffect, useState } from "react";
import React from "react";
var data = [];
function Menu({handleClick}) {
  //const [data,setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   getMenu();
  // });

  // const getMenu = () => {
  //   var xhr = new XMLHttpRequest();
  //   var getUrl = "http://localhost:7878/menu";
  //   xhr.open("GET", getUrl);
  //   xhr.send();
  //   xhr.onload = function () {
  //     var response = JSON.parse(this.response);
  //     for (var i = 0; i < response.Menu.length; i++) {
  //       if (i === 0) {
  //         //console.log(response.Menu);
  //         data.push(response.Menu);
  //         setLoading(false);
  //       }
  //       break;
  //     }
  //   };
  // };
  return (
    <div>
      <div id="MenuLayout">
        <div id="heading2"></div>
        <div id="Menuheader">
          <h3 id="heading">MENU</h3>
          <div id="toggle-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="MenuContent">
          {/* {data.map((e) =>
            e.map((h) => (
              <div className="Device_Connect">
                <span>{h.menu_name}</span>
              </div>
            ))
          )} */}
          <div onClick={handleClick} className="Device_Connect">
            <span>Device Connect</span>
          </div>
          <div onClick={handleClick} className="Reports">
            <span>Reports</span>
          </div>
          <div onClick={handleClick} className="Order">
            <span>Order</span>
          </div>
          <div onClick={handleClick} className="Nutritional">
            <span>Nutritional Info</span>
          </div>
        </div>
        <button onClick={handleClick} className="logout">LOGOUT</button>
      </div>
    </div>
  );
}
export { Menu };
