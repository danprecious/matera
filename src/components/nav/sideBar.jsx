"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";
import NavLink from "./navLink";
import { BiSolidDashboard, BiCollection, BiLibrary, BiSolidArchive, BiLogOutCircle } from "react-icons/bi";
import { logout } from "@/app/actions/authenticate";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  { title: "Session Library", href: `/dashboard/session-library`, icon: <BiLibrary /> },
  { title: "Saved Materials", href: `/dashboard/saved-materials`, icon: <BiSolidArchive /> },
];

const SideBar = () => {
  return (
    <div className=" mr-5 w-[22%] rounded-[20px] hidden lg:flex md:flex-col justify-between">
      <div className="flex justify-center w-[100%] p-2 ">
        <Logo />
      </div>
      <div className="h-[70%]">
        {menuItems.map(({ title, href, icon }, index) => (
          <NavLink key={index} title={title} href={href} icon={icon} />
        ))}
      </div>
      
        <div className="flex justify-center hover:font-medium  rounded-md mb-5 p-3">
          <button onClick={() => logout()} className="opacity-30 hover:opacity-100 font-semibold rounded-md py-2 px-3 w-[100%] text-center flex justify-center items-center">
            <span className="px-2">Log out</span>
            <BiLogOutCircle className="text-[1.5rem]" />
          </button>
        </div>
      
    </div>
  );
};

export default SideBar;
