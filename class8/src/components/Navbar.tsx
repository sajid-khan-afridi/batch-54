"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { Divide } from "lucide-react";

function Navbar() {
  const links = [
    {
      lNames: "Male",
      hRef: "/male",
    },

    {
      lNames: "Female",
      hRef: "/female",
    },
    {
      lNames: "Kids",
      hRef: "/kids",
    },
    {
      lNames: "All Products",
      hRef: "/products",
    },
  ];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="hidden lg:flex justify-between items-center py-4 px-10">
        <Image
          src={"/logo.webp"}
          width={150}
          height={60}
          alt=""
          className="dark:invert  "
        />
        <ul className="flex gap-x-10">
          {links.map((link) => (
            <li>
              <Link key={link.hRef} href={link.hRef}>
                {link.lNames}
              </Link>
            </li>
          ))}
          {/* <li>Female</li>
        <li>Kids</li>
        <li>All Products</li> */}
        </ul>

        <div className="flex gap-4 items-center border-2 border-slate-300 py-1 px-4 rounded-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search dark:text-white"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </span>
          <Input placeholder="What are you looking for" />
        </div>
        <ModeToggle />
        <Button>hello</Button>
        <div className="bg-slate-300 rounded-full p-4 relative">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>

          <div className="absolute top-0 right-0 w-5 h-5 text-white flex justify-center items-center bg-[#f02d34] rounded-full">
            0
          </div>
        </div>
      </div>
      {
        // condition ? "true" : "false"

        isOpen ? (
          <div className=" flex lg:hidden justify-between ">
            <Image
              src={"/logo.webp"}
              width={150}
              height={60}
              alt=""
              className="dark:invert  "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu"
              onClick={() => setIsOpen(false)}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </div>
        ) : (
          <div>
            <div className="flex justify-between  ">
              <Image
                src={"/logo.webp"}
                width={150}
                height={60}
                alt=""
                className="dark:invert  "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-slate-300 h-14 w-14 rounded-full p-4 relative">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </div>

                <div className="absolute top-0 right-0 w-5 h-5 text-white flex justify-center items-center bg-[#f02d34] rounded-full">
                  0
                </div>
              </div>
              <ul className="flex flex-col items-center justify-center ">
                {links.map((link) => (
                  <li>
                    <Link key={link.hRef} href={link.hRef}>
                      {link.lNames}
                    </Link>
                  </li>
                ))}
                {/* <li>Female</li>
        <li>Kids</li>
        <li>All Products</li> */}
              </ul>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Navbar;
