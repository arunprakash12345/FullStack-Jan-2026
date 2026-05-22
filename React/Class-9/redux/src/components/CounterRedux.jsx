import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";
function CounterRedux() {
  const { count, random } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment("chandana"))}> + </button>
      <h3>{count}</h3>
      <h3>{`random ${random}`}</h3>
      <button onClick={() => dispatch(decrement())}> - </button>
    </>
  );
}

export default CounterRedux;
