import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="flex flex-row gap-10 ">
      <Link className="hover:font-extrabold" href="/">
        Home
      </Link>
      <Link className="hover:font-extrabold" href="/about">
        About
      </Link>
      <Link className="hover:font-extrabold" href="/contact-us">
        Contact
      </Link>
    </div>
  );
}
