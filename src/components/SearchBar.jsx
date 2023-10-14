import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const {darkMode} = useThemeContext();

  return (
    <div className={`w-full border border-gray-400 rounded-md px-4 py-2 flex items-center gap-3 ${darkMode ? "text-light" : "text-dark"}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input 
          disabled
          type="search"
          placeholder="Search" 
          className="w-full  outline-none bg-transparent" 
        />
    </div>    
  )
}
export default SearchBar;