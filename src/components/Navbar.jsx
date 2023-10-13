import { useState } from "react"
import { Link, NavLink, } from "react-router-dom"
import { useThemeContext } from "../Context/themeContext";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const { darkMode } = useThemeContext();

  return (
    <header className={`flex justify-between items-center h-16 lg:h-20 md:h-[70px] w-full pr-12 pl-12 lg:px-36 fixed top-0 left-0 z-40 border-b border-gray-400 ${darkMode ? "dark" : ""}`}>
        <Link to="/"><h3 className=" text-3xl font-semibold text-[#191D88]">Notelify</h3></Link>{/**Logo */}
        <nav className="font-navlinks text-sm font-medium">
            <ul className={`flex flex-col sm:flex-row justify-center items-center gap-10 py-16 md:py-0 absolute md:relative left-0 md:left-auto md:top-auto w-full md:w-auto md:z-auto min-h-[50vh] -z-10 bg-[#191D88] text-gray-50 md:text-inherit md:bg-transparent transition-all ease-in duration-150 opacity-0 md:opacity-100 ${showNav ? "top-16 opacity-100" : "-top-[150%]"} sm:translate-y-0`}>
                <li><NavLink to="faqs">FAQs</NavLink></li>
                <li><NavLink to="contact">Contact Us</NavLink></li>
                <li><NavLink>Support Forum</NavLink></li>
                <ToggleSwitch />
            </ul>
        </nav>
        <div 
        onClick={() => setShowNav(!showNav)}
        className="flex flex-col gap-1 md:hidden cursor-pointer">{/**Hamburger */}
           <div className={`w-7 h-1 bg-[#191D88] rounded-2xl transition-all ${showNav ? "rotate-45 translate-y-3 translate-x-1" : ""}`}></div>
           <div className={`w-8 h-1 bg-[#191D88] rounded-2xl transition-all ${showNav ? "opacity-0" : ""}`}></div>
           <div className={`w-7 h-1 self-end bg-[#191D88] rounded-2xl transition-all ${showNav ? "-rotate-45 -translate-y-1" : ""}`}></div>
        </div>
    </header>
  );
}
export default Navbar