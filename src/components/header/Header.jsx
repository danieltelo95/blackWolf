import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { clearUser, setUser } from "../../store/reducer/userReducer";
import { onAuthStateChanged } from "firebase/auth";
import cursosImage from "../../assets/images/curso-online.png";
import cartasImage from "../../assets/images/carta-de-tarot.png";
import andres from "../../assets/images/andres.jpg";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, role } = useSelector((state) => state.user || { user: null, role: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userRole = firebaseUser.email === "admin@example.com" ? "admin" : "user";
        dispatch(
          setUser({ user: { uid: firebaseUser.uid, email: firebaseUser.email, displayName: firebaseUser.displayName }, role: userRole })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 p-4 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex md:flex-row sm:flex-col items-center gap-16 md:gap-8 sm:gap-4">
          {/* Botón de Cursos */}
          <li>
            <Link to="/courses" className="flex items-center gap-2 option-button">
              <img src={cursosImage} alt="Cursos" className="w-10 h-10 sm:w-8 sm:h-8" />
              <span className="sm:text-sm">Cursos</span>
            </Link>
          </li>

          {/* Imagen de Inicio */}
          <li>
            <Link
              to="/"
              className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white"
            >
              <img src={andres} alt="Inicio" className="w-full h-full object-cover transition-transform transform hover:scale-110" />
            </Link>
          </li>

          {/* Botón de Cartas */}
          <li>
            <Link to="/cards" className="flex items-center gap-2 option-button">
              <img src={cartasImage} alt="Cartas" className="w-10 h-10 sm:w-8 sm:h-8" />
              <span className="sm:text-sm">Cartas</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


        // useEffect(() => {
        //     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        //     if (firebaseUser) {
        //         const userRole = firebaseUser.email === "admin@example.com" ? "admin" : "user";
        //         dispatch(
        //         setUser({ user: { uid: firebaseUser.uid, email: firebaseUser.email, displayName: firebaseUser.displayName }, role: userRole })
        //         );
        //     } else {
        //         dispatch(clearUser());
        //     }
        //     });

        //     return () => unsubscribe();
        // }, [dispatch]);

        // const handleLogout = async () => {
        //     try {
        //     await signOut(auth);
        //     dispatch(clearUser());
        //     navigate("/login");
        //     } catch (error) {
        //     console.error("Error al cerrar sesión: ", error);
        //     }
        // };



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