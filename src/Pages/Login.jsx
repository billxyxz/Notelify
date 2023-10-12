import { Outlet } from "react-router-dom"
import { useThemeContext } from "../Context/themeContext"

const Login = () => {
  const { darkMode } = useThemeContext();
  
  return (
    <section className={`w-full h-screen py-24 pt-28 md:pt-32 md:px-32 px-12 lg:px-36 text-center font-article ${darkMode ? "dark" : ""}`}>
      <Outlet />
    </section>
  )
}
export default Login