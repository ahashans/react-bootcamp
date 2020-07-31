import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Chips extends Component {
    // componentDidMount() {
    //     console.log("Chips Component mounted");
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Chips Component updated");
    // }
    // componentWillUnmount() {
    //     console.log("Chips Component is un-mounting");
    // }


    render() {
        // console.log("Chips Component rendering!");
        const chips=this.props.match.params.name;
        return (
            <div>
                <h1>Chips</h1>
                <h3>{chips}</h3>
                <Link to="/" className="link">Go Back</Link>
            </div>
        );
    }
}

export default Chips;