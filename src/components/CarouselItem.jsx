import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/components/CarouselItems.scss";
import { setFavorite, deleteFavorites } from "../acctions";

const CarouselItem = props => {
    const { id, cover, title, year, contentRating, duration, isList } = props;

    const handleSetFavorites = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        });
    }

    const handleDeleteFavorites = itemId => {
        props.deleteFavorites(itemId);
    }

    return (
        <div className="carrusel-item">
            <img className="carrusel-item__imagen" src={cover} alt={title} />
            <div className="carrusel-item__detalles">
                <div>
                    <Link to={`/player/${id}`}>
                        <i className="fas fa-play"></i>
                    </Link>
                    {
                        isList ? 
                        <i className="fas fa-trash-alt" onClick={() => handleDeleteFavorites(id)}></i> :
                        <i className="fas fa-plus-circle" onClick={handleSetFavorites}></i> 
                    }
                </div>
                <p className="carrusel-item__detalles--titulo">{title}</p>
                <p className="carrusel-item__detalles--subtitulo">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorites
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
};

export default connect(null, mapDispatchToProps)(CarouselItem);