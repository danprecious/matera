"use client"

import NavLink from "./navLink";
import { StateContext } from "@/state_manager/context";
import React, { useContext } from "react";

export const NavBody = () => {
  const navLinks = ["Profile", "Settings", "Theme", ""];

  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };

  const navItems = [
    {
      title: "Profile",
      href: "/dashboard",
    },
    { title: "Settings", href: "/dashboard/settings" },

    { title: "How to use", href: "/dashboard/docs" },
  ];
  return (
    <div>
      {navOpen ? (
        <ul className="w-[100%] absolute md:right-[10px] rounded-[20px] right-0  z-50 min-w-[5em] max-w-[14em] top-12 bg-zinc-50 py-2">
          <div className="text-left">
            {navItems.map(({ title, href }, index) => (
              <NavLink key={index} title={title} href={href} />
            ))}
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
