import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Protected from "./Components/Protected";
import Error404 from "./Components/Error404";
import PrivateRoute from "./PrivateRoute";

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute exact to="/other">
                        <Protected/>
                    </PrivateRoute>
                    <Route exact component={Error404}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;