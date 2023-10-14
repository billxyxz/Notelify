import { Link } from "react-router-dom";
import { useThemeContext } from "../Context/themeContext";

const Footer = () => {
    const {darkMode} = useThemeContext();


  return (
    <footer className={`w-full flex flex-col gap-1 text-center border-t p-5 ${darkMode ? "bg-dark text-light/[0.7]" : ""}`}>
        <nav>
            <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-7">
              <Link to="/">Home</Link>
              <Link to="/faqs">FAQs</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/contact">Support Forum</Link>
            </ul>
        </nav>
        <a href="mailto:erobagacollins@gmail.com">erobagacollins@gmail.com</a>
        <a href="tel:+2348064417586">+234-806-441-7586</a>
        <p className=" text-gray-500 pt-4 border-t border-gray-400 mt-2 w-full max-w-md mx-auto">&copy; Copyright 2023 Notelify. All Rights Reserved</p>
    </footer>
  )
}
export default Footer;