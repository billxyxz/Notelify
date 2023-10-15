import { useEffect } from "react";
import { useThemeContext } from "../Context/themeContext";
import NotePNG from "../assests/images/note.png"
import Mockup from "../assests/images/mockup.png"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <section className={`w-full min-h-screen py-24 md:pt-32 px-12 lg:px-36 text-center flex flex-col items-center ${darkMode ? "dark" : ""}`}>
        <div className="w-[250px] sm:w-[300px] md:w-[400px] mx-auto absolute left-0 md:left-[15%] top-[30%] sm:top-[20%] md:flex -z-10">
        <img src={NotePNG} />
        </div>
        <article className="max-w-lg mx-auto mb-5 md:mb-7 font-article">
        <h3 className=" font-bold text-[40px] md:text-[55px] leading-tight mb-4 md:mb-6">The simplest way to keep notes</h3>
        <p className=" tracking-wide
        ">Notelify, where note-taking meets simplicity and efficiency. Take charge of your ideas, lectures, and to-dos with our intuitive online notes platform.</p>
        </article>
        <button 
        onClick={() => navigate("/signup")}
        className="px-[26px] md:px-7 md:py-3 bg-[#1450A3] text-white rounded-[4px] md:text-[18px]">Get Started</button>
        <img 
        src={Mockup} 
        alt="" 
        className="w-full md:w-auto"
        />
    </section>
  )
}
export default Welcome