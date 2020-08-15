import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
    const initialState = useInitialState(API);

    return (
        <div className="app">
            <Search/>

            {initialState.mylist.length > 0 && <Categories title="Mi lista" icon="fas fa-list" />}
            {
                initialState.mylist.length > 0 &&
                    <Carousel>
                        {
                            initialState.mylist.map(item => <CarouselItem key={item.id} { ...item }/>)
                        }
                    </Carousel>
            }

            <Categories title="Tendencias" icon="fas fa-star" />
            <Carousel>
                {
                    initialState.trends.map(item => <CarouselItem key={item.id} { ...item }/>)
                }
            </Carousel>

            <Categories title="Originales" icon="fas fa-rocket" />
            <Carousel>
                {
                   initialState.originals.map(item => <CarouselItem key={item.id} { ...item } />) 
                }
            </Carousel>
        </div>
    );
}

export default Home;