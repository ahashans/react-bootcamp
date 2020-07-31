import React, {Component} from 'react';
import {AuthContext} from "../Contexts/AuthContext";

class Home extends Component {
    static contextType = AuthContext;
    render() {
        return (
            <div>
                <h1>Home</h1>
                {/*<h3>{this.context.}</h3>*/}
            </div>
        );
    }
}

export default Home;