import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import "./Navbar.css"
import {AuthContext} from "../Contexts/AuthContext";

class Navbar extends Component {
    static contextType = AuthContext;

    render() {
        const authNavItem = this.context.isAuthenticated
            ? <NavLink exact to="/logout" className="Nav-item-right" activeClassName="Nav-item-active">Logout</NavLink>
            : <NavLink exact to="/login" className="Nav-item-right" activeClassName="Nav-item-active">Login</NavLink>


        return (
            <nav className="Nav">
                <NavLink exact to="/" className="Nav-header" activeClassName="Nav-item-active">Home</NavLink>
                <NavLink exact to="/other" className="Nav-item" activeClassName="Nav-item-active">Others</NavLink>
                {authNavItem}
            </nav>
        );
    }
}

export default withRouter(Navbar);