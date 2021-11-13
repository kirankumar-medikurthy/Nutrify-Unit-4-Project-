import React from "react";
import "./styleTest.css"

 const Test2 = ({ handleChange1, handleClick, handleData }) => {
  return (
    <div className="App">
      <h4 className="nutrify">Nutrify</h4>
      <p className="problems">Select Related Problems</p>
      <div className="input1" type="text">
        {handleData.map((e) => (
          <p>{e[0]},</p>
        ))}
      </div>
      <p className="below">You can select from below categories</p>
      <br />
      <div className="checkbox">
        <input type="checkbox" name="eye pain" onChange={handleChange1} />
        Eye pain
        <hr />
        <input type="checkbox" name="weak eyes" onChange={handleChange1} />
        Weak eyes
        <hr />
        <input type="checkbox" name="hollow eyes" onChange={handleChange1} />
        Hollow eyes
        <hr />
        <input type="checkbox" name="itchy eyes" onChange={handleChange1} />
        Itchy eyes
        <hr />
        <input
          type="checkbox"
          name="sensitive to light"
          onChange={handleChange1}
        />
        Sensitive to light
        <hr />
        <input type="checkbox" name="red eyes" onChange={handleChange1} />
        Red eyes
        <hr />
        <input type="checkbox" name="watery eyes" onChange={handleChange1} />
        Watery eyes
        <hr />
      </div>
      <button onClick={handleClick}>NEXT</button>
    </div>
  );
};

export default Test2