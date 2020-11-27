import React from "react";
import { connect } from "react-redux";
import { setSerching } from "../acctions";
import "../assets/styles/components/Search.scss";

const Search = props => {
    const { trends, originals } = props;
    const allVideos = trends.concat(originals);

    const handleSearch = event => {
        const keyCode = event.key;
        const titleName = idSearch.value;

        if(keyCode === "Enter" && titleName !== "") {
            const nameVideos = allVideos.filter(video => {
                if (video.title.toLowerCase().includes(titleName.toLowerCase())) {
                    return video;
                }
            });

            props.setSerching(nameVideos);
        }
    };

    return (
        <section className="main">
            <h2 className="main__title">&iquest;Qu&eacute; quieres ver hoy?</h2>
            <input id="idSearch" className="input-buscar" type="text" placeholder="Buscar..." onKeyUp={handleSearch} />
        </section>
    );
}

const mapStateToProps = state => {
    return {
        trends: state.trends,
        originals: state.originals
    };
};

const mapDispatchToProps = {
    setSerching
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);