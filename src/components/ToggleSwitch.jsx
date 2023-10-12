import { useThemeContext } from "../Context/themeContext";

const ToggleSwitch = () => {
    const {darkMode, toggleSwitch} = useThemeContext();

  return (
    <div 
    onClick={() => toggleSwitch()}
    className={`w-10 h-5 rounded-full border flex items-center cursor-pointer ${darkMode ? "" : "bg-dark border-dark"}`}>
        <div className={`w-1/2 h-5 rounded-full bg-white transition-all ease-linear shadow-sm ${darkMode ? "translate-x-full" : ""}`}></div>
    </div>
  )
}
export default ToggleSwitch;