import React from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const Header = () => {

    const { user, role } = useSelector((state) => state.user || { user: null, role: null });
    
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
                                        <li><Link to='/admin-panel'>Panel de Administrador</Link></li>
                                    </>
                                ) : (
                                    <li><Link to='/mis-cursos'>Mis Cursos</Link></li>
                                )}
                            <li><Link to='/logout'>Cerrar sesión</Link></li>                                                   
                        </div>
                        </>
                    )}
                    {!user && (
                        <div className="col-span-2 col-start-3 row-start-2 flex justify-around list-none text-slate-200">
                            <li>Sobre mí</li>
                            <li><Link to='/login'>Iniciar sesión</Link></li>
                            <li><Link to='/signup'>Registrarse</Link></li>
                        </div>               
                    )}
            </nav>
        </div>
    )
}

export default Header;