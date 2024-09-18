import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase'; // Asegúrate de configurar Firebase correctamente
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './Signup.css'

const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const role = email === adminEmail ? 'admin' : 'user'

            // Agregar información del usuario en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                role: 'user', // Rol por defecto, puedes cambiarlo según tus necesidades
            });            
            navigate('/login'); // Redirigir al login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-custom text-2xl font-bold mb-4">Registrarse</h2>
            {error && <p>{error}</p>}
            <div></div>
            <form onSubmit={handleSignUp} className="glass-effect w-full max-w-sm">
                <div className="flex flex-col mb-4 w-full">
                <label htmlFor="email" className="block text-white font-bold mb-1">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-cyan-200"
                    />
                </div>
                <div className='flex flex-col mt-4 mb-4 w-full'>
                    <label 
                    htmlFor="password" 
                    className="block text-white font-bold mb-1">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-gray-200 appearance/none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-cyan-200"
                    />
                </div>
                <div className='flex flex-col mt-4 mb-4'>
                    <label 
                    htmlFor="confirmPassword"
                    className="block text-white font-bold mb-1">
                        Confirmar contraseña
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="bg-gray-200 appearance/none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-cyan-200"
                    />
                </div>
                <div className='flex-col mb-6'></div>
                <div className='flex justify-center'>
                    <button type="submit" className="button-custom">
                    <span>Registrarse</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
