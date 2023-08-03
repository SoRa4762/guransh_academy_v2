import { navBar } from "@/helper/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-full w-full flex px-6 md:px-16 py-8 md:py-16 justify-between items-center bg-black">
      <div className="flex flex-col justify-between gap-4 text-slate-50">
        <div className="flex flex-row gap-4 lg:gap-8">
          {navBar.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="font-bold text-[0.5rem] sm:text-sm lg:text-xl"
              >
                {item.navBarTitle}
              </Link>
            </div>
          ))}
        </div>
        <p className="font-thin text-[0.5rem] lg:text-sm">
          &copy; Guransh Academy, All Rights Reserved.
        </p>
      </div>

      <div>
        <Image
          src="/logo1.jpg"
          alt="Guransh Academy Logo 1"
          height={100}
          width={100}
          className="rounded-full h-10 w-10 md:h-16 md:w-16"
        />
      </div>
    </div>
  );
};

export default Footer;
