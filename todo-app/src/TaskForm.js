import React, {Component} from 'react';
import {v4 as uuid} from "uuid";
import "./TaskForm.css";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {task: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            task: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        let newTodo = {id: uuid(), task: this.state.task, status: "pending"};
        this.props.addTodo(newTodo);
        this.setState({task: ""});

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Todo-form">
                <label htmlFor="task">New Todo</label>
                <input type="text"
                       id="task"
                       name="task"
                       value={this.state.task}
                       onChange={this.handleChange}/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TaskForm;