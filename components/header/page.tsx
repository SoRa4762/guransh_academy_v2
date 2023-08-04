"use client";
import Image from "next/image";
import { useState } from "react";
import NavModal from "../modal/page";
import { navBar } from "@/helper/data";
import Link from "next/link";
import { Menu } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <NavModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="h-[12vh] w-full flex justify-between items-center px-6 md:px-16 relative bg-gray-100 shadow-md shadow-gray-500">
        <Image
          src="/logo2.jpg"
          alt="Guransh Academy Logo"
          width={100}
          height={100}
          objectFit="cover"
          className="h-10 sm:h-16 w-10 sm:w-16 rounded-full"
        />

        {/* Bar */}
        <Menu
          className={`h-8 w-8 sm:hidden ${openModal ? "hidden" : "flex"}`}
          onClick={() => setOpenModal(true)}
        />

        {/* NavBar */}
        <div className=" sm:flex hidden gap-4 lg:gap-8 items-center">
          {navBar.map((nav, index) => (
            <Link
              key={index}
              href={nav.link}
              className="text-slate-950 sm:text-lg lg:text-xl font-medium hover:border-b-[3.5px] hover:border-red-500"
            >
              {nav.navBarTitle}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
