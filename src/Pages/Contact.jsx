import { useRef } from "react";
import { useThemeContext } from "../Context/themeContext"

const Contact = () => {
  const formRef = useRef();
    
  const { darkMode } = useThemeContext();

  const handleSendMessage = (e) => {
    e.preventDefault();
    const messageData = new FormData(formRef.current);
    
    //mimicking data sent
    formRef.current.reset();
  }


  return (
    <section className={`w-full min-h-screen py-24 md:pt-32 lg:pt-32 px-12 lg:px-36 font-article text-center ${darkMode ? "dark" : ""}`}>
        <h4 className="text-3xl font-medium mb-7">Got Inquries? Contact Us</h4>
        <article className="flex flex-col gap-2 mb-7">
            <p className=" max-w-md mx-auto">For any assistance or inquiries related to our products or services, please contact our customer support team:</p>
            <ul className="flex flex-col gap-1 tracking-[2px]">
                <li><a href="mailto:erobagacollins@gmail.com">erobagacollins@gmail.com</a></li>
                <li><a href="tel:+2348064417586">+234-806-6441-7586</a></li>
            </ul>
        </article>
        <div className="w-full max-w-md mx-auto flex flex-col gap-10">
          <h5 className="text-2xl">Send a Message</h5>
          <form 
          ref={formRef}
          onSubmit={handleSendMessage}
          className="flex flex-col gap-7">
            <div className="w-full text-left">
              <label htmlFor="email">Email</label>
              <input 
              type="email" 
              name="senderEmail"
              id="email"
              className={`w-full py-3 px-5 border-b mt-1 outline-none ${darkMode ? "" : "border-dark"}`}
              />
            </div>
            <div className="w-full text-left">
              <label htmlFor="message">Message</label>
              <textarea  
              name="senderMessage"
              id="message"
              className={`w-full h-[130px] py-3 px-5 border-b mt-1 outline-none resize-none ${darkMode ? "" : "border-dark"}`}
              />
            </div>
            <button className=" self-center p-3 px-7 bg-[#1450A3] text-light">SEND</button>
          </form>
        </div>
    </section>
  )
}
export default Contact