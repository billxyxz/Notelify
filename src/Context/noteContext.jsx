import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";


const NoteContext = createContext();

export const useNoteContext = () => {
    return useContext(NoteContext);
}

export const NoteProvider = ({children}) => {
    const [noteTexts, setNoteTexts] = useState({
        title: "",
        body: ""
    });
    const [showNoteEditor, setShowNoteEditor] = useState(false);
    const [noteId, setNoteId] = useState(null);

    const collectionRef = collection(db, "notes");

    //opening/edit an existing note
    function openCurrentNoteEditor(title, body, currentId){
        setNoteTexts(prev => ({
            ...prev,
            title,
            body
        }))
        setShowNoteEditor(true);
        setNoteId(currentId);
    }

    //closing/exiting the note editor;
    function closeNoteEditor(){
        setShowNoteEditor(false);
        setNoteId(null);
    }

    //when you want to create a new note
    function openNewNoteEditor(title="", body=""){
        setNoteTexts(prev => ({
            ...prev,
            title,
            body
        }))
        setShowNoteEditor(true)
    }

    function handleTextChange(e){
        const {name, value} = e.target
        setNoteTexts(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //creating/adding a new note
    async function addNewNote(){
        await addDoc(collectionRef, {...noteTexts, author: {id: auth.currentUser.uid}})
        .then(() => {
            alert("Note added!");
            setShowNoteEditor(false);
        }).catch(error => console.log(error.message))
    }

    //saving changes to already existing notes
    async function updateNote(){
        const noteToUpdate = doc(db, "notes", noteId);
        await updateDoc(noteToUpdate, {...noteTexts, author: {id: auth.currentUser.uid}})
        .then(() => {
            alert("Changes saved!");
            setNoteId(null)
            setShowNoteEditor(false);
        }).catch(error => console.log(error.message));
    }

    //deleting note
    const  deleteNote = async (id) => {
        const noteToDelete = doc(db, "notes", id)
        await deleteDoc(noteToDelete)
        .then(() => {
            alert("note deleted!")
            setShowNoteEditor(false);
            setNoteId(null)
        }).catch(err => console.log(err.message))
    }

    //logging out
    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (data) => console.log(data))
    }, []);

        return (
        <NoteContext.Provider value={{
            noteTexts,
            noteId,
            showNoteEditor,
            closeNoteEditor,
            openCurrentNoteEditor,
            openNewNoteEditor,
            addNewNote,
            updateNote,
            deleteNote,
            handleTextChange,
            logOut
        }}>
            { children }
        </NoteContext.Provider>
    )
}