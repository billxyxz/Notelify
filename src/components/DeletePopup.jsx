import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNoteContext } from "../Context/noteContext";

const DeletePopup = ({handleShow}) => {
    const {deleteNote, noteId} = useNoteContext();

    //handle confirm delete
    const handleDelete = () => {
        deleteNote(noteId);
        handleShow(false)
    }

  return (
    <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-start`}>
        <div className="relative w-full max-w-[290px] md:max-w-xs py-9 rounded shadow bg-light text-dark text-center mt-[45%] md:mt-[16%]">
            <button 
            onClick={() => handleShow(false)}
            className="absolute top-0 left-0 p-3 text-xl text-gray-700 hover:">
                <FontAwesomeIcon 
                icon={faXmark} 
                />
            </button>
            <h6 className="mb-3">Sure you want to delete?</h6>
            <button 
            onClick={handleDelete}
            className=" p-2 px-4 rounded border border-[#D80032] bg-transparent hover:bg-[#D80032]/[0.7] hover:text-light transition-all">Confirm</button>
        </div>
    </div>
  )
}
export default DeletePopup;