import React from "react";

const Getdata = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   "use server"; //server action
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
    // { next: { revalidate: 3600 } }
    // 3600 for an hour
  );
  const res = await data.json();
  return (
    <div>
      {res.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Getdata;
