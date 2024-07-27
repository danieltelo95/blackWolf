import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, registerUser } from "../../firebase";
import { setUser } from '../../store/actions/actions'


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSignup = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User Credential: ", userCredential);
            const user = userCredential.user;
            console.log("User: ", user);
            await registerUser(user)
            dispatch(setUser(user))
        } catch (error) {
            setError(error.message);
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
            {error && <p>{error}</p>}
        </div>   
    )

}

export default Signup;