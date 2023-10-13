import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext"
import { faPencil, faHeart as faSolidHeart, } from "@fortawesome/free-solid-svg-icons";
import { useNoteContext } from "../Context/noteContext";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const NoteClip = ({note}) => {
    const {darkMode} = useThemeContext();
    const { openCurrentNoteEditor, addToFavorite } = useNoteContext();
    const [noteId] = useState(note.id)
    const [isFavorite] = useState(note.favorite)

  return (
    <article
    className={`relative w-[200px] aspect-square p-5 rounded-lg group cursor-pointer overflow-hidden ${darkMode ? "bg-[#E4F1FF] text-dark" : "bg-[#E4F1FF]"}`}>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-[#E4F1FF]/[0.8] opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-500">
        <button 
        onClick={() => openCurrentNoteEditor(note.title, note.body, noteId)}
        className="p-2 border border-dark rounded full flex items-center gap-2 opacity-0 group-hover:opacity-100">
          <span>Open</span>
          <FontAwesomeIcon 
          icon={faPencil} 
          className=" w-5 h-5 text-dark/[0.6] group-hover:text-dark transition-all  ease-linear"
        />
        </button>
      </div>
      <h4 className=" text-lg font-medium mb-1">{note.title}</h4>
      <p className=" line-clamp-3 text-ellipsis overflow-hidden whitespace-break-spaces">{note.body}</p>
      <button 
      onClick={() => addToFavorite(noteId)}
      className="absolute z-10 right-0 bottom-0 px-5 py-5 pb-3 cursor-default group"
      >
        {
          isFavorite ? <FontAwesomeIcon 
          icon={faSolidHeart} 
          className=" w-5 h-5 text-[#D80032] transition-all ease-linear"
          /> : <FontAwesomeIcon 
          icon={faHeart} 
          className=" w-5 h-5 text-[#D80032] transition-all ease-linear"
          />
        }
      </button>
    </article>
  )
}
export default NoteClip