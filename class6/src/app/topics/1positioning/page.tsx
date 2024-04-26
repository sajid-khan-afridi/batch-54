import React from "react";

const page = () => {
  return (
    <>
      <div className="relative w-64 h-64 bg-blue-500">
        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500">
          Absolute
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-48 h-12 bg-green-500">Fixed</div>
    </>
  );
};

export default page;
