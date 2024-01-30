import Image from "next/image";
import React from "react";

export default function HeroArea() {
  return (
    <section>
      <div className="max-lg:container lg:w-[900px] mx-auto px-5">
        <div className="py-20 flex flex-col items-center">
          <h1 className="text-5xl text-center font-extrabold leading-snug">
            Multipurpose Website Templates
            <br />
            That boost your sales
          </h1>
          <p className="text-center text-black text-opacity-80 mt-4">
            Empowering Your Financial Journey through Customized Asset
            Management Services
          </p>

          <form className="mt-12 w-[400px] max-w-[100%]">
            <div className="flex items-center py-3 shadow-lg w-full px-3 rounded-full border border-opacity-15">
              <input
                placeholder="Enter your work mail here"
                type="email"
                className="px-5 flex-1 !outline-none border-none max-sm:text-sm"
              />
              <button className="px-5 py-2 bg-[#F63A61] text-white font-semibold max-sm:text-sm rounded-full">
                Get Started
              </button>
            </div>
          </form>
        </div>

        {/* hero image */}
        <div className="relative">
          <div className="bg-black rounded-2xl p-2 w-full">
            <Image
              alt="Hero Image"
              width={600}
              height={600}
              className="w-full rounded-xl h-auto"
              src={"/images/hero-image.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
