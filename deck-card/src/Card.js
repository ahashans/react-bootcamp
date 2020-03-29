import React, {Component} from 'react';
import "./Card.css";
class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random()*90 -45;
        let xPos= Math.random()*40-20;
        let yPos = Math.random()*40-20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    }
    render() {
        return (
            <img className="Card" src={this.props.image.png } alt={this.props.name} style={{transform:this._transform}}/>
        );
    }
}

export default Card;