import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/reducer/userReducer";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from '../../firebase/firebase';
import './Login.css';

const adminEmail = 'admin@example.com';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '', // handle if displayName is null
      };

      const role = user.email === adminEmail ? 'admin' : 'user';
      
      dispatch(setUser({ user: userData, role }));
      navigate('/');
    } catch (error) {
      console.error('Error al iniciar sesión con Google: ', error);
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || '', // handle if displayName is null
      };

      const role = user.email === adminEmail ? 'admin' : 'user';
      
      dispatch(setUser({ user: userData, role }));
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-custom text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin} className="glass-effect w-full max-w-sm">
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-1">Correo electrónico</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-white focus:border-cyan-200"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mt-4 mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-1">Contraseña</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-cyan-200"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button type="button" className="button-custom" onClick={handleGoogleLogin}>
            Iniciar sesión con Google
          </button>
          <button type="submit" className="button-custom">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
