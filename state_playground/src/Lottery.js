import React, {Component} from 'react';
import Ball from './Ball';
import './Lottery.css'
class Lottery extends Component {
    static defaultProps={
        title:'Lotto',
        maxBalls:6,
        maxNum:40
    };
    constructor(props) {
        super(props);
        this.state={
            nums:Array.from({length:this.props.maxBalls})
        };
        this.generate= this.generate.bind(this);
        this.getRandomInt= this.getRandomInt.bind(this);
        this.handleClick = this.generate.bind(this);
    }
    getRandomInt() {
        const max = Math.floor(this.props.maxNum);
        return Math.floor(Math.random() * (max - 1)) + 1; //The maximum is exclusive and the minimum is inclusive
    }
    generate(){
        this.setState(currState=>({
            nums:currState.nums.map(n=>this.getRandomInt())
        }));
    }
    handleClick(){
        this.generate();
    }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map((n, index)=><Ball num={n}/>)}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;