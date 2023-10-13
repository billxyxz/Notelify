import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext"
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNoteContext } from "../Context/noteContext";
import { useState } from "react";

const NoteClip = ({note}) => {
    const {darkMode} = useThemeContext();
    const { openCurrentNoteEditor, deleteNote} = useNoteContext();
    const [noteId] = useState(note.id)

  return (
    <article
    onClick={() => openCurrentNoteEditor(note.title, note.body, noteId)}
    className={`relative w-[200px] aspect-square p-5 rounded-lg group cursor-pointer overflow-hidden ${darkMode ? "bg-[#E4F1FF] text-dark" : "bg-[#E4F1FF]"}`}>
      <h4 className=" text-lg font-medium mb-1">{note.title}</h4>
      <p className=" line-clamp-3 text-ellipsis overflow-hidden whitespace-break-spaces">{note.body}</p>
      <button 
      className="absolute z-10 right-0 bottom-0 px-5 py-5 pb-3 cursor-default group"
      >
        <FontAwesomeIcon 
        icon={faPencil} 
        className=" w-5 h-5 text-dark/[0.6] group-hover:text-dark transition-all ease-linear"
        />
      </button>
    </article>
  )
}
export default NoteClip