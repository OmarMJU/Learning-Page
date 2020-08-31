import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Footer.scss";

const Footer = props => {
    const { isLoginF, isRegistrerF } = props;

    const footerClass = classNames("footer", {
        isLoginF,
        isRegistrerF
    });

    return (
        <footer className={footerClass}>
            <a href="/">T&eacute;rminos de uso</a>
            <a href="/">Declaraci&oacute;n de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    );
};

export default Footer;