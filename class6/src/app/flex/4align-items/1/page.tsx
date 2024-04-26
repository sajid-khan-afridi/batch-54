import VideoIcon from "@/components/VideoIcon";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-gray-300">
      <div className="flex items-center w-1/6 rounded-lg shadow-2xl bg-white mx-auto">
        <VideoIcon />
        <h2 className="font-bold text-[13px]">Video Conference</h2>
      </div>
    </div>
  );
};

export default page;
