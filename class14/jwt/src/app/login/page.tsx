"use client";
import React from "react";

const Page = () => {
  async function handleSubmit(e: any) {
    // create fetch with post method and pass username and password
    // e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }
  return (
    <div>
      {/* create a form with two input tags and a button  */}
      <form action={"/profile"} onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter your username" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
