import { Link, useNavigate, } from "react-router-dom"
import { 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,  
} from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"
import Google from "../assests/images/icons8-google.png"

const Signin = () => {
    const [loginCred, setLoginCred] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    //function to handle inputs change
    function handleInputsChange(e){
        const { name, value } = e.target

        setLoginCred(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(auth)
    };

    //function to handle login
    async function handleLogin(e){
        e.preventDefault();
        await signInWithEmailAndPassword(auth, loginCred.email, loginCred.password)
        .then(result => {
            navigate("/board")
            // console.log(result);
            return result;
        }).catch(error => {
            if(error.message.replace("Firebase: Error ", "") == "(auth/invalid-login-credentials)."){
                setLoginError("invalid-login-credentials");
            }else{
                setLoginError("failed-network-request");
            }
        })
    }

    const googleProvider = new GoogleAuthProvider();

    async function handleGoogleSignIn(){
        await signInWithPopup(auth, googleProvider)
        .then(result => {
            navigate("/board")
        }).catch(error => console.log(error.message));
    };


  return (
    <div className="w-full max-w-sm mx-auto">
        <h4 className=" text-3xl font-semibold mb-5">Log in to your account</h4>
        {loginError && <p className=" mb-3 text-red-600">{loginError}</p> }
        <form 
        onSubmit={handleLogin}
        className="flex flex-col gap-3">
            <div className="text-left w-full">
                <label htmlFor="email" className=" font-medium">Email</label>
                <input 
                required
                id="email" 
                name="email" 
                type="email"
                value={loginCred.email}
                onChange={handleInputsChange}
                placeholder="Enter email address" 
                className="block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark" 
                />
            </div>
            <div className="text-left w-full">
                <label htmlFor="password" className=" font-medium">Password</label>
                <input 
                required
                id="password" 
                name="password" 
                type="password"
                value={loginCred.password}
                onChange={handleInputsChange}
                placeholder="Enter your password" 
                className="block mt-[6px] border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark" 
                />
            </div>
            <button 
            className="py-[10px] px-7 bg-[#1450A3] text-gray-50 self-center rounded mt-4">Log In</button>
            <p className="text-[15px]">Don't have an account? <Link 
            to="/signup"
            className=" hover:text-[#337CCF] hover:underline underline-offset-2">Signup</Link></p>
        </form>
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
export default Signin