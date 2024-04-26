import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-wrap rounded-full bg-gray-50 gap-2 mt-5 justify-evenly
     px-4 py-2"
    >
      <Link
        href={"#"}
        className="rounded-full bg-blue-600 text-white px-3 py-1"
      >
        Profile
      </Link>
      <Link
        href={"#"}
        className="rounded-full cursor-pointer md:hover:bg-fuchsia-600 bg-blue-600 text-white px-3 py-1"
      >
        Notifications
      </Link>
      <Link
        href={"#"}
        className=" rounded-full bg-blue-600 text-white px-3 py-1"
      >
        Payments
      </Link>
      <Link
        href={"#"}
        className="rounded-full bg-blue-600 text-white px-3 py-1"
      >
        Settings
      </Link>
    </div>
  );
};

export default page;
