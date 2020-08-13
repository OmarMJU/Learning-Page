import React from "react";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Registrer from "../containers/Registrer";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrer" component={Registrer} />
        </Switch>
    </BrowserRouter>
);

export default App;