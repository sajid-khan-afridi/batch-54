import React from "react";

const page = () => {
  return (
    <div className="font-sans bg-purple-200 p-12 text-center">
      <div className="bg-white p-2 rounded-full flex justify-between">
        <a
          href="#"
          className="active bg-blue-50 text-gray-800 py-2 px-6 rounded-full"
        >
          Profile
        </a>
        <a href="#" className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full">
          Notifications
        </a>
        <a href="#" className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full">
          Payments
        </a>
        <a href="#" className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full">
          Settings
        </a>
      </div>
    </div>
  );
};

export default page;
