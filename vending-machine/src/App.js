import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./Home";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import Navbar from "./Navbar";
import Error404 from "./Error404";
import Search from "./Search";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/chips" component={Chips}/>
                <Route exact path="/chips/search" component={Search}/>
                <Route exact path="/chips/:name" component={Chips}/>
                <Route exact path="/soda" component={Soda}/>
                <Route exact path="/soda/:name" component={Soda}/>
                <Route exact path="/sardine" component={Sardines}/>
                <Route component={Error404}/>
            </Switch>

        </div>
    );
}

export default App;
