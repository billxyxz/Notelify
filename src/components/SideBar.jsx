import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext"
import ToggleSwitch from "./ToggleSwitch"
import { faBook, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const { darkMode } = useThemeContext();

  return (
    <section className="w-full h-full border-r-2">
      <header className="p-7 border-b flex justify-center md:justify-start items-center">
        <h3 className="text-2xl">Notelify</h3>
      </header>
      <nav className="p-7 py-9 flex flex-col gap-7 items-start">
        <div className={`w-full border border-gray-400 rounded-md px-4 py-2 flex items-center gap-3 ${darkMode ? "text-light" : "text-dark"}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input 
          type="search"
          placeholder="Search" 
          className="w-full  outline-none bg-transparent" 
        />
        </div>
        <button className={`w-full text-left px-4 py-2 flex items-center gap-3 border border-gray-400 rounded-md ${darkMode ? "text-[#E4F1FF]" : "bg-[#E4F1FF]"}`}><FontAwesomeIcon icon={faBook} /><span>All Notes</span></button>
      </nav>
    </section>
  )
}
export default SideBar