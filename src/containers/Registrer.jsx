import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";

const Registrer = () => {
    const [form, setValues] = useState({
        email: "",
        name: "",
        password: ""
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <section className="login">
            <section className="login__contenedor">
                <h2>Registrate</h2>
                <form action="" className="login__contenedor--from" onSubmit={handleSubmit}>
                    <input name="name" type="text" className="input" placeholder="Nombre" onChange={handleInput}/>
                    <input name="email" type="text" className="input" placeholder="Correo" onChange={handleInput}/>
                    <input name="password" type="password" className="input" placeholder="Contraseña" onChange={handleInput}/>
                    <input type="password" className="input" placeholder="Conf. Contraseña" />
                    <button className="boton">Registrate</button>
                </form>
                <p className="login__contenedor--registro">
                    <Link to="/login">Inicia Sesi&oacute;n</Link>
                </p>
            </section>
        </section>
    );
}

export default Registrer;