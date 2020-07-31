import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";
import Contact from "./Contact";
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="App-nav">
                <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
                <NavLink exact activeClassName="active-link" to="/cat">Cat</NavLink>
                <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
                <NavLink exact activeClassName="active-link" to="/contacts">Contact Us</NavLink>

            </nav>
            <Switch>
                <Route exact path="/cat" render={()=><Cat/>}/>
                <Route exact path="/contacts" render={()=><Contact/>}/>
                <Route exact path="/dog" render={()=><Dog/>}/>
                <Route exact path="/" render={()=><Home/>}/>

            </Switch>

        </div>
    );
}

export default App;
