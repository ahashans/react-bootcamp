import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div style={{

                    height: `${this.props.height}em`,
                    width:`${this.props.width}em`,
                    backgroundColor:this.props.color
                }}>

                </div>
                <button onClick={this.props.delete}>X</button>
            </div>
        );
    }
}

export default Box;