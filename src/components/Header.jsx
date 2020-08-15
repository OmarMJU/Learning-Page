import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Imagen de PlatziVideo" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <span className="far fa-user-circle fa-2x"></span>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li> <Link to="/login">Cerrar Sesi&oacute;n</Link> </li>
            </ul>
        </div>
    </header>
);

export default Header;