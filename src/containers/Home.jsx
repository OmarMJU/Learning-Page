import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals }) => {
    return (
        <div className="app">
            <Search/>

            {myList.length > 0 && <Categories title="Mi lista" icon="fas fa-list" />}
            {
                myList.length > 0 &&
                    <Carousel>
                        {
                            myList.map(item => <CarouselItem key={item.id} { ...item }/>)
                        }
                    </Carousel>
            }

            <Categories title="Tendencias" icon="fas fa-star" />
            <Carousel>
                {
                    trends.map(item => <CarouselItem key={item.id} { ...item }/>)
                }
            </Carousel>

            <Categories title="Originales" icon="fas fa-rocket" />
            <Carousel>
                {
                   originals.map(item => <CarouselItem key={item.id} { ...item } />) 
                }
            </Carousel>
        </div>
    );
}

const mapStoreToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
};

export default connect(mapStoreToProps, null)(Home);