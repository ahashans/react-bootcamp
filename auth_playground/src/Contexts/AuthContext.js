import React, {createContext, Component} from 'react';
import {getSessionCookie} from "../Sessions";

export const AuthContext = createContext();
export class AuthProvider extends Component {
    constructor(props) {
        super(props);
        let isAuthenticated = false;
        let data={};
        const session = getSessionCookie();
        if(Object.keys(session).length!==0){
            isAuthenticated=true;
            data=session;
        }
        this.state={
            isAuthenticated:isAuthenticated,
            data:{...data}
        };
        this.updateAuth=this.updateAuth.bind(this);
    }
    updateAuth(){
        let isAuthenticated = false;
        let data={};
        const session = getSessionCookie();
        if(Object.keys(session).length!==0){
            isAuthenticated=true;
            data=session;
        }
        this.setState({
            isAuthenticated:isAuthenticated,
            data:{...data}
        });
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state, updateAuth:this.updateAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
        }
}

