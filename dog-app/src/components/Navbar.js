import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {DogContext} from "../contexts/DogContext";
import "./Navbar.css"
class Navbar extends Component {
    static contextType= DogContext;
    render() {
        const dogNavs= this.context.map(function (dog,i) {
            return <NavLink exact to={`/dogs/${dog.name}`} className="Nav-item" activeClassName="Nav-item-active" key={i}>{dog.name}</NavLink>
        });
        return (
            <nav className="Nav">
                <NavLink exact to="/dogs" className="Nav-header" activeClassName="Nav-item-active">Dog Shelter</NavLink>
                {dogNavs}
            </nav>
        );
    }
}

export default withRouter(Navbar);