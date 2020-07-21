import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItems.scss";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carrusel-item">
        <img className="carrusel-item__imagen" src={cover} alt={title} />
        <div className="carrusel-item__detalles">
            <div>
                <i className="fas fa-play"></i>
                <i className="fas fa-plus-circle"></i>
            </div>
            <p className="carrusel-item__detalles--titulo">{title}</p>
            <p className="carrusel-item__detalles--subtitulo">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
};

export default CarouselItem;