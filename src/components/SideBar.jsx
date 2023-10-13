import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext"
import ToggleSwitch from "./ToggleSwitch"
import { faBook, faMagnifyingGlass, faArrowRightFromBracket, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNoteContext } from "../Context/noteContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const { darkMode } = useThemeContext();
  const { logOut, showSideBar, setShowSideBar } = useNoteContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    return navigate("/")
  }

  const navigateToBoard = () => {
    navigate("/board")
    setShowSideBar(false)
  }

  const navigateToFavorites = () => {
    navigate("favorites")
    setShowSideBar(false)
  }



  return (
    <section className={`absolute top-0 right-full md:right-auto bg-blue-700 md:bg-transparent z-20 md:z-auto md:relative w-4/5 md:w-full h-screen border-r-2 md:translate-x-0 transition-all ease-linear duration-300 ${showSideBar ? "translate-x-full" : ""}`}>
      <header className="p-5 md:p-7  md:py-[30px] border-b flex justify-between items-center">
        <h3 className="text-2xl cursor-default">Notelify</h3>
        <ToggleSwitch />
      </header>
      <nav className="p-5 md:p-7 py-9 flex flex-col gap-7 h-5/6 items-start">
        <div className={`w-full border border-gray-400 rounded-md px-4 py-2 flex items-center gap-3 ${darkMode ? "text-light" : "text-dark"}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input 
          type="search"
          placeholder="Search" 
          className="w-full  outline-none bg-transparent" 
        />
        </div>
        <button 
        onClick={navigateToBoard}
        className={`w-full text-left px-4 py-2 flex items-center gap-3 border border-gray-400 rounded-md ${darkMode ? "text-[#E4F1FF]" : "bg-[#E4F1FF]"}`}
        ><FontAwesomeIcon icon={faBook} /><span>All Notes</span></button>
        <button 
        onClick={navigateToFavorites}
        className={`w-full text-left px-4 py-2 flex items-center gap-3 border border-gray-400 rounded-md ${darkMode ? "text-[#E4F1FF]" : "bg-[#E4F1FF]"}`}
        ><FontAwesomeIcon icon={faHeart} /><span>Favorites</span></button>

      {/**Logout button*/}
      <button 
      onClick={handleLogout}
      className={`flex items-center font-medium gap-2 mt-auto text-[#FF6969] ${darkMode ? "" : ""}`}
      >
        <FontAwesomeIcon 
        icon={faArrowRightFromBracket}
        />
        <span>Logout</span>
      </button>
      </nav>
    </section>
  )
}
export default SideBar