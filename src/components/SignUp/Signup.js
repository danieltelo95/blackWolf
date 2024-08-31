import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase/firebase'; // Asegúrate de configurar Firebase correctamente
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

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

            // Agregar información del usuario en Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                role: 'user', // Rol por defecto, puedes cambiarlo según tus necesidades
            });
            console.log("Registro Exitoso: ", user);
            
            navigate('/'); // Redirigir a la página principal u otra página
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Registrarse</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp} className="space-y-4">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-4"
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-4"
                />
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="mb-4"
                />
                <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
