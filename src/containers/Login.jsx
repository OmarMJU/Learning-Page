import { connect } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { loginRequest } from "../acctions"; 
import "../assets/styles/components/Login.scss";

const Login = props => {
    const [form, setValues] = useState({
        email: ""
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push("/");
    }

    return (
        <>
            <Header isLogin/>
            <section className="login">
                <section className="login__contenedor">
                    <h2>Inicia Sesi&oacute;n</h2>
                    <form action="" className="login__contenedor--from" onSubmit={handleSubmit}>
                        <input name="email" type="text" className="input" placeholder="Correo" onChange={handleInput}/>
                        <input name="password" type="password" className="input" placeholder="Contraseña" onChange={handleInput}/>
                        <button className="boton">Inicia Sesi&oacute;n</button>
                        <div className="login__contenedor-recuerdame">
                            <label>
                                <input type="checkbox" name="" id="cbox1" value="checkbox"/> Recu&eacute;rdame
                            </label>
                            <a href="/">Olvid&eacute; mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__contenedor--social">
                        <div>
                            <i className="fab fa-google"></i>
                            <p>Inicia sesi&oacute;n con Google</p>
                        </div>
                        <div>
                            <i className="fab fa-twitter"></i>
                            <p>Inicia sesi&oacute;n con Twitter</p>
                        </div>
                    </section>
                    <p className="login__contenedor--registro">
                        &iquest;No tienes cuenta?
                        <Link to="/registrer">  Reg&iacute;strate</Link>
                    </p>
                </section>
            </section>
            <Footer isLoginF/>
        </>
    )
}

const mapDispatchToProps = {
    loginRequest
};

export default connect(null, mapDispatchToProps)(Login);