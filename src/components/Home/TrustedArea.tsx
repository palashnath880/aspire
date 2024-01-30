import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default async function TrustedArea() {
  const imageDirectory = path.join(process.cwd(), "/public/images/trusted");
  const images = await fs.readdirSync(imageDirectory);
  console.log(images);

  return (
    <section className="-translate-y-10 z-10 bg-white">
      <div className="container mx-auto px-5 py-20 flex flex-col gap-10">
        <h1 className="text-4xl text-center font-bold">
          Trusted by 1000K plus customers
        </h1>
        <div className="w-full">
          <div className="flex flex-wrap gap-14 justify-center">
            {Array.isArray(images) &&
              images.map((image, index) => (
                <div key={index} className="aspect-video w-[130px]">
                  <Image
                    alt={image}
                    width={100}
                    height={80}
                    className="w-full h-full object-contain hover:scale-110 cursor-pointer duration-300"
                    src={`/images/trusted/${image}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
