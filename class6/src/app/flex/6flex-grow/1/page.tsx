import React from "react";

const page = () => {
  return (
    <div className=" max-w-2xl my-12 mx-auto p-8 bg-gray-100">
      <div className="container flex">
        <input
          type="email"
          className="flex-grow py-3 px-6 rounded-l-md border border-gray-400"
          placeholder="Email Address"
        />
        <button
          type="submit"
          className="py-3 px-6 rounded-r-md bg-teal-700 text-white"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default page;
