"use client";
import { useReducer } from "react";

function reducer(state: any, action: any) {
  console.log(action);
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e: any) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <input
        value={state.name}
        onChange={(e: any) =>
          dispatch({
            type: "changed_name",
            nextName: e.target.value,
          })
        }
      />
      <button onClick={() => dispatch({ type: "incremented_age" })}>
        Increment age
      </button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
