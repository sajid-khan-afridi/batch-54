import React from "react";

const page = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <div className="w-80 bg-white mx-auto shadow-2xl rounded-lg p-8">
        <h1 className="text-2xl font-bold">Welcome to Next.js!</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          debitis. At, illum nisi eligendi ipsum maxime illo, aspernatur earum
          vel expedita cum corporis ipsam soluta eius aperiam fuga quod
          exercitationem.
        </p>
        <div className="flex justify-between">
          <div className="bg-blue-300 rounded px-4 py-2">Prev</div>
          <div className="bg-blue-300 rounded px-4 py-2">Next</div>
        </div>
      </div>
    </div>
  );
};

export default page;
