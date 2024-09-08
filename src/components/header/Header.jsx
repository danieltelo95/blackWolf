import { signOut } from "firebase/auth";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { clearUser, setUser } from "../../store/reducer/userReducer";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, role } = useSelector((state) => state.user || { user: null, role: null });
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // Usuario autenticado
                const userRole = firebaseUser.email === 'admin@example.com' ? 'admin' : 'user'; 
                dispatch(setUser({ user: { uid: firebaseUser.uid, email: firebaseUser.email, displayName: firebaseUser.displayName}, role: userRole }));
            } else {
                // Usuario no autenticado
                dispatch(clearUser());
            }
        });

        return () => unsubscribe(); // Limpia la suscripción al desmontar el componente
    }, [dispatch]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(clearUser());
            navigate('/login')
        } catch (error) {
            console.error('Error al cerrar sesión: ', error);
        }
    }

    return(        
        <div>
            <nav>
                    {user && (
                        <>
                        <div className="row-start-2 flex justify-around list-none text-slate-200">
                        <div className="grid grid-cols-4 grid-rows-2 gap-0"></div>
                            <li><Link to="/">Inicio</Link></li>
                                {role === 'admin' ? (
                                    <>
                                        <li><Link to='/cursos'>Cursos</Link></li>
                                        <li><Link to='/adminpanel'>Panel de Administrador</Link></li>
                                    </>
                                ) : (
                                    <li><Link to='/mis-cursos'>Mis Cursos</Link></li>
                                )}
                            <li><button onClick={handleLogout}>Cerrar sesión</button></li>                                                   
                        </div>
                        </>
                    )}
                    {!user && (
                        <div className="col-span-2 col-start-3 row-start-2 flex justify-around list-none text-slate-200">
                            <li>Sobre mí</li>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to='/login'>Iniciar sesión</Link></li>
                            <li><Link to='/signup'>Registrarse</Link></li>
                        </div>               
                    )}
            </nav>
        </div>
    )
}

export default Header;