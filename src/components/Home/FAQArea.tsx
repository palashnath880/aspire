"use client";

import React, { useState } from "react";

const FAQItem = ({
  qus,
  ans,
  isActive,
  index,
  setActiveIndex,
}: {
  qus: string;
  ans: string;
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number) => void;
}) => {
  return (
    <div
      className={`${
        isActive ? "shadow-none" : "shadow-lg"
      } bg-white duration-300`}
    >
      <div
        onClick={() => setActiveIndex(index)}
        className="px-5 py-4 cursor-pointer flex gap-5 items-center justify-between"
      >
        <h2 className="text-base font-bold">{qus}</h2>
        <span
          className={`${isActive ? "rotate-0" : "-rotate-90"} duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M7.28151 8.04264L0.563019 1.28834L1.84453 0L7.28151 5.46596L12.7185 0L14 1.28834L7.28151 8.04264Z"
              fill="#0F0049"
            />
          </svg>
        </span>
      </div>
      <blockquote
        className={`px-5 duration-500 ${
          isActive ? "max-h-[600px]" : "max-h-0"
        } overflow-hidden `}
      >
        <p className="py-5 max-sm:text-sm">{ans}</p>
      </blockquote>
    </div>
  );
};

export default function FAQArea() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data: { qus: string; ans: string }[] = [
    {
      qus: "What is web development?",
      ans: "Web development is the process of creating and maintaining websites. This includes everything from the initial design and coding to ongoing maintenance and updates.",
    },
    {
      qus: "Do I need a website?",
      ans: "In today's digital age, having a website is crucial for any business or individual. It's your online storefront, portfolio, and communication hub.",
    },
    {
      qus: "How much does web development cost?",
      ans: "The cost of web development varies depending on the size and complexity of your project. We offer a free consultation to discuss your specific needs and provide you with a custom quote.",
    },
    {
      qus: "What content management system (CMS) do you use?",
      ans: "We use a variety of CMS platforms, including WordPress, Drupal, and Joomla. We'll recommend the best platform for your needs.",
    },
    {
      qus: "Can I make changes to my website after it's launched?",
      ans: "Yes, you can easily update your website content through the CMS. We can also provide ongoing maintenance and support to keep your website secure and up-to-date.",
    },
    {
      qus: "How do I optimize my website for search engines?",
      ans: "We offer search engine optimization (SEO) services to help your website rank higher in search results.",
    },
  ];

  return (
    <section className="bg-[#F6F5F8]">
      <div className="container mx-auto px-5 py-20">
        <div className="flex flex-col gap-5">
          <h1 className="max-sm:text-2xl text-4xl text-center font-bold text-[#0F0049]">
            Frequently asked questions
          </h1>
          <p className="text-center text-opacity-80 max-sm:text-sm">
            We haveput together some commonly asked questions
          </p>
        </div>

        <div className="mt-20 md:w-[700px] mx-auto">
          <div className="grid grid-cols-1 gap-5">
            {data.map(({ ans, qus }, index) => (
              <FAQItem
                isActive={index === activeIndex}
                ans={ans}
                qus={qus}
                key={index}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
