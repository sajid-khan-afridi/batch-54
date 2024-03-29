import Link from "next/link";
import React from "react";

export function NestNav() {
  return (
    <div className="flex flex-row gap-5">
      <Link className="hover:font-medium underline" href="/contact-us/ahmad">
        Ahmad Link
      </Link>
      <Link className="hover:font-medium underline" href="/contact-us/ali">
        Ali Link
      </Link>
    </div>
  );
}
