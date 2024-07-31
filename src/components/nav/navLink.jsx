import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  const Icon = ({ icon }) => {
    return <div className="mx-2">{icon}</div>;
  };

  return (
    <Link href={href} className="">
      <div className=" hover:text-secondary  hover:border-opacity-[0.2] p-3 flex justify-center items-center my-1">
        <div className="flex w-[70%] justify-betwee">
          <Icon icon={icon} />
        <p className="text-[0.8rem] text-left mx-">{title}</p>
      </div>
      </div>
    </Link>
  );
};

export default NavLink;
