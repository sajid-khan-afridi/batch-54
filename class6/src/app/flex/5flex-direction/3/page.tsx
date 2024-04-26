import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const page = () => {
  return (
    <div className="flex flex-col justify-between  w-72 h-80 shadow-2xl px-4 mx-auto mt-5 rounded items-start">
      {/* without items-start can work */}
      <div className="text-purple-700 text-4xl">
        <FaQuoteLeft />
      </div>
      <p className="text-[15px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
        labore, similique, fugit laborum, numquam neque odit quaerat dolorum
        magnam dolores aperiam quia optio nobis facilis!
      </p>
      <h2 className="font-bold">John Doe</h2>
    </div>
  );
};

export default page;
