import React, {Component} from 'react';
import Box from "./Box";
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numberOfBoxes:18,
        allColors:["maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua" ]
    };
    render() {
        const boxes = Array.from({length:this.props.numberOfBoxes}).map(
            ()=><Box colors={this.props.allColors}/>
            );
        return (
            <div className={'BoxContainer'}>
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;