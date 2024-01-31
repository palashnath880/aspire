"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface MenuType {
  path: string;
  label: string;
}

export default function Header() {
  //states
  const [isOpen, setIsOpen] = useState(false);

  const menus: MenuType[] = [
    {
      path: "/",
      label: "Product",
    },
    {
      path: "/",
      label: "Pricing",
    },
    {
      path: "/",
      label: "Company",
    },
    {
      path: "/",
      label: "Resources",
    },
    {
      path: "/",
      label: "Contact",
    },
  ];

  return (
    <header>
      <div className="container mx-auto px-5">
        <div className="flex justify-between border-b border-black border-opacity-30 py-5 items-center max-lg:relative">
          <Link href={"/"}>
            <Image
              width={100}
              height={60}
              className="w-28 h-auto"
              src={"/images/Logo.png"}
              alt="Logo"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className={`max-lg:absolute max-lg:top-full max-lg:w-full max-lg:bg-white max-lg:shadow-md max-lg:left-0 max-lg:h-auto max-lg:z-[100] max-lg:py-10 origin-top duration-300 max-lg:rounded-lg ${
              isOpen ? "max-lg:scale-y-100" : "max-lg:scale-y-0"
            }`}
          >
            <ul className="flex items-center max-lg:flex-col max-lg:gap-4 ">
              {menus.map(({ label, path }, index) => (
                <li key={index}>
                  <Link
                    href={path}
                    className="max-sm:text-sm text-base text-black  font-semibold px-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="lg:hidden">
                <Link
                  href={"/"}
                  className="max-sm:text-sm text-base text-black  font-semibold px-4"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          {/* right buttons */}
          <div className="flex items-center gap-7 max-lg:hidden">
            <Link
              href={"/"}
              className=" max-sm:text-sm text-base text-black font-semibold"
            >
              Login
            </Link>
            <Link
              href={"/"}
              className=" max-sm:text-sm text-base text-white font-semibold rounded-full bg-[#F63A61] px-7 py-2 border-2 border-[#F63A61] hover:bg-transparent duration-200 hover:text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
