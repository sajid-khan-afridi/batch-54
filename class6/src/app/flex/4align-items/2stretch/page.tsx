import Card from "@/components/Card";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 w-1/3 bg-gray-300 shadow-2xl p-5 mx-auto">
      <Card
        props={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <Card
        props={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa!"
        }
      />
      <Card
        props={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga quam cum dicta quaerat incidunt distinctio, ad ab tenetur."
        }
      />
    </div>
  );
};

export default page;
