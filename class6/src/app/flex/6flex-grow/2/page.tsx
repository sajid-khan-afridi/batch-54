import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/1.jpeg";

const page = () => {
  return (
    <div className="flex w-1/2 mx-auto bg-gray-400">
      <div className="h-20 shrink-0 w-20 rounded-full overflow-hidden">
        <Image src={img1} alt="img1" className="object-cover w-full h-full" />
      </div>
      <h2 className="font-bold">Matt Cooper</h2>
      <p className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        repudiandae magni voluptatum cumque exercitationem, odit incidunt dicta
        sunt illum labore?
      </p>
    </div>
  );
};

export default page;
