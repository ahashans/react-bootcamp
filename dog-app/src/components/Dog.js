import React, {Component} from 'react';
import {DogContext} from "../contexts/DogContext";
import "./Dog.css"

class Dog extends Component {
    static contextType = DogContext;
    render() {
        const dog = {...this.context.find(d => d.name === this.props.match.params.name)};
        const facts = dog.facts.map(function (fact) {
            return (<React.Fragment>
                <hr/>
                <h5 className="Dog-desc-facts">{fact}</h5>

            </React.Fragment>);
        });
        return (
            <div className="Dog">
                <img src={process.env.PUBLIC_URL + "/" + dog.src} alt=""/>
                <div className="Dog-desc">
                    <h1 className="Dog-desc-header">{dog.name}</h1>
                    <h3 className="Dog-desc-header-sub">{`${dog.age} years old`} </h3>
                    {facts}
                    <hr/>
                    <button onClick={()=>this.props.history.push("/dogs")}>Go back</button>
                </div>
            </div>
        );
    }
}

export default Dog;