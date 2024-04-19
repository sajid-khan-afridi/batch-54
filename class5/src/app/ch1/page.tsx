import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/logo.jpg";

const page = () => {
  return (
    <div className="bg-gray-400 flex justify-evenly">
      <div className="text-center">
        <h1 className="">
          Welcome to NorthBy
        </h1>
        <h2 className="text-xl text-blue-300/95 font-semibold pt-2 pb-4">
          A premium <span className="text-red-700">insight</span> and sound
        </h2>
        <Button />
      </div>
      <div className="">
        <Image
          src={img1}
          height={200}
          width={200}
          className="pt-1"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default page;
