import React from "react";
import "./styleTest.css"

const Test4 = ({ handleChange3, handleClick }) => {
  return (
    <div className="App">
      <h4 className="nutrify">Nutrify</h4>
      <p className="problems">Select if you have any habits below</p>
      <div className="radio">
        <div className="radio1">
          <p>Select your age group</p>
          <input type="radio" onChange={handleChange3} name="data10" />
          20-32
          <input type="radio" onChange={handleChange3} name="data11" />
          33-50
          <input type="radio" onChange={handleChange3} name="data12" />
          50-60
        </div>
        <div className="radio1">
          <p>Severity of the problem</p>
          <input type="radio" onChange={handleChange3} name="data13" />
          Low
          <input type="radio" onChange={handleChange3} name="data14" />
          Moderate
          <input type="radio" onChange={handleChange3} name="data15" />
          High
        </div>
        <div className="radio1">
          <p>Select your gender</p>
          <input type="radio" onChange={handleChange3} name="data16" />
          Male
          <input type="radio" onChange={handleChange3} name="data17" />
          Female
          <input type="radio" onChange={handleChange3} name="data18" />
          Others
        </div>
        <button onClick={() => handleClick()}>NEXT</button>
      </div>
    </div>
  );
};
export default Test4;
