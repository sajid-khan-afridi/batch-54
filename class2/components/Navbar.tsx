import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact-us">Contact</Link>
    </div>
  );
}
