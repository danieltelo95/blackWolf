import React from "react";

const Header = () => {
    return(
        <div>
            <nav>
                <div className="grid grid-cols-4 grid-rows-2 gap-0 bg-primary">
                    <div className="row-start-2 flex justify-around list-none">
                        <li>Sobre mí</li>
                        <li>Inicio</li>
                    </div>
                    <div className="col-span-2 col-start-3 row-start-2 flex justify-around list-none">
                        <li>Iniciar sesión</li>
                        <li>Registrarse</li>
                    </div>               
                </div>
            </nav>
        </div>
    )
}

export default Header;