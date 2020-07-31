import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={query:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({query:e.target.value})
    }
    handleClick(){
        alert("saving to db");
        this.props.history.push(`/chips/${this.state.query}`);
    }
    render() {
        return (
            <div>
                <h1>Search a chips</h1>
                <input type="text" name="" id="" onChange={this.handleChange} value={this.state.query}/>
                <button type="button" onClick={this.handleClick}>Go</button>
            </div>
        );
    }
}

export default Search;