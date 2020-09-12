import React from "react";
import App from "./routers/App"
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
        {
            "id": 1,
            "slug": "tvshow-2",
            "title": "Hand Cannot Erase",
            "type": "Music",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 413,
            "cover": "https://i.ytimg.com/vi/A64J8mo8oZE/maxresdefault.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/A64J8mo8oZE?autoplay=1"
        },
        {
            "id": 2,
            "slug": "tvshow-3",
            "title": "Vicarious",
            "type": "Music",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 846,
            "cover": "https://i.pinimg.com/originals/4b/9a/73/4b9a7310ef08b0eb3fd80d9996ed203b.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/h_TUP2vuaDs?autoplay=1"
        },
        {
            "id": 3,
            "slug": "tvshow-4",
            "title": "Forsaken",
            "type": "Metal",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://www.animenewsnetwork.com/images/cms/press-release/21308/forsaken-still-4-1.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/dRBP1rpE5y8?autoplay=1"
        },
        {
            "id": 4,
            "slug": "tvshow-5",
            "title": "COD - S9",
            "type": "Game",
            "language": "English",
            "year": 2020,
            "contentRating": "16+",
            "duration": 313,
            "cover": "https://i.ytimg.com/vi/UGeGT7Qodfo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDjG_2-xaJEp0PVkXXgA6swo-cwGQ",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/UGeGT7Qodfo?autoplay=1"
        },
        {
            "id": 5,
            "slug": "tvshow-6",
            "title": "Sinergy",
            "type": "Drums",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 433,
            "cover": "https://i.pinimg.com/originals/ed/f8/be/edf8bea79c0f9af16ab7b387286d2e40.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/WoPPYD07Nlo?autoplay=1"
        },
        {
            "id": 6,
            "slug": "tvshow-7",
            "title": "Zero",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 1232,
            "cover": "https://animowany.pl/wp-content/uploads/2011/08/zero1.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/LOMbySJTKpg?autoplay=1"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "Infinite Fire",
            "type": "Musik",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 1155,
            "cover": "https://i.pinimg.com/originals/30/13/1c/30131c73eeec32472e7836897d875748.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/ablME8jlpdk?autoplay=1"
        },
        {
            "id": 8,
            "slug": "tvshow-7",
            "title": "Happy Returns",
            "type": "Music",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 507,
            "cover": "https://www.laestadea.com/wp-content/uploads/2016/11/steven-wilson-y-el-video-de-happy-returns.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/l7uls7grg5Y?autoplay=1"
        }
    ],
    "originals": [
        {
            "id": 18,
            "slug": "tvshow-2",
            "title": "Perfect Life",
            "type": "Music",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 444,
            "cover": "https://i.ytimg.com/vi/gOU_zWdhAoE/maxresdefault.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/gOU_zWdhAoE?autoplay=1"
        },
        {
            "id": 19,
            "slug": "tvshow-3",
            "title": "Hell's Kitchen",
            "type": "Music",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 422,
            "cover": "https://i.ytimg.com/vi/DsW5ecIKGig/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAPEOKWZq-7q3JTCPJ4ehgh7vvC2g",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/DsW5ecIKGig?autoplay=1"
        },
        {
            "id": 20,
            "slug": "tvshow-4",
            "title": "Carless Whisper",
            "type": "Music",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 512,
            "cover": "https://i.ytimg.com/vi/6Ovj_XK6yqc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAY5QJK6srqRNJXPvtIM6ghPZf19A",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/6Ovj_XK6yqc?autoplay=1"
        },
        {
            "id": 21,
            "slug": "tvshow-5",
            "title": "Euphoira",
            "type": "Scripted",
            "language": "English",
            "year": 2016,
            "contentRating": "16+",
            "duration": 415,
            "cover": "https://newnoisemagazine.com/wp-content/uploads/2016/02/Polyphia-band-2016.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/oi1ZKRHa_KI?autoplay=1"
        },
        {
            "id": 22,
            "slug": "tvshow-6",
            "title": "Way Out Of Here",
            "type": "Scripted",
            "language": "English",
            "year": 2008,
            "contentRating": "16+",
            "duration": 416,
            "cover": "https://lyricsongworld.files.wordpress.com/2013/04/nlo110700367_640x480_01.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/AZiHTvtB118?autoplay=1"
        },
        {
            "id": 23,
            "slug": "tvshow-7",
            "title": "Drive Home",
            "type": "Drama",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 820,
            "cover": "https://i.ytimg.com/vi/ycYewhiaVBk/maxresdefault.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/ycYewhiaVBk?autoplay=1"
        },
        {
            "id": 24,
            "slug": "tvshow-7",
            "title": "Syndi Nicole",
            "type": "Funny",
            "language": "English",
            "year": 2020,
            "contentRating": "16+",
            "duration": 209,
            "cover": "https://p16-va-default.akamaized.net/img/musically-maliva-obj/1663573295818758~c5_720x720.jpeg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/ZNPzHDoddr8?autoplay=1"
        },
        {
            "id": 25,
            "slug": "tvshow-7",
            "title": "Mr. Blue Sky",
            "type": "Music",
            "language": "English",
            "year": 1977,
            "contentRating": "16+",
            "duration": 343,
            "cover": "https://imgs.smoothradio.com/images/47168?crop=16_9&width=660&relax=1&signature=apmbKx6g-cqr_nS4Qk8lbQi4Bu0=",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/G8dsvclf3Tk?autoplay=1"
        },
        {
            "id": 26,
            "slug": "tvshow-7",
            "title": "Back in The Day",
            "type": "Music",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 345,
            "cover": "https://i.ytimg.com/vi/9566zbyDezo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDY1JvIJFUHRH3SQ00GmGXrOHCxtw",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/9566zbyDezo?autoplay=1"
        }
    ]
};

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhansers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);