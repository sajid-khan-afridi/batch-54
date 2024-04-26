import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto my-10 container h-screen  bg-slate-400 flex flex-col md:flex-row">
      {/* basis-0 flex-shrink flex-grow */}
      <div className="flex-1 bg-fuchsia-300">
        <div>
          <h1>Learn</h1>
          <p>Build your skillset with the hottest courses</p>
          <Link href="#">Start Learning</Link>
        </div>
      </div>
      {/* basis-0 flex-shrink flex-grow OR basis-0 flex-grow*/}
      {/* flex-shrink is already a true */}
      <div className="basis-0 flex-grow">
        <div>
          <h1>Teach</h1>
          <p>Share your knowledge and earn some income</p>
          <Link href="#">Start Teaching</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
