import { signOut } from "firebase/auth";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { clearUser, setUser } from "../../store/reducer/userReducer";
import { onAuthStateChanged } from "firebase/auth";
import cursosImage from '../../assets/images/curso-online.png'
import cartasImage from '../../assets/images/carta-de-tarot.png'
import "./Header.css"

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
                    <div className="grid grid-cols-5 grid-rows-1 gap-0 mt-4">
                        <div className="col-start-3">
                            <button className="option-button">
                                <img
                                    src={cursosImage}
                                    alt="cursos"
                                />
                                Cursos
                            </button>
                        </div>
                        <div className="col-start-4">
                            <button className="option-button">
                                <img
                                    src={cartasImage}
                                    alt="cartas"
                                />
                                Cartas
                            </button>
                        </div>
                    </div>
    
                    {/* <li><button><Link to="/">Inicio</Link></button></li> */}
                    {/* {user ? (
                        <>
                            {role === 'admin' ? (
                                <>
                                    <li><button className="header-button"><Link to='/cursos'>Cursos</Link></button></li>
                                    <li><button className="header-button"><Link to='/adminpanel'>Panel de Administrador</Link></button></li>
                                </>
                            ) : (
                                <li><button><Link to='/mis-cursos'>Mis Cursos</Link></button></li>
                            )}
                            <li><button onClick={handleLogout}>Cerrar sesión</button></li>
                        </>
                    ) : (
                        <>
                            <li><button className="header-button"><Link to='/login'>Iniciar sesión</Link></button></li>
                            <li><button className="header-button"><Link to='/signup'>Registrarse</Link></button></li>
                        </>
                    )} */}                            
            </nav>
        </div>
    );
}

export default Header;
