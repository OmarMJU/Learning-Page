import React from "react";
import "../assets/styles/components/Login.scss";

const Login = () => (
    <section className="login">
        <section className="login__contenedor">
            <h2>Inicia Sesi&oacute;n</h2>
            <form action="" className="login__contenedor--from">
                <input type="text" className="input" placeholder="Correo"/>
                <input type="password" className="input" placeholder="Contraseña"/>
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
            <p className="login__contenedor--registro">&iquest;No tienes cuenta? <a href="registro.html">Reg&iacute;strate</a></p>
        </section>
    </section>
);

export default Login;