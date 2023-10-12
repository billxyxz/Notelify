import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../Context/themeContext"
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNoteContext } from "../Context/noteContext";

const NoteClip = ({note}) => {
    const {darkMode} = useThemeContext();
    const { openCurrentNoteEditor, } = useNoteContext();

    console.log(note.id)

  return (
    <article 
    onClick={() => openCurrentNoteEditor(note.title, note.body, note.id)}
    className={`relative w-[200px] aspect-square p-5 rounded-lg cursor-pointer overflow-hidden ${darkMode ? "" : "bg-[#E4F1FF]"}`}>
        <h4 className=" text-lg font-medium mb-1">{note.title}</h4>
        <p className=" line-clamp-3 text-ellipsis overflow-hidden whitespace-break-spaces">{note.body}</p>
        <FontAwesomeIcon 
        icon={faPencil} 
        className="absolute right-7 bottom-5 cursor-pointer"
        />
    </article>
  )
}
export default NoteClip