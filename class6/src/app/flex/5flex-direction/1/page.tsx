import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[250px] mx-auto h-[300px] shadow-2xl flex  flex-col justify-center items-center gap-y-5 text-[10px]">
      <div className="bg-blue-400 py-2 text-white w-[200px] text-center rounded-sm">
        Login
      </div>
      <div className="border-blue-400 py-2 text-blue-700 border w-[200px] text-center rounded-sm">
        Create account
      </div>
    </div>
  );
};

export default page;
