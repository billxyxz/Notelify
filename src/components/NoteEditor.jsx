import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNoteContext } from "../Context/noteContext";
import { useThemeContext } from "../Context/themeContext"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeletePopup from "./DeletePopup";
import { useEffect, useState } from "react";

const NoteEditor = () => {
    const {darkMode} = useThemeContext();
    const {noteTexts, handleTextChange, closeNoteEditor, addNewNote, noteId, updateNote,} = useNoteContext();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

  return (
    <section className={`absolute z-20 top-0 left-0 w-full h-full flex justify-center items-start pt-10 px-10 md:px-24  ${darkMode ? "bg-dark" : "bg-light"}`}>
        {showPopup && <DeletePopup handleShow={setShowPopup} />}
        <div className="w-full max-w-lg mx-auto flex flex-col">
            <div className="mb-5">
                <label htmlFor="title">Title</label>
                <input 
                onChange={handleTextChange}
                value={noteTexts.title}
                name="title" 
                type="text" 
                id="title" 
                placeholder="Give note a title"
                className={`w-full py-3 px-5 border rounded-[4px] mt-1 outline-none ${darkMode ? "bg-transparent" : "bg-[#F1F5F9] border-dark"}`}
                />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <textarea 
                onChange={handleTextChange}
                value={noteTexts.body}
                name="body" 
                id="body"
                placeholder="What's on your mind? ..."
                className={`resize-none w-full h-[300px] p-5 border rounded-[4px] mt-1 outline-none ${darkMode ? "bg-transparent" : "bg-[#F1F5F9] border-dark"}`}
                />
            </div>
            {noteId && <button 
            onClick={() => setShowPopup(true)}
            className=" self-end group">
                <FontAwesomeIcon 
                icon={faTrash}
                className="w-4 h-4 p-2 text-[#D80032] group-hover:text-[#D80032]/[0.6]"
                />
            </button>}
            <div className="flex justify-center gap-7 mt-5">
                <button 
                onClick={() => closeNoteEditor()}
                className={`border bg-transparent  rounded py-2 px-5 transition-all ${darkMode ? "" : "border-dark"}`}>Cancel</button>
                {
                noteId ? <button 
                onClick={() => updateNote()}
                className="border border-[#1A5D1A] bg-transparent hover:bg-[#1A5D1A]/[0.5] hover:text-light rounded py-2 px-6 transition-all">Save Edit</button> : <button 
                onClick={() => addNewNote()}
                className="border border-[#1A5D1A] bg-transparent hover:bg-[#1A5D1A]/[0.5] hover:text-light rounded py-2 px-6 transition-all">Save</button>
                }
            </div>
        </div>
    </section>
  )
}

// [#E3F4F4]
export default NoteEditor;