import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import NoteClip from "./NoteClip";

const FavNotes = () => {
    const [favNotes, setFavNotes] = useState([]);

    //getting user a note
    const collectionRef = collection(db, "notes");
    const favoriteQuery = query(collectionRef, where("favorite","==",true));

    const getFavoriteNotes = () => {
        onSnapshot(favoriteQuery, (data) => {
            const userFavNotes = data.docs.filter(item => item.data().author.id == auth.currentUser.uid );
            setFavNotes(userFavNotes.map(note => {
                return {
                    ...note.data(), id: note.id
                }
            }));
        })
    };

    useEffect(() => {
        getFavoriteNotes();
    }, [])

  return (
    <section className="w-full p-3 px-7 md:px-18">
        <h4 className="my-5 text-2xl font-medium">Favorite Notes</h4>
        <div className="w-full flex justify-center md:justify-normal gap-3 md:gap-4 flex-wrap">
            {
                favNotes.length < 1 ? <h4>You have no favorite notes</h4> : favNotes.map((note, idx) => {
                    return (
                        <NoteClip key={idx} num={idx} note={note} />
                    )
                })
            }
        </div>
    </section>
  )
}
export default FavNotes