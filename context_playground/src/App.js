import React, {createContext, Provider} from 'react';
import Child from "./Child";
// import './App.css';
import {AuthProvider} from "./AuthContext";
import {LangProvider} from "./LangContext";

class App extends React.Component {


    render() {
        return (
            <AuthProvider>
                <LangProvider>
                    <div className="App">
                        <Child/>
                    </div>
                </LangProvider>
            </AuthProvider>

        );
    }
}

export default App;
