import { useNoteContext } from "../Context/noteContext";
import { useThemeContext } from "../Context/themeContext"
import NoteEditor from "../components/NoteEditor";
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom";

const Board = () => {
  const { darkMode } = useThemeContext();
  const { showNoteEditor } = useNoteContext();

  return (
    <section className={`relative w-full h-screen grid grid-cols-4 font-article ${darkMode ? "dark" : ""}`}>
      <SideBar />
      { showNoteEditor && <NoteEditor/> }
      <Outlet />
    </section>
  )
};
export default Board;