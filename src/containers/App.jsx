import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => (
    <div className="app">
        <Header/>
        <Search/>
        <Categories title="Mi lista" icon="fas fa-list" />
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
        <Categories title="Tendencias" icon="fas fa-star" />
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
        <Categories title="Originales" icon="fas fa-rocket" />
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
        <Footer/>
    </div>
);

export default App;