import React, {Component} from 'react';
import * as Cookies from "js-cookie";
import {getSessionCookie} from "../Sessions";
import {AuthContext} from "../Contexts/AuthContext";
class Logout extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.state={status:"Logging out! please wait...."};
    }

    componentDidMount() {
        const session = getSessionCookie();
        if(Object.keys(session).length !== 0){
            console.log("logging out user", session);
            Cookies.remove("session");
            this.context.updateAuth();
            setTimeout(()=>{
                this.props.history.push("/");
            },1500);
        }
        else{
            this.setState({status:"You are not logged in. Please login first!"});
            setTimeout(()=>{
                this.props.history.push("/login");
            },1500);
        }

    }

    render() {
        return (
            <div>
                <h1>{this.state.status}</h1>
            </div>
        );
    }
}

export default Logout;