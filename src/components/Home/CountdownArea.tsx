"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const CountDown = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observe: any;
    let interval: any;
    let index = 0;

    const __startCount = () => {
      if (interval) {
        return;
      }
      interval = setInterval(() => {
        if (value === index) {
          clearInterval(interval);
          interval = null;
        } else {
          index++;
        }
        setCount(index);
      }, 10000 / value);
    };

    observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          __startCount();
        } else {
          if (value === index) {
            index = 0;
          }
        }
      });
    });
    if (ref.current) {
      observe.observe(ref.current);
    }

    return () => observe && observe.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
};

export default function CountdownArea() {
  const data = [
    {
      icon: "Icon-1.svg",
      value: { first: "", middle: 50, last: "M+" },
      content: "Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    },
    {
      icon: "Icon-2.svg",
      value: { first: "$", middle: 100, last: "M" },
      content:
        "Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
    },
    {
      icon: "Icon-3.svg",
      value: { first: "", middle: 30, last: "%" },
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
    },
    {
      icon: "Icon-4.svg",
      value: { first: "", middle: 60, last: "+" },
      content: "Magni dolores eos qui ratione voluptatem sequi nesciunt",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-5 py-20">
        <div className="md:w-[700px] mx-auto">
          <h1 className="text-4xl text-center font-bold text-[#0F0049] leading-snug">
            Our 12 years of together have given us much to be proud of
          </h1>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-4 gap-8">
            {data.map(
              ({ content, icon, value: { first, middle, last } }, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-[#F6F5F8] py-8 px-8 shadow-md flex flex-col gap-3"
                >
                  <Image
                    src={`/images/${icon}`}
                    width={40}
                    height={40}
                    alt={icon}
                    className="w-12 h-12"
                  />
                  <h1 className="font-bold text-4xl font-sans">
                    {first}
                    <CountDown value={middle} />
                    {last}
                  </h1>
                  <p className="text-[#0F0049] text-opacity-70 font-medium text-sm">
                    {content}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
