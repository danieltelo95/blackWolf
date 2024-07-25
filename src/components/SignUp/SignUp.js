import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { setUser } from '../../store/actions/actions'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignup = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user))
        } catch (error) {
            console.error("Error signing up: ", error)
        }
    }

    return (
        <div>
            <h2>Signup</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSignup}>Signup</button>
        </div>   
    )

}

export default Signup;