import React from "react";
import "../assets/styles/components/CarouselItems.scss";

const CarouselItem = () => (
    <div className="carrusel-item">
        <img className="carrusel-item__imagen" src="imgs/01.jpg" alt="Playa" />
        <div className="carrusel-item__detalles">
            <div>
                <i className="fas fa-play"></i>
                <i className="fas fa-plus-circle"></i>
            </div>
            <p className="carrusel-item__detalles--titulo">Titulo descriptivo</p>
            <p className="carrusel-item__detalles--subtitulo">2020 16+ 145 min</p>
        </div>
    </div>
);

export default CarouselItem;