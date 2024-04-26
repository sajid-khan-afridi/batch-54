import React from "react";

const page = () => {
  return (
    <div className="w-75vw">
      <div className="w-full">Takes 75% of the viewport width.</div>
      <div className="w-screen">Still takes 100% of the viewport width.</div>
    </div>
  );
};

export default page;
