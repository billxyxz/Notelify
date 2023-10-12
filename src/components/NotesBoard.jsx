import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../Context/themeContext"
import { useEffect, useState } from "react";
import { db, } from "../firebase";
import { collection, onSnapshot, } from "firebase/firestore";
import NoteClip from "./NoteClip";
import { useNoteContext } from "../Context/noteContext";


const NotesBoard = () => {
    const [notes, setNotes] = useState([]);
    const {darkMode} = useThemeContext();
    const {openNewNoteEditor} = useNoteContext()

    const collectionRef = collection(db, "notes");

    const getNotes = () => {
            onSnapshot(collectionRef, (data) => {
                setNotes(data.docs.map(note => {
                return {
                ...note.data(), id: note.id
                };
            }));  
        })
    }

    useEffect(() => {
        getNotes();
    }, []);


  return (
    <section className="w-full h-full col-span-3">
        <header className="p-7 border-b flex justify-center md:justify-start items-center">
            <h3 className="text-2xl">Good Evening</h3>
        </header>
        <section className="p-10">
            <button
            onClick={() => openNewNoteEditor()}
            className={`flex gap-3 items-center py-2 px-3 rounded-full ${darkMode ? "" : "bg-[#E4F1FF]"}`}><FontAwesomeIcon icon={faPlus} /><span>Create new note</span></button>
            <h4 className="my-5 text-2xl font-semibold">Notes</h4>
            <div className="flex gap-4 flex-wrap">
                {
                    notes.length < 1 ? <h4>You have no notes</h4> : notes.map((note, idx) => {
                        return (
                            <NoteClip key={idx} note={note} />
                        )
                    })
                }
            </div>
        </section>
    </section>
  )
};
export default NotesBoard;