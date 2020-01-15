import React, {Component} from 'react';
import Coin from "./Coin";
import './Flipper.css'
class Flipper extends Component {


    constructor(props) {
        super(props);
        this.state={head:0, tail:0, current:''};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const result = Math.round(Math.random())?'head':'tail';
        this.setState(currState=>({
            current:result,
            head:result==='head'?currState.head+1:currState.head,
            tail:result==='tail'?currState.tail+1:currState.tail,
        }));

    }
    render() {
        return (
            <div className='Flipper'>
                <h1>Let's flip a coin!</h1>
                <Coin current={this.state.current}/>
                <button onClick={this.handleClick}>Flip MEEE!</button>
                <p>Up until now Head:{this.state.head} & Tail: {this.state.tail}</p>
            </div>
        );
    }
}

export default Flipper;