import React from "react";

const page = () => {
  return (
    // Solution #
    // <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
    //   <div className="w-52 h-52 bg-green-400 text-center content-center">
    //     Lorem ipsum
    //   </div>
    // </div>

    // Solution #1
    // <div className="w-full h-screen flex justify-center items-center">
    //   <div className="bg-pink-600 ">text</div>
    // </div>

    // Solution #2
    <div className="w-screen h-screen flex">
      <div className=" m-auto bg-green-600">Text</div>
    </div>
  );
};

export default page;
