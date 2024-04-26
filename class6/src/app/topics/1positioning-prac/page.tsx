import React from "react";

const page = () => {
  return (
    <>
      <div className="w-36 h-36 bg-blue-700 relative">
        <div className="absolute w-10 h-10 bg-red-600 top-0 right-1/2">
          absolute
        </div>
        relative
      </div>
      <div className="w-10 h-10 fixed bottom-0 left-0 bg-purple-700">fixed</div>
    </>
  );
};

export default page;
