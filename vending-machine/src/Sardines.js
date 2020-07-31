import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sardines extends Component {
    // componentDidMount() {
    //     console.log("Sardine Component mounted");
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Sardine Component updated");
    // }
    // componentWillUnmount() {
    //     console.log("Sardine Component is un-mounting");
    // }
    render() {
        // console.log("Sardine Component rendering!");
        return (
            <div>
                <h1>Fresh Sardines</h1>
                <Link to="/" className="link">Go Back</Link>

            </div>
        );
    }
}

export default Sardines;