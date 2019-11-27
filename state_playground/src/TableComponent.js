import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
// import Example from './EditModalComponent';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit(e){
        console.log(e.target.id);
        // return <Example id={e.target.id}/>
    }
    records = [{
        name: "Ahashan",
        age:22,
        address:"dhaka",
        id:1
    },{
        name: "Alam",
        age:25,
        address:"Khulna",
        id:2
    }
    ];
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.records.map((record)=>
                        <tr key={record.id}>
                            <td>{record.name}</td>
                            <td>{record.name}</td>
                            <td>{record.name}</td>
                            <td key={record.id}><button onClick={this.handleEdit} id={record.id}>Edit</button></td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableComponent;