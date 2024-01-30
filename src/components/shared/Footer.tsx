import Link from "next/link";
import React from "react";

interface MenuType {
  path: string;
  label: string;
}

const FooterMenu = ({ title, menus }: { title: string; menus: MenuType[] }) => {
  return (
    <>
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <ul className="space-y-3">
        {Array.isArray(menus) &&
          menus.map(({ label, path }, index) => (
            <li
              key={index}
              className="max-sm:text-sm text-base text-white text-opacity-80 hover:text-opacity-100 duration-200 w-fit"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default function Footer() {
  const menu1 = [
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/pricing",
      label: "Pricing",
    },
    {
      path: "/jobs",
      label: "Jobs",
    },
    {
      path: "/blogs",
      label: "Blogs",
    },
    {
      path: "/careers",
      label: "Careers",
    },
  ];

  const menu2 = [
    {
      path: "/sales-software",
      label: "Sales Software",
    },
    {
      path: "/pricing",
      label: "Features",
    },
    {
      path: "/jobs",
      label: "Privacy & Security",
    },
    {
      path: "/blogs",
      label: "Marketplace",
    },
    {
      path: "/careers",
      label: "API",
    },
  ];

  const menu3 = [
    {
      path: "/sales-software",
      label: "Community",
    },
    {
      path: "/pricing",
      label: "Knowledge Base",
    },
    {
      path: "/jobs",
      label: "Academy",
    },
    {
      path: "/blogs",
      label: "Support",
    },
  ];

  return (
    <footer className="bg-[#00063F]">
      {/* footer top */}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-9 pb-10 pt-20">
          <div className="col-span-2 flex flex-col gap-5">
            <FooterMenu title="Company" menus={menu1} />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <FooterMenu title="Product" menus={menu2} />
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <FooterMenu title="Help Center" menus={menu3} />
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <h1 className="text-lg font-semibold text-white">Download</h1>
            <p className="max-sm:text-sm text-white text-opacity-80">
              Join millions of people who build a fully integrated sales and
              maketing solution.
            </p>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="container px-5 mx-auto">
        <div className="flex items-center py-7 justify-between border-t border-white border-opacity-55">
          <div className="">
            <p className="max-sm:text-sm text-base text-white font-medium">
              Copyright @2023 <Link href={"/"}>Aspire</Link>. All Rights
              Reserved.
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              <li className="max-sm:text-sm text-base text-white font-medium">
                <Link
                  className="hover:underline duration-200"
                  href={"/terms-conditions"}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="max-sm:text-sm text-base text-white font-medium">
                <Link
                  className="hover:underline duration-200"
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
