import React from "react";
import "./styleTest.css"

const Test3 = ({ handleChange2, handleClick }) => {
  return (
    <div className="App">
      <h4 className="nutrify">Nutrify</h4>
      <p className="problems">Select if you have any habits below</p>
      <div className="radio">
        <div className="radio1">
          <p>Video Gaming</p>
          <input type="radio" onChange={handleChange2} name="data1" />
          Low
          <input type="radio" onChange={handleChange2} name="data2" />
          Moderate
          <input type="radio" onChange={handleChange2} name="data3" />
          High
        </div>
        <div className="radio1">
          <p>Reading in Low Light</p>
          <input type="radio" onChange={handleChange2} name="data4" />
          Low
          <input type="radio" onChange={handleChange2} name="data5" />
          Moderate
          <input type="radio" onChange={handleChange2} name="data6" />
          High
        </div>
        <div className="radio1">
          <p>Usage of digital devices</p>
          <input type="radio" onChange={handleChange2} name="data7" />
          Low
          <input type="radio" onChange={handleChange2} name="data8" />
          Moderate
          <input type="radio" onChange={handleChange2} name="data9" />
          High
        </div>
        <button onClick={() => handleClick()}>NEXT</button>
      </div>
    </div>
  );
};
export default Test3;
