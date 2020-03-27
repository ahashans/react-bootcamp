import React, {Component} from 'react';
import uuid from "uuid/v4";
import BoxMakerForm from "./BoxMakerForm";
import Box from "./Box";
class BoxMaker extends Component {
    constructor(props) {
        super(props);
        this.state= {boxes:[]};
        this.addBox = this.addBox.bind(this);
    }
    addBox(box){
        let newBox = {...box,id:uuid()};
        this.setState({boxes:[...this.state.boxes,newBox]});
    }
    removeBox(boxId){
        this.setState({
           boxes:this.state.boxes.filter(box=>box.id!==boxId)
        });
    }
    render() {
        let divs = this.state.boxes.map( box=> (
            <Box
                key={box.id}
                id={box.id}
                height={box.height}
                width={box.width}
                color={box.color}
                delete={()=>this.removeBox(box.id)}/>
        ));
        return (
            <div>
                <BoxMakerForm addBox={this.addBox}/>
                {divs}
            </div>
        );
    }
}

export default BoxMaker;