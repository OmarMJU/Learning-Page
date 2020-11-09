import React from "react";
import "../assets/styles/App.scss";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import CarouselItem from "../components/CarouselItem";

const Home = ({ myList, trends, originals, serching }) => {
    return (
        <div className="app">
            <Header/>
            <Search/>

            {serching.length > 0 && <Categories title="Busqueda" icon="fas fa-search" />}
            {/*
                serching.length > 0 && 
                    <Carousel>
                        {
                            console.log("Desde el Home", serching),
                            serching.map(item => <CarouselItem key={item.id} { ...item }/>)
                        }
                    </Carousel>
                    */}

            {myList.length > 0 && <Categories title="Mi lista" icon="fas fa-list" />}
            {
                myList.length > 0 &&
                    <Carousel>
                        {
                            myList.map(item => <CarouselItem key={item.id} { ...item } isList/>)
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
            
            <Footer/>
        </div>
    );
}

const mapStoreToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        serching: state.serching
    }
};

export default connect(mapStoreToProps, null)(Home);