import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../acctions";

const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    };

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
                    {
                        hasUser ? <li><a href="/">{user.name}</a></li>
                        : null
                    }
                    
                    {
                        hasUser ? <li><a href="#logout" onClick={handleLogout}>Cerrar Sesi&oacute;n</a></li>
                        : <li> <Link to="/login">Inicia Sesi&oacute;n</Link> </li>
                    }
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

const mapDispatchToProps = {
    logoutRequest
};

Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);