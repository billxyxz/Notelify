import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { createContext, 
    useContext, 
    useState 
} from "react";
import { auth, db } from "../firebase";


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
    const [noteId, setNoteId] = useState("");

    const collectionRef = collection(db, "notes");

    function openCurrentNoteEditor(title, body, currentId){
        setNoteTexts(prev => ({
            ...prev,
            title,
            body
        }))
        setNoteId(currentId)
        setShowNoteEditor(true)
        console.log(noteId);
        console.log(noteTexts)
    }

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
        console.log(noteTexts)
    }

    async function addNewNote(){
        await addDoc(collectionRef, {...noteTexts, author: {id: auth.currentUser.uid}})
        .then(() => {
            alert("Note added!");
            setShowNoteEditor(false);
        }).catch(error => console.log(error.message))
    }

    async function updateNote(){
        const docToUpdate = doc(db, "notes", noteId);
        await updateDoc(docToUpdate, {...noteTexts, author: {id: auth.currentUser.uid}})
        .then(() => {
            alert("Changes saved!");
        }).catch(error => console.log(error.message));
    }
    return (
        <NoteContext.Provider value={{
            noteTexts,
            showNoteEditor,
            setShowNoteEditor,
            openCurrentNoteEditor,
            openNewNoteEditor,
            addNewNote,
            handleTextChange,
        }}>
            { children }
        </NoteContext.Provider>
    )
}