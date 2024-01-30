import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuType {
  path: string;
  label: string;
}

export default function Header() {
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
        <div className="flex justify-between border-b border-black border-opacity-50 py-5 items-center">
          <Link href={"/"}>
            <Image
              width={100}
              height={60}
              className="w-28 h-auto"
              src={"/images/Logo.png"}
              alt="Logo"
            />
          </Link>
          <div>
            <ul className="flex items-center">
              {menus.map(({ label, path }, index) => (
                <li key={index}>
                  <Link
                    href={path}
                    className="max-sm:text-sm text-base text-black font-semibold px-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* right buttons */}
          <div className="flex items-center gap-7">
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
