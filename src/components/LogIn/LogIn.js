import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { setUser } from "../../store/actions/actions";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            //Obtener los datos del usuario desde Firestore
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
            console.log(["UserSnap: ", userSnap]);

            if (userSnap.exists()) {
              const userData = userSnap.data();
              dispatch(setUser({ ...user, role: userData.role }));
      
              // Redirigir según el rol del usuario
              if (userData.role === 'admin') {
                console.log("Muestra admin panel"); // Cambia '/admin-dashboard' a la ruta de tu panel de admin
              } else {
                console.log("Muestra user panel"); // Cambia '/user-dashboard' a la ruta de tu panel de usuario
              }
            } else {
              console.error("No such document!");
            }
          } catch (error) {
            setError(error.message);
            console.error("Error signing in: ", error);
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
        {error && <p>{error}</p>}
      </div>
    );
}

export default Login;