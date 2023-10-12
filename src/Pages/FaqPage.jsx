import { useThemeContext } from "../Context/themeContext"
import FAQs from "../components/FAQs";


const FaqPage = () => {
  const { darkMode } = useThemeContext();

  return (
    <section className={`w-full min-h-screen py-24 md:pt-32 lg:pt-32 px-12 lg:px-36 text-center ${darkMode ? "dark" : ""}`}>
        <h3 className=" font-semibold text-4xl md:text-4xl mb-7 md:mb-14 leading-normal">Frequently Asked Questions</h3>
        <FAQs />
    </section>
  )
}
export default FaqPage