import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex">
      <a className="icon flex justify-center items-center" href="#">
        <FaTwitter className="fa fa-twitter p-2 mx-1 w-12 h-12 bg-gray-700 text-white rounded-full"></FaTwitter>
      </a>
      <a className="icon flex justify-center items-center" href="#">
        <FaLinkedinIn className="fa fa-linkedin p-2 mx-1 w-12 h-12 bg-gray-700 text-white rounded-full"></FaLinkedinIn>
      </a>
      <a className="icon flex justify-center items-center" href="#">
        <FaGithub className="fa fa-github p-2 mx-1 w-12 h-12 bg-gray-700 text-white rounded-full"></FaGithub>
      </a>
    </div>
  );
};

export default page;
