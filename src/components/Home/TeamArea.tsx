import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamType {
  image: string;
  name: string;
  designation: string;
}

export default function TeamArea() {
  const teamsData: TeamType[] = [
    {
      name: "Krishtoper",
      image: "/images/team/krishtoper.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Anthony",
      image: "/images/team/anthony.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Maggie",
      image: "/images/team/maggie.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Tony",
      image: "/images/team/tony.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Jolly",
      image: "/images/team/jolly.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Meloni",
      image: "/images/team/meloni.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Jhon",
      image: "/images/team/jhon.png",
      designation: "CTO of Example.com",
    },
    {
      name: "Shingsan",
      image: "/images/team/shingsan.png",
      designation: "CTO of Example.com",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col gap-5 mx-auto md:w-[700px]">
          <h1 className="text-4xl text-center font-bold text-[#0F0049]">
            Meet our dream team
          </h1>
          <p className="text-center text-opacity-80 md:px-20">
            We’re dedicated group of Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium
          </p>
        </div>

        {/* team card */}

        <div className="pt-20 pb-20">
          <div className="grid grid-cols-4 gap-6">
            {teamsData.map(({ designation, image, name }, index) => (
              <div key={index} className="">
                <div className="aspect-square overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    alt={name}
                    src={image}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 duration-300"
                  />
                </div>
                <div className="mt-4 pb-4 text-center">
                  <h3 className="font-semibold text-xl text-[#0F0049]">
                    {name}
                  </h3>
                  <p className="text-sm mt-1">{designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-5">
          <div className="bg-[#F6F5F8] shadow-md rounded-lg py-10 border border-[#EAEAEA] px-20">
            <div className="flex">
              <div className="w-[300px]">
                <h1 className="text-3xl font-bold text-[#0F0049]">
                  Join Our Team
                </h1>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <p className="text-[#0F0049] font-medium text-opacity-75">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <Link
                  href="/"
                  className="flex items-center gap-4 text-[#F63A61] font-semibold"
                >
                  View Current Openings
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={11}
                    viewBox="0 0 12 11"
                    fill="none"
                  >
                    <path
                      d="M6.06942 0.336914L11.0694 5.32358L6.06942 10.3102L5.11571 9.35907L8.48761 5.99616H0V4.651H8.48761L5.11571 1.28809L6.06942 0.336914Z"
                      fill="#F63A61"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
