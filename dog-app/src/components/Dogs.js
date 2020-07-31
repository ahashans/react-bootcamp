import React, {Component} from 'react';
import {DogContext} from "../contexts/DogContext";
import "./Dogs.css"
import {Link} from "react-router-dom";
class Dogs extends Component {
    static contextType= DogContext;
    render() {
        const dogs=this.context.map(function (dog,i) {
            return(
                <div className="Dogs-list-item">
                    <img src={dog.src} alt={dog.name}/>
                    <Link to={`/dogs/${dog.name}`} activeClassName="Dogs-list-item-active">{dog.name} </Link>
                </div>
            );
        });
        return (
            <div className="Dogs">
                <h1 className="Dogs-title">Click a Dog!</h1>
                <div className="Dogs-list">
                    {dogs}
                </div>
            </div>
        );
    }
}

export default Dogs;