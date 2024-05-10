import React from "react";

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-2xl w-full mx-auto">{children}</div>;
}

export default Wrapper;
