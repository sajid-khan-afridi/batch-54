import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container flex items-center">
      <div className="mr-4 basis-20 flex-shrink-0">
        <Image
          src="https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          alt="Pizza"
          width={150}
          height={150}
        />
      </div>
      <div className="basis-80">
        <h2>Make the Best Pizza at Home</h2>
        <p>
          The secret to baking the best pizza at home lies in the preparation of
          the...
        </p>
      </div>
    </div>
  );
};

export default page;
