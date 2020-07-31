import React, {Component} from 'react';
import {AuthContext} from "./AuthContext";
import {withLangContext} from "./LangContext";

class Child extends Component {
    static contextType = AuthContext;

    render() {
        return (
            <div>
                <p> isAuthenticate=={this.context.isAuthenticated ? "true" : "false"}</p>
                <p> language=={this.props.langContext.language}</p>
            </div>

        );
    }
}

export default withLangContext(Child);