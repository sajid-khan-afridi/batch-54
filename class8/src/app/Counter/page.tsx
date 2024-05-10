"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function Counter() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-x-5 justify-center items-center h-screen">
      <h1>Count: {count}</h1>

      {/* simple
      <Button
        onClick={() => {
          console.log("alert");
          count = count + 1;
          console.log(count);
        }}
      >
        +
      </Button> */}

      {/* simple */}
      <Button
        onClick={() => {
          console.log("alert");
          setCount(count + 1);
          console.log(count);
        }}
      >
        +
      </Button>
    </div>
  );
}

export default Counter;
