import React, {Component} from 'react';

class BoxMakerForm extends Component {
    constructor(props) {
        super(props);
        this.state={height:"",width:"", color:""};
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({height:"",width:"", color:""});
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="height">Height</label>
                        <input type="text" id="height" name="height" value={this.state.height} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="width">Width</label>
                        <input type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" value={this.state.color} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Create Box</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BoxMakerForm;