import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Soda extends Component {
    // componentDidMount() {
    //     console.log("Soda Component mounted");
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Soda Component updated");
    // }
    // componentWillUnmount() {
    //     console.log("Soda Component is un-mounting");
    // }
    render() {
        // console.log("Soda Component rendering!");
        const soda=this.props.match.params.name;

        return (
            <div>
                <h1>Soda</h1>
                <h3>{soda}</h3>
                <Link to="/" className="link">Go Back</Link>

            </div>
        );
    }
}

export default Soda;