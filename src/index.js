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
            "title": "In the Dark",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://images.unsplash.com/photo-1554180842-41b1dd69d588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 19,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://images.unsplash.com/photo-1585909695546-032f24b95d41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 20,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://images.unsplash.com/photo-1586000676572-d6f4a9c47144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 21,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 22,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://images.unsplash.com/photo-1502318217862-aa4e294ba657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1258&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 23,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 24,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 25,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://images.unsplash.com/photo-1587018997137-475c3c22db7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 26,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://images.unsplash.com/photo-1547071286-4c6552bbe26b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
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