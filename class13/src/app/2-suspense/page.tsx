import React, { Suspense } from "react";
import Getdata from "./getdata";
import Loading from "./loading";

const page = () => {
  return (
    <div>
      <h1>Posts Data Display</h1>
      <Suspense fallback={<Loading />}>
        <Getdata />
      </Suspense>
    </div>
  );
};

export default page;
