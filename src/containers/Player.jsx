import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../acctions";
import { Redirect } from "react-router-dom";
import "../assets/styles/components/Player.scss";

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="player">
            <iframe src={props.playing.source} frameBorder="0"></iframe>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>Regresar</button>
            </div>
        </div>
    ) : setTimeout(<Redirect to="/404/"/>, 0);
};

const mapStateToProps = state => {
    return {
        playing : state.playing
    };
};

const mapsDispatchToProps = {
    getVideoSource
};

export default connect(mapStateToProps, mapsDispatchToProps)(Player);