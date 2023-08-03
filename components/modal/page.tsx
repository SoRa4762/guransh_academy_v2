"use client";
import { navBar } from "@/helper/data";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Dispatch } from "react";

type Props = { openModal: boolean; setOpenModal: Dispatch<boolean> };

const NavModal = ({ openModal, setOpenModal }: Props) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))`,
      }}
      className={`h-screen w-screen z-[999] px-8 flex-col items-center absolute sm:hidden overflow-y-hidden ${
        openModal ? "flex" : "hidden"
      } `}
    >
      <div className={`h-[15vh] w-full flex justify-end items-center`}>
        <FontAwesomeIcon
          icon={faX}
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
