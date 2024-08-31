import React, {useState} from "react";
import { auth, signInWithEmailAndPassword} from '../../firebase/firebase'
import './Login.css'

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
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2x1 font-bold mb-4">Iniciar Sesión</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div></div>
            <form onSubmit={handleLogin} className="glass-effect w-full max-w-sm">
                <div className="flex flex-col mb-4">
                <label 
                    htmlFor="email"
                    className="block text-gray-500 font-bold mb-1"
                >
                    Correo electrónico
                </label>
                    <input  
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-purple-500"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                    <div className="flex flex-col mt-4 mb-4">
                    <label 
                        htmlFor="password"
                        className="block text-gray-500 font-bold mb-1"
                    >
                        Contraseña
                    </label>
                    <input
                        className="bg-gray-200 appearance/none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='flex-col mb-6'></div>
                <div className="flex justify-center">
                        <button
                            type="submit"
                            className="button-custom"
                        >
                        <span>Iniciar sesión </span>
                        </button>
                </div>
            </form>
        </div>

    )
}

export default LoginForm;