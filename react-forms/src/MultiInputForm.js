import React, {Component} from 'react';
class MultiInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {username:"", email:"", password:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        let user={
            username:this.state.username,
            email:this.state.email,
            password: this.state.password
        };
        this.props.submit(this.state);
        this.setState({username:"", email:"", password:""})
    }
    render() {
        return (
            <div>
                <h1>Multi Input Form</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" name="password" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MultiInputForm;