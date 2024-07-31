
import SearchBar from "../utility_comps/search";
import Avatar from "../utility_comps/avatar";
import { NavButton } from "./navButton";
import { NavBody } from "./navBody";
import UserName from "../utility_comps/userName";

const NavBar = () => {
  const NavOnAuth = () => {
    return (
      <nav className="flex justify-evenly items-center relative w-[100%]">
        <UserName />
        <div className="flex items-center">
          
         <Avatar />
          

          <NavButton />
        </div>
        {/* <div className="flex justify-center items-center">
          </div> */}
      </nav>
    );
  };

  return (
    <div className="flex md:justify-between px-2 w-[100%] md:px-0 py-1 md:w-[100%]">
      <div className="lg:w-[76%] mx-10 flex w-[100%]">
        <SearchBar />
      </div>
      <div className="hidden justify-evenly relative lg:flex w-[23%]">
        <NavOnAuth />
      </div>
      <NavBody />
    </div>
  );
};

export default NavBar;
