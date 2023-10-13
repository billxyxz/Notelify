import { Link, useNavigate, } from "react-router-dom"
import { 
    signInWithEmailAndPassword,  
} from "firebase/auth"
import { auth } from "../firebase"
import { useState } from "react"

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
            console.log(result)
        }).catch(error => {
            if(error.message.replace("Firebase: Error ", "") == "(auth/invalid-login-credentials)."){
                setLoginError("invalid-login-credentials");
            }else{
                setLoginError("failed-network-request");
            }
        })
    }

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
            className=" hover:text-[#337CCF]       hover:underline underline-offset-2">Signup</Link></p>
        </form>
    </div>
  )
}
export default Signin