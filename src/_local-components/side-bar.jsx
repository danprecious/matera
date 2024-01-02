import React from "react";
import Logo from "./logo";
import Link from "next/link";
import NavLink from "./navLink";
import {FaBeer} from 'react-icons/fa'
import {BiSolidDashboard} from 'react-icons/bi'

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <BiSolidDashboard />
  },
  { title: "Your Collection", href: `/dashboard/` },
  { title: "Session Library", href: `/dashboard` },
  { title: "Saved Materials", href: `/dashboard` },
];

const SideBar = () => {
  return (
    <div className=" bg-white mr-5 w-[22%] rounded-[20px] hidden md:flex md:flex-col justify-between">
      <div className="flex justify-center w-[100%] p-2 ">
        <Logo />
      </div>
      <div className="h-[70%]">
        {menuItems.map(({ title, href, icon }, index) => (
          <NavLink key={index} title={title} href={href} icon={icon} />
        ))}
      </div>
      <Link href="#">
        <div className="flex justify-center hover:border-secondary hover:font-medium hover:border-[1px] hover:border-opacity-[0.2] hover:border-solid rounded-md mb-5 p-3">
          <button className="text-gray-400 font-semibold rounded-md py-2 px-3 w-[100%]">
            Log out
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
