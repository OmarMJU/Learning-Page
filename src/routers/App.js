import React from "react";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Layout from "../components/Layout";
import Player from "../containers/Player";
import NotFound from "../containers/NotFound";
import Registrer from "../containers/Registrer";
import { BrowserRouter, Route, Switch }  from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registrer" component={Registrer} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;