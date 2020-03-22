import React, {Component} from 'react';
import Form from "./Form";
import './App.css'
class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name:""};
    }

    handleSubmit(name){
        this.setState({name:name});

    }
    render() {
        return (
            <div className="App">
            <Form submit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;