import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ title, icon }) => (
    <div className="carrusel__titulo">
        <i className={icon}></i>
        <p>{title}</p>
    </div>
);

export default Categories;