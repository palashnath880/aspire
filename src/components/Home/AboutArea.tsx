import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutArea() {
  return (
    <section className="bg-[#0A85EA]">
      <div className="mx-auto container px-5 py-20 lg:px-20">
        <div className="flex gap-20">
          <div className="flex flex-col w-[300px] gap-7">
            <h1 className="text-4xl font-bold text-white leading-snug">
              About Our Company
            </h1>
            <Link
              href={"/learn-more"}
              className="flex gap-5 text-white font-medium"
            >
              Learn More
            </Link>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <p className="max-sm:text-sm text-base font-medium text-white text-opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="max-sm:text-sm text-base font-medium text-white text-opacity-80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="max-sm:text-sm text-base font-medium text-white text-opacity-80">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
          </div>
        </div>
        <div className="w-full mt-20 overflow-hidden rounded-2xl">
          <Image
            src="/images/about-image.png"
            width={800}
            height={550}
            className="w-full h-full aspect-video object-cover"
            alt="About"
          />
        </div>
      </div>
    </section>
  );
}
