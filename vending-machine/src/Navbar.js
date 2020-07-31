import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
    render() {
        return (
            <nav className="Nav">
                <NavLink className="Nav-item" activeClassName="Nav-item-active" exact to="/">Home</NavLink>
                <NavLink className="Nav-item" activeClassName="Nav-item-active" exact to="/chips">Chips</NavLink>
                <NavLink className="Nav-item" activeClassName="Nav-item-active" exact to="/soda">Soda</NavLink>
                <NavLink className="Nav-item" activeClassName="Nav-item-active" exact to="/sardine">Fresh Sardines</NavLink>
            </nav>
        );
    }
}

export default Navbar;