"use client"
import React, { useState } from "react";

const Page = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex gap-x-3">
      {value}
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  );
};

export default Page;
