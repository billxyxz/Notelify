import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase";

const PasswordReset = () => {
    const [email, setEmail] = useState("");

    const handleSendResetLink = async (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Check your email for password reset link!");
        }).catch(err => console.log(err.message));
    };

  return (
    <form 
    onSubmit={handleSendResetLink}
    className="flex flex-col gap-4 max-w-[350px] mx-auto">
        <p className="text-left text-sm">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        <div className="text-left">
            <label htmlFor="email">Email</label>
            <input 
            required
            type="email" 
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="block mt-1 border-2 border-[#1450A3] rounded py-2 px-4 w-full outline-none text-dark"
            />
        </div>
        <button className="bg-[#1450A3] py-3 rounded text-light">Continue</button>
    </form>
  )
}
export default PasswordReset