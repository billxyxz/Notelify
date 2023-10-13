import { useThemeContext } from "../Context/themeContext"

const Contact = () => {
    const { darkMode } = useThemeContext()
  return (
    <section className={`w-full h-screen py-24 md:pt-32 lg:pt-32 px-12 lg:px-36 font-article text-center ${darkMode ? "dark" : ""}`}>
        <h4 className="text-3xl font-medium mb-7">Got Inquries? Contact Us</h4>
        <article className="flex flex-col gap-2">
            <p className=" max-w-md mx-auto">For any assistance or inquiries related to our products or services, please contact our customer support team:</p>
            <ul className="flex flex-col gap-1">
                <li><a href="mailto:erobagacollins@gmail.com">erobagacollins@gmail.com</a></li>
                <li><a href="tel:+2348064417586">+234-806-6441-7586</a></li>
            </ul>
        </article>
    </section>
  )
}
export default Contact