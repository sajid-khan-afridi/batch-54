"use client";
import React, { useReducer } from "react";

const Page = () => {
  function reducer(state: any, action: any) {
    console.log(action);
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
    }
  }
  let value = 0;
  const [state, dispatch] = useReducer(reducer, value);
  return (
    <div className="flex gap-x-3">
      {state}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Page;
