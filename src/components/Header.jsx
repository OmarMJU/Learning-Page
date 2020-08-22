import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";

const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src="https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png" alt="Imagen de PlatziVideo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} /> :
                        <span className="far fa-user-circle fa-2x"></span>
                    } 
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li> <Link to="/login">Cerrar Sesi&oacute;n</Link> </li>
                </ul>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, null)(Header);