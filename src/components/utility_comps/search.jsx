"use client";

import React, { useContext } from "react";
import { StateContext } from "@/state_manager/context";

const SearchBar = () => {
  const { state, dispatch } = useContext(StateContext);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <input
      className="text-center w-[100%] lg:mr-8  p-1 outline-zinc-400 border-zinc-300 border-solid border-[1px] rounded-[7px]"
      type="text"
      placeholder="Search for a material..."
    />
  );
};

export default SearchBar;
