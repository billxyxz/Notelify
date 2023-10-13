import { useThemeContext } from "../Context/themeContext";
import NotePNG from "../assests/images/note.png"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

  return (
    <section className={`w-full min-h-screen py-24 md:pt-32 px-12 lg:px-36 text-center ${darkMode ? "dark" : ""}`}>
        <div className="w-[250px] sm:w-[300px] md:w-[400px] mx-auto absolute left-0 md:left-[15%] top-[30%] sm:top-[20%] md:flex z-[-1]">
        <img src={NotePNG} />
        </div>
        <article className="max-w-lg mx-auto mb-4 md:mb-7 font-article">
        <h3 className=" font-bold text-4xl md:text-5xl mb-4 md:mb-7">The simplest way to keep notes</h3>
        <p className=" tracking-wide
        ">Notelify, where note-taking meets simplicity and efficiency. Take charge of your ideas, lectures, and to-dos with our intuitive online notes platform.</p>
        </article>
        <button 
        onClick={() => navigate("/signup")}
        className="px-5 py-2 bg-[#1450A3] text-white rounded-[4px]">Get Started</button>
    </section>
  )
}
export default Welcome