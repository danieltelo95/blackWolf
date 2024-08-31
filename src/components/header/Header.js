import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(        
        <div>
            <nav>
                <div className="grid grid-cols-4 grid-rows-2 gap-0">
                    <div className="row-start-2 flex justify-around list-none text-slate-200">
                        <li>Sobre mí</li>
                        <li><Link to="/">Inicio</Link></li>
                    </div>
                    <div className="col-span-2 col-start-3 row-start-2 flex justify-around list-none text-slate-200">
                        <li><Link to='/login'>Iniciar sesión</Link></li>
                        <li><Link to='/signup'>Registrarse</Link></li>
                    </div>               
                </div>
            </nav>
        </div>
    )
}

export default Header;