import React, {useState} from "react";
import { auth, signInWithEmailAndPassword} from '../../firebase/firebase'

const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('logged in: ', userCredential.user);
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            {error && <p>{error}</p>}
            <div></div>
            <form onSubmit={handleLogin} className="space-y-4">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div></div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div></div>
                <button
                    type="submit"
                >
                    Iniciar sesión
                </button>
            </form>
        </div>

    )
}

export default LoginForm;