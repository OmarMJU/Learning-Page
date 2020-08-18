import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFavorite } from "../acctions";
import "../assets/styles/components/CarouselItems.scss";

const CarouselItem = (props) => {
    const { cover, title, year, contentRating, duration } = props;

    const handleSetFavorites = () => {
        props.setFavorite({
            cover, title, year, contentRating, duration
        });
    }

    return (
        <div className="carrusel-item">
            <img className="carrusel-item__imagen" src={cover} alt={title} />
            <div className="carrusel-item__detalles">
                <div>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-plus-circle" onClick={handleSetFavorites}></i>
                </div>
                <p className="carrusel-item__detalles--titulo">{title}</p>
                <p className="carrusel-item__detalles--subtitulo">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    setFavorite
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
};

export default connect(null, mapDispatchToProps)(CarouselItem);