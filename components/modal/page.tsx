"use client";
import { navBar } from "@/helper/data";
import { X } from "lucide-react";
import Link from "next/link";
import { Dispatch } from "react";

type Props = { openModal: boolean; setOpenModal: Dispatch<boolean> };

const NavModal = ({ openModal, setOpenModal }: Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
      }}
      className={`h-screen w-screen z-[999] fixed px-8 flex-col items-center  sm:hidden overflow-y-hidden ${
        openModal ? "flex" : "hidden"
      } `}
    >
      <div className={`h-[12vh] w-full flex justify-end items-center`}>
        <X
          className={`h-8 w-8  sm:hidden text-slate-50`}
          onClick={() => setOpenModal(false)}
        />
      </div>
      <div className="flex flex-col text-center gap-4">
        {navBar.map((nav, index) => (
          <div
            key={index}
            // className="flex flex-col items-center justify-center"
          >
            <Link
              href={nav.link}
              onClick={() => setOpenModal(false)}
              className="text-slate-50"
            >
              {nav.navBarTitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavModal;
