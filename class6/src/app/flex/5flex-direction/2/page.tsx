import React from "react";

const page = () => {
  return (
    <div className="w-[250px] mx-auto h-[300px] shadow-2xl flex items-center  text-[10px]">
      <div className="bg-gray-300 w-full flex flex-col items-center">
        {/* center the below divs */}
        <div className="bg-blue-400 py-2 text-white w-[200px] text-center rounded-sm mb-5">
          Login
        </div>
        <div className="border-blue-400 py-2 text-blue-700 border w-[200px] text-center rounded-sm">
          Create account
        </div>
      </div>
    </div>
  );
};

export default page;
