import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useThemeContext } from "../Context/themeContext"
import { useEffect, useState } from "react";
import { auth, db, } from "../firebase";
import { collection, onSnapshot, orderBy, query, } from "firebase/firestore";
import NoteClip from "./NoteClip";
import { useNoteContext } from "../Context/noteContext";


const NotesBoard = () => {
    const [notes, setNotes] = useState([]);
    const {darkMode} = useThemeContext();
    const {openNewNoteEditor, noteTexts} = useNoteContext();

    const collectionRef = collection(db, "notes");

    const getNotes = () => {
            onSnapshot(collectionRef, (data) => {
                //getting only the notes created/added by the logged in user
                const userNotes = data.docs.filter(item => item.data().author.id == auth.currentUser.uid )
                setNotes(userNotes.map(note => {
                return {
                ...note.data(), id: note.id,
                };
            })); 
        })
    }

    const sortedNotes = notes?.sort((a,b) => b?.createdAt?.seconds - a.createdAt?.seconds);

    useEffect(() => {
        getNotes();
    }, []);


  return (
    <section className="w-full p-10 px-7 md:px-18">
        <button
        onClick={() => openNewNoteEditor()}
        className={`flex gap-3 items-center py-2 px-3 rounded-full ${darkMode ? "bg-[#E4F1FF] text-dark" : "bg-[#BEFFF7]"}`}><FontAwesomeIcon icon={faPlus} /><span>Create new note</span></button>
        <h4 className="my-5 text-2xl font-semibold">Notes</h4>
        <div className="flex justify-center md:justify-normal gap-3 md:gap-4 flex-wrap">
            {
                notes.length < 1 ? <h4>You have no notes</h4> : notes.map((note, idx) => {
                    return (
                        <NoteClip key={idx} num={idx} note={note} />
                    )
                })
            }
        </div>
    </section>
  )
};
export default NotesBoard;