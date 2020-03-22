import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={name:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        let name = e.target.value;
        this.setState({name:name});
        // this.props.submit(name);
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} autoComplete="off"/>
                    <button type="submit">Submit</button>
                </form>
            <p>You typed: {this.state.name}</p>

            </div>
        );
    }
}

export default Form;