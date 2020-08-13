import React from "react";
import "../assets/styles/components/Login.scss";

const Registrer = () => (
    <section className="login">
        <section className="login__contenedor">
            <h2>Registrate</h2>
            <form action="" className="login__contenedor--from">
                <input type="text" className="input" placeholder="Nombre"/>
                <input type="text" className="input" placeholder="Correo"/>
                <input type="password" className="input" placeholder="Contraseña"/>
                <input type="password" className="input" placeholder="Conf. Contraseña"/>
                <button className="boton">Registrate</button>
            </form>
            <p className="login__contenedor--registro"><a href="index.html">Inicia Sesi&oacute;n</a></p>
        </section>
    </section>
);

export default Registrer;