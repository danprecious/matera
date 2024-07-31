import NavBar, { openNav } from "./navBar";
import Logo from "./logo";
import { NavButton } from "./navButton";
import Avatar from "../utility_comps/avatar";


const Header = () =>{
    return(
        <header className="relative lg:flex w-[100%] bg-white p-2">
            <div className="flex justify-between items-center lg:hidden relative px-2 mt-2 mb-6">
              <Logo />
              <div className="lg:hidden flex items-center">
                <Avatar />
                <NavButton />
              </div>
            </div>
           <div className="w-[100%]"> <NavBar /></div>
          </header>
    )
}

export default Header;