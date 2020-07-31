import React from 'react';
import {Switch, Route, NavLink} from "react-router-dom"
import './App.css';
import Dogs from "./components/Dogs";
import {DogProvider} from "./contexts/DogContext";
import Error404 from "./components/Error404";
import Navbar from "./components/Navbar";
import Dog from "./components/Dog";

class App extends React.Component{

    render() {
        return (
            <div className="App">
                <DogProvider><Navbar/></DogProvider>
                <Switch>
                    <Route exact path="/" component={(routerProps)=><DogProvider><Dogs {...routerProps}/></DogProvider>}/>
                    <Route exact path="/dogs" component={(routerProps)=><DogProvider><Dogs {...routerProps}/></DogProvider>}/>
                    <Route exact path="/dogs/:name" component={(routerProps)=><DogProvider><Dog {...routerProps}/></DogProvider>}/>
                    <Route component={Error404}/>
                </Switch>
            </div>
        );
    }
}


export default App;
