import React from "react";
import "./styleTest.css"
const Test = ({ handleChange0, handleClick, handleData }) => {
  return (
    <div className="App">
      <h4 className="nutrify">Nutrify</h4>
      <p className="problems">Select Related Problems</p>
      <div className="inputShow" type="text">
        {handleData.map((e) => (
          <p>{e[0]},</p>
        ))}
      </div>
      <p className="below">You can select from below categories</p>
      <br />
      <div className="checkbox">
        <input type="checkbox" name="low vision" onChange={handleChange0} />
        Low Vision
        <hr />
        <input type="checkbox" name="headache" onChange={handleChange0} />
        Headache
        <hr />
        <input type="checkbox" name="tiredeyes" onChange={handleChange0} />
        Tired eyes
        <hr />
        <input type="checkbox" name="nervous pain" onChange={handleChange0} />
        Nervous pain
        <hr />
        <input type="checkbox" name="dizziness" onChange={handleChange0} />
        Heavy head
        <hr />
        <input type="checkbox" name="heavy head" onChange={handleChange0} />
        Dizziness
        <hr />
        <input type="checkbox" name="blurry vision" onChange={handleChange0} />
        Blurry Vision
        <hr />
      </div>
      <button onClick={handleClick}>NEXT</button>
    </div>
  );
};
export default Test;
