import React, {Component} from 'react';
import {axiosInstance} from "../axiosInstance";
import {getSessionCookie, setSessionCookie} from "../Sessions";
import {AuthContext} from "../Contexts/AuthContext";
class Login extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state={email:"", password:"", loadingMsg:"Login here...", isLoading:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        // console.log("loading start");
        this.setState({loadingMsg:"Please wait...", isLoading:true});
        let response  = await axiosInstance.post('/users/login',{...this.state})
            .catch(function (error ) {
                console.log("in promise catch",error);
            });
        if(response){
            let payload = response.data;
            console.log(payload);
            setSessionCookie({ ...payload });
            this.setState({loadingMsg:"You are now logged in.", isLoading:false});
            this.context.updateAuth();
            setTimeout(()=>{
                this.props.history.push("/other");
            }, 1500);
        }
        else{
            this.setState({loadingMsg:"Incorrect username or password.", isLoading:false});
        }
        console.log("loading end");

    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    componentDidMount() {
        const session = getSessionCookie();
        if(Object.keys(session).length !== 0){
            this.setState({loadingMsg:"You are already Logged in!."});
            setTimeout(()=>{
                this.props.history.push("/other");
            }, 1500);
        }
    }

    render() {
        const form=<div style={{ marginTop: "1rem" }}>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="email" name="email" id="email" onChange={this.handleChange}
                    placeholder="Enter email address"  value={this.state.email}
                />
                <input
                    type="password" name="password" id="password" onChange={this.handleChange}
                    placeholder="Enter password" value={this.state.password}
                />
                <input type="submit" value="Login" />
            </form>
        </div>;
        return (
            <div>
                <h1>{this.state.loadingMsg}</h1>
                {!this.context.isAuthenticated&&!this.state.isLoading&&form}

            </div>
        );
    }
}

export default Login;