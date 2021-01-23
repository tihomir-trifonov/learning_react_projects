import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio"
import Projects from "../components/Projects"
import Header from "../components/Header"
import Home from "../components/Home"
import NotFoundPage from "../components/NotFoundPage"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/portfolio" component={Portfolio} exact/>
                <Route path="/portfolio/:id" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
