import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "./Contexts/AuthContext";
function PrivateRoute({children, ...rest}) {
    const session = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({location}) =>
                session.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}



export default PrivateRoute;