import { useRef, useState } from "react"
import { Link, redirect, useNavigate } from "react-router-dom";
import Google from "../assests/images/icons8-google.png"
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, 
    sendEmailVerification, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "firebase/auth";



const Signup = () => {
    //state value of the form inputs
    const [formCred, setFormCred] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [passwordError, setPasswordError] = useState("");
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();


    //funtion to handle inputs change
    function handleInputsChange(e){
        const { name, value } = e.target;
        setFormCred(prev => ({
            ...prev,
            [name]: value
        }));
    };

    //function to handle creating signin up with email & password
    async function handleCreateUser(e){
        e.preventDefault();
        if(passwordRef.current.value === passwordConfirmRef.current.value){
            await createUserWithEmailAndPassword(auth, formCred.email, formCred.password)
            .then(result => {
            sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Verification Link has been sent to your email");
            })
            // console.log(result.user);
            return result;
            }).catch(error => console.log(error.message));
            setPasswordError("");
        }else{
            setPasswordError("Passwords do not match");
            return;
        }
    };

    //function to handle signin with google
    async function handleGoogleSignIn(){
        await signInWithPopup(auth, googleProvider)
        .then(result => {
            navigate("/board")
        }).catch(error => console.log(error.message));
    };

  return (
    <div className="w-full max-w-sm mx-auto">
        <h4 className=" text-3xl font-semibold mb-7">Welcome to <span className="text-[#1450A3]">Notelify</span></h4>
        <form 
        onSubmit={handleCreateUser}
        className="flex flex-col gap-3">
            <div className="text-left w-full">
                <label htmlFor="email" className=" font-medium">Email</label>
                <input 
                required
                id="email" 
                name="email" 
                type="email" 
                value={formCred.email}
                onChange={handleInputsChange}
                placeholder="Enter email address" 
                className="block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark" 
                />
            </div>
            <div className="text-left w-full">
                <label htmlFor="password" className=" font-medium">Password</label>
                <input 
                required
                ref={passwordRef}
                id="password" 
                name="password" 
                type="password" 
                value={formCred.password}
                onChange={handleInputsChange}
                placeholder="Enter a password" 
                className="block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark" 
                />
            </div>
            <div className="text-left w-full">
                <label htmlFor="confirm-password" className=" font-medium">Confirm Password</label>
                <input 
                required
                ref={passwordConfirmRef}
                id="confirm-password" 
                name="confirm-password" 
                type="password"
                onChange={handleInputsChange}
                placeholder="Re-enter password" 
                className="block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark" 
                />
                {passwordError && <p className=" text-red-700 text-sm">{passwordError}</p>}
            </div>
            <button 
            className="py-[10px] px-7 bg-[#1450A3] text-gray-50 self-center rounded mt-4 mb-1">Create an account</button>
        </form>
        <p className="text-[15px]">Already have an account? <Link 
        to="signin"
        className=" hover:text-[#337CCF] hover:underline underline-offset-2">Login</Link></p>
        <div className="w-full flex items-center justify-center gap-2 my-4">
            <span className="w-1/2 h-[2px] bg-gray-500"></span>
            <span>OR</span>
            <span className="w-1/2 h-[2px] bg-gray-500"></span>
        </div>
        <button 
        onClick={handleGoogleSignIn}
        className="w-full max-w-[300px] mx-auto flex items-center justify-center bg-[#1450A3] text-gray-50 py-3 rounded"><img src={Google} alt="Google" className=" w-7 mr-7" />Continue with Goggle</button>
    </div>
  )
}
export default Signup