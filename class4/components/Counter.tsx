"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={() => setCount(count + 1)}
      >
        Click to add
      </button>
      <p>{count}</p>
    </div>
  );
}
