import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [currentNumber, setCurrentNumber] = useState(0);
  let [currentIncreDecre, setCurrentIncreDecre] = useState(1);
  const addClickHandler = (event) => {
    setCurrentNumber((preValue) => {
      return parseInt(preValue) + parseInt(currentIncreDecre);
    });
    console.log(currentNumber);
  };
  const subClickHandler = () => {
    setCurrentNumber((preValue) => {
      return parseInt(preValue) - parseInt(currentIncreDecre);
    });
    console.log(currentNumber);
  };
  const resetClickHandler = () => {
    setCurrentNumber(0);
  };
  const incrementDecermentHandler = (event) => {
    setCurrentIncreDecre(event.target.value);
  };
  return (
    <div className="container">
      <h1>Counter</h1>
      <div id="number">{currentNumber}</div>
      <div>
        Increment/Decrement By
        <input
          type="number"
          value={currentIncreDecre}
          onChange={incrementDecermentHandler}
        />
      </div>
      <div>
        <button onClick={addClickHandler}>+</button>
        <button onClick={subClickHandler}>-</button>
      </div>
      <button onClick={resetClickHandler}>Reset</button>
    </div>
  );
};

export default Counter;

// React Project
// can have a set of 100 or more component
// react is rendered statically
// whenever you need to re-render with updated data -> there specific state need to be
// updated which will trigger re-render process
