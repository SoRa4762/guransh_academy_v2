import { navBar } from "@/helper/data";
import { Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { url } from "inspector";

type Props = {};

const Footer = (props: Props) => {
  return (
    //*first design
    // <div className="h-full w-full flex px-6 md:px-16 py-8 md:py-16 justify-between items-center bg-black">
    //   <div className="flex flex-col justify-between gap-4 text-slate-50">
    //     <div className="flex flex-row gap-4 lg:gap-8">
    //       {navBar.map((item, index) => (
    //         <div key={index}>
    //           <Link
    //             href={item.link}
    //             className="font-bold text-[0.5rem] sm:text-sm lg:text-xl"
    //           >
    //             {item.navBarTitle}
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //     <p className="font-thin text-[0.5rem] lg:text-sm">
    //       &copy; Guransh Academy, All Rights Reserved.
    //     </p>
    //   </div>

    //   <div>
    //     <Image
    //       src="/logo1.jpg"
    //       alt="Guransh Academy Logo 1"
    //       height={100}
    //       width={100}
    //       className="rounded-full h-10 w-10 md:h-16 md:w-16"
    //     />
    //   </div>
    // </div>

    //*second design
    <div
      className="h-screen w-full bg-gray-200 flex flex-col"
      // style={{
      //   background: `url(/mainBG.png)`,
      //   backgroundSize: "cover",
      // }}
    >
      {/* enroll now section */}
      <div className="h-[85vh] sm:h-[75vh] w-full flex flex-col justify-center items-center px-12  md:px-44 gap-6 sm:gap-8">
        <Image
          src="/logo1.jpg"
          alt="Guransh Academy Logo 1"
          height={1000}
          width={1000}
          className="h-24 w-24 rounded-full"
        ></Image>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-yellow-500 py-4">
          Adventure Awaits at Guransh Academy
        </h1>
        <p className="lg:px-52 md:px-24 sm:px-20 px-8 text-center text-base lg:text-lg">
          Welcome to Guransh Academy, where young minds thrive in a
          child-centered haven. Enroll today and unlock a world of wonder,
          nurturing holistic growth and a love for lifelong learning.
        </p>
        <Button className="text-slate-50 bg-red-500 hover:bg-red-600 sm:text-lg lg:text-xl rounded-3xl shadow-md w-60 shadow-gray-400">
          <Link href="/#contactus">Enroll Now</Link>
        </Button>
      </div>
      {/* footer links section */}
      <div className="h-[15vh] sm:h-[25vh] w-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row gap-2 cursor-pointer">
          <Link href="/">
            <Twitter />
          </Link>
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Facebook />
          </Link>
        </div>
        <p className="font-medium text-sm lg:text-lg text-slate-900">
          &copy; 2023 Guransh Academy, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
