import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex ">
      <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden relative">
        <FaTwitter className="text-white object-cover p-3 w-full h-full" />
      </div>
      <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden relative">
        <FaLinkedinIn className="text-white object-cover p-3 w-full h-full" />
      </div>
      <div className="h-12 w-12 rounded-full bg-gray-700 overflow-hidden relative">
        <FaGithub className="text-white object-cover p-3 w-full h-full" />
      </div>
    </div>
  );
};

export default page;
