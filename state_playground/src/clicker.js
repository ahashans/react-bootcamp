import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:0
        };
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        let rand = Math.floor(Math.random() * 10)+1;
        this.setState({value:rand});
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.value}</h1>
                {this.state.value===7
                    ?<h1>YOU WIN!</h1>
                    : <button onClick={this.handleClick} className={"form-control"}>Random Number</button>
                }
            </div>
        );
    }
}

export default Clicker;