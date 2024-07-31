"use client"
import { useContext } from "react";
import { StateContext } from "@/state_manager/context";
import { FaAngleDown } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";




export const NavButton = () => {
    const { dispatch, state } = useContext(StateContext);
    const { navOpen } = state;
    const openNav = () => {
      dispatch({
        type: "toggleNav",
        payload: !navOpen,
      });
    };
    return (
      <button
        className="flex "
        onClick={openNav}
      >
        <FaAngleDown className="text-lg"/>
      </button>
    );
  };
  