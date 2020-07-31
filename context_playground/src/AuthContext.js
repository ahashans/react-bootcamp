import React, {Component, createContext} from 'react';

export const AuthContext = createContext();

export class AuthProvider extends Component{
    constructor(props) {
        super(props);
        this.state={
            isAuthenticated:false,
            userName:"",
            avatar:"",
            jwt:""
        }
    }

    render() {
        return(
            <AuthContext.Provider value={{...this.state}}>
                {this.props.children}
            </AuthContext.Provider>
        );

    }
}
