import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(/bg3_1.jpg)`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
      className="h-[88vh] flex flex-col"
    >
      <div className="h-full w-full flex flex-col gap-12 justify-center items-center">
        <h1 className="lg:text-7xl sm:text-5xl text-3xl font-bold text-yellow-500 px-8 sm:px-16 lg:px-36 text-center">
          First{" "}
          <span className="border-b-[3.5px] border-dashed border-pink-300">
            Step
          </span>{" "}
          Towards Success!
        </h1>
        <p className="lg:text-xl sm:text-base text-sm font-normal text-slate-50 px-14 sm:px-40 lg:px-80 text-center">
          "Our Montessori embraces each child's journey with trust and care,
          fostering a future of limitless possibilities where curiosity thrives
          and minds soar free."
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
