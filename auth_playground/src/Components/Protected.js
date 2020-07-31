import React, {Component} from 'react';
import {AuthContext} from "../Contexts/AuthContext";
import {axiosInstance} from "../axiosInstance";

class Protected extends Component {
    constructor(props) {
        super(props);
        this.state={user:{}};
    }

    static contextType = AuthContext;
    async componentDidMount() {
        const userData = await axiosInstance.get("/users/me")
            .catch((error)=>{
                console.log(error);
                });
        console.log(userData.data);
        this.setState({user:{...userData.data}})
    }

    render() {
        return (
            <div>
                <h1>This is a protected route</h1>
                    <h3>{this.state.user.name}</h3>
            </div>
        );
    }
}

export default Protected;