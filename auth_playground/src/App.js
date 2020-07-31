import React, {Component} from 'react';
import './App.css';

import {AuthProvider} from "./Contexts/AuthContext";
import Routes from "./Routes";
import Navbar from "./Components/Navbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AuthProvider>
                    <Navbar/>
                    <Routes/>
                </AuthProvider>
            </div>
        );
    }
}

export default App;

