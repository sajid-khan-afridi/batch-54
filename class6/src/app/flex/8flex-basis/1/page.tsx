import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto my-10 w-screen h-screen  bg-slate-400 flex flex-col md:flex-row">
      <div className="basis-1/3 bg-fuchsia-300">
        <div>
          <h1>Learn</h1>
          <p>Build your skillset with the hottest courses</p>
          <Link href="#">Start Learning</Link>
        </div>
      </div>
      <div className="basis-2/3">
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
