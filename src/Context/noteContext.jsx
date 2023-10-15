import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc, } from "firebase/firestore";
import { createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const NoteContext = createContext();

export const useNoteContext = () => {
    return useContext(NoteContext);
}

export const NoteProvider = ({children}) => {
    const [noteTexts, setNoteTexts] = useState({
        title: "",
        body: "",
        favorite: false,
    });
    const [showNoteEditor, setShowNoteEditor] = useState(false);
    const [noteId, setNoteId] = useState("");
    const [showSideBar, setShowSideBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")

    const collectionRef = collection(db, "notes");

    //opening/edit an existing note
    function openCurrentNoteEditor(title, body, currentId){
        setNoteTexts(prev => ({
            ...prev,
            title,
            body
        }))
        console.log(title, body, currentId)
        setNoteId(currentId);
        setShowNoteEditor(true);
        // console.log(noteTexts)
        // console.log(noteId)
    }

    //closing/exiting the note editor;
    function closeNoteEditor(){
        setShowNoteEditor(false);
        setNoteId("");
    }

    //when you want to create a new note
    function openNewNoteEditor(title="", body="", favorite=false){
        setNoteTexts(prev => ({
            ...prev,
            title,
            body,
            favorite
        }))
        console.log(noteTexts)
        setShowNoteEditor(true)
    }

    function handleTextChange(e){
        const {name, value} = e.target
        setNoteTexts(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(noteTexts)
    }

    //creating/adding a new note
    async function addNewNote(){
        await addDoc(collectionRef, {...noteTexts, author: {id: auth.currentUser.uid}, createdAt: serverTimestamp()} )
        .then(() => {
            setShowNoteEditor(false);
            setNoteTexts({
                title: "",
                body: "",
                favorite: false
            })
            console.log(noteTexts)
        }).catch(error => console.log(error.message))

    }

    //saving changes to already existing notes
    async function updateNote(){
        const noteToUpdate = doc(db, "notes", noteId);
        await updateDoc(noteToUpdate, {...noteTexts, author: {id: auth.currentUser.uid}, createdAt: serverTimestamp()})
        .then(() => {
            setNoteId(null)
            setShowNoteEditor(false);
        }).catch(error => console.log(error.message));
        console.log(noteId, noteTexts)
    }

    //adding note to favorite
    const addToFavorite = async (id) => {
        const noteToAdd = doc(db, "notes", id);
        await updateDoc(noteToAdd, {favorite: true})
        .then(() => {
        }).catch(err => console.log(err.message));
    }

    //adding note to favorite
    const removeFromFavorite = async (id) => {
        const noteToAdd = doc(db, "notes", id);
        await updateDoc(noteToAdd, {favorite: false})
        .then(() => {
        }).catch(error => console.log(err.message));
    }

    //deleting note
    const  deleteNote = async (id) => {
        console.log(id)
        const noteToDelete = doc(db, "notes", id)
        await deleteDoc(noteToDelete)
        .then(() => {
            setShowNoteEditor(false);
            setNoteId("")
        }).catch(err => console.log(err.message))
    }

    //logging out
    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (data) => data)
    }, []);

        return (
        <NoteContext.Provider value={{
            showSideBar,
            setShowSideBar,
            noteTexts,
            noteId,
            showNoteEditor,
            closeNoteEditor,
            openCurrentNoteEditor,
            openNewNoteEditor,
            addNewNote,
            updateNote,
            addToFavorite,
            removeFromFavorite,
            deleteNote,
            handleTextChange,
            logOut
        }}>
            { children }
        </NoteContext.Provider>
    )
}