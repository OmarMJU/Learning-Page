import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
    // Se agrega el estado.
    // - videos: El valor del estado.
    // - setVideos: Función que permite actulizar el estado.
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    const API = "http://localhost:3000/initalState";

    // Se agrega el ciclo de vida.
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);

    return (
        <div className="app">
            <Header/>
            <Search/>

            {videos.mylist.length > 0 && <Categories title="Mi lista" icon="fas fa-list" />}
            {
                videos.mylist.length > 0 &
                    <Carousel>
                        <CarouselItem/>
                    </Carousel>
            }

            <Categories title="Tendencias" icon="fas fa-star" />
            <Carousel>
                {
                    videos.trends.map(item => <CarouselItem key={item.id} { ...item }/>)
                }
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
}

export default App;