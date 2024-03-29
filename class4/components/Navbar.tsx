import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="flex flex-row gap-10 hover:">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact-us">Contact</Link>
    </div>
  );
}
