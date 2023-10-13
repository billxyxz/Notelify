import { useEffect, useState } from "react";
import { useNoteContext } from "../Context/noteContext";
import { useThemeContext } from "../Context/themeContext"
import NoteEditor from "../components/NoteEditor";
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom";

const Board = () => {
  const { darkMode } = useThemeContext();
  const { showNoteEditor } = useNoteContext();
  const [greetText, setGreetText] = useState("");


  //function set greeting
  const setGreeting = () => {
    const hours = new Date().getHours();
    if(hours < 12){
      setGreetText("Good Morning!")
    }else if(hours > 12 && hours < 18){
        setGreetText("Good AfterNoon!")
    }else{
      setGreetText("Good Evening!")  
    }

  }

  //useEffect to run/call the setGreeting function when the component mounts
  useEffect(() => {
    setGreeting();
  }, [])

  return (
    <section className={`relative w-full h-screen grid grid-cols-4 font-article ${darkMode ? "dark" : ""}`}>
      <SideBar />
      { showNoteEditor && <NoteEditor/> }
      <div className=" col-span-4 md:col-span-3">
        <header className="p-5 md:p-7 px-8 md:px-10 border-b flex md:justify-start items-center">
          <h3 className="text-3xl font-medium font-['Alegreya']">{greetText}</h3>
        </header>
        <Outlet />
      </div>
    </section>
  )
};
export default Board;