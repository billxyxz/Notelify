import { faCaretDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useThemeContext } from "../Context/themeContext";

const faqsQuestions = [
    {
        question: "Is the note-taking service free to use?",
        answer: "Yes, our note-taking service is free for all users.",
    },
    {
        question: "Is my data secure and private?",
        answer: "Yes, we prioritize the security and privacy of your data. Our platform follows industry best practices to keep your notes safe and secure.",
    },
    {
        question: "Is there a limit to the number of notes I can create?",
        answer: "No, there are no limits to the number of notes you can create.",
    },
    {
        question: "How do I create an account and start using the note-taking platform?",
        answer: "To get started, simply visit our website and click on the 'Sign Up' button. Follow the instructions to create an account, and you'll be ready to start taking notes.",
    },
    {
        question: "Can I access my notes on different devices?",
        answer: "Absolutely! Our platform is designed to sync your notes seamlessly across all your devices, including smartphones, tablets, and computers. Just log in to your account to access your notes from anywhere.",
    },
    {
        question: "How do I get support or assistance if I have a problem?",
        answer: "You can reach out to our customer support team through the 'Contact Us' section on our website. We're here to help you with any questions or concerns you may have.",
    },
];


const FAQItem = ({question, answer }) => {
    const [showAns, setShowAns] = useState(false);
    const {darkMode} = useThemeContext();

    return (
        <div className={`p-3 border-b-2 flex flex-col gap-3 shadow-md ${darkMode ? "" : "border-[#1450A3]"}`}>
            <div className="flex justify-between items-start font-semibold">
                <h5>{question}</h5>
                <button
                onClick={() => setShowAns(!showAns)}
                ><FontAwesomeIcon 
                icon={faChevronDown}
                className={`transition-all duration-200 ${showAns ? " -scale-100" : ""}`} 
                /></button>
            </div>
            { showAns && <article> <p>{answer}</p> </article> }
        </div>
    )
};


const FAQs = () => {

  return (
    <div className="text-left w-full max-w-md mx-auto flex flex-col gap-1">
        {
            faqsQuestions.map((faq, idx) => (
                <FAQItem key={idx} answer={faq.answer} question={faq.question} />
            ))
        }
    </div>
  )
};
export default FAQs;