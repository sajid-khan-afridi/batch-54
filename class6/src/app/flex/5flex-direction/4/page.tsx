import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/1.jpeg";
import img2 from "@/assets/images/2.webp";

const page = () => {
  return (
    // w-[576px]
    <div className="max-w-xl mx-auto mt-10 bg-slate-400 rounded shadow-2xl p-4">
      <div className="flex gap-x-2">
        <div className="w-100 h-50 object-cover">
          <Image
            src={img1}
            alt="img1"
            //   className="w-50 h-50"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col ">
          <h3 className="text-[12px] font-bold ">Alexa Kardi</h3>
          <p className="text-[8px] text-gray-800">Founder and CEO</p>
          <p className="text-[14px] mt-3">
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede.
          </p>
        </div>
      </div>
      {/* second */}
      <div className="flex gap-x-2 even:flex-row-reverse mt-5">
        <div className="w-100 h-50 object-cover ">
          <Image
            src={img1}
            alt="img2"
            //   className="w-50 h-50"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col even:text-right">
          <h3 className="text-[12px] font-bold ">Alexa Kardi</h3>
          <p className="text-[8px] text-gray-800">Founder and CEO</p>
          <p className="text-[14px] mt-3">
            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
            turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere
            a, pede.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
