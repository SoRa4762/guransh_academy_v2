import { whyUs } from "@/helper/data";
import Image from "next/image";
import React from "react";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div
      id="whyus"
      className="h-full w-full flex flex-col justify-center items-center px-6 md:px-16 bg-slate-200"
    >
      <h1 className="text-3xl md:text-5xl lg:text-7xl py-6 md:py-10 lg:py-14 font-bold text-slate-950">
        Why Us
      </h1>

      {/* Why Us Cards */}
      {whyUs.map((why) => (
        <div
          key={why.id}
          className="h-full w-full grid grid-cols-1 sm:grid-cols-2 bg-gray-300 rounded-2xl my-4"
        >
          <div className="h-96 w-full">
            <Image
              src={why.image}
              alt={why.title}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-full w-full flex flex-col justify-center items-center p-8">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-yellow-500">
              {why.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-center">
              {why.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
