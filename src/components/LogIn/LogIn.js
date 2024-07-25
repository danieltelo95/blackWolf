import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { setUser } from "../../store/actions/actions";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user));
        } catch(error) {
            console.error("Eror logging in: ", error);
        }
    };

    return (
        <div>
        <h2>Login</h2>
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
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default Login;