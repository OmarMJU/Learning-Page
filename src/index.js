import React from "react";
import App from "./routers/App"
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById("app")
);