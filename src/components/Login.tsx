
import supabase from "../utils/supabase.ts";
import { useState} from "react";

export const Login = () => {
    const [ userEmail, setUserEmail] = useState("")
    const [ userPassword, setUserPassword] = useState("")

    const login = async() => {
        console.log( 'click' );
        const req = {
            email: userEmail,
            password: userPassword,
        }
        const res = await supabase.auth.signInWithPassword(
            req
        )
        console.log(req)
        console.log(res)
    }

    return (
        <div>
            <form >
                <input value={userEmail} type="email"  placeholder={"email"} onChange={(e) => setUserEmail(e.target.value)} />
                <input value={userPassword} type="password"  placeholder={"password"} onChange={(e) => setUserPassword(e.target.value)} />
                <button onClick={login} type="button">Login</button>
            </form>
        </div>
    )
}