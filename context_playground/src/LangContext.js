import React, {Component, createContext} from 'react';
export const LangContext = createContext();
export class LangProvider extends Component {
    constructor(props) {
        super(props);
        this.state={
            language:"english"
        }
    }

    render() {
        return (
            <LangContext.Provider value={{...this.state}}>
                {this.props.children}
            </LangContext.Provider>
        );
    }
}

export const withLangContext = Component => props =>(
    <LangContext.Consumer>
        {value=><Component langContext={value} {...props}/>}
    </LangContext.Consumer>
)