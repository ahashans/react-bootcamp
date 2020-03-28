import React, {Component} from 'react';
import "./Task.css";
class Task extends Component {
    constructor(props) {
        super(props);
        this.state={task:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(e){
        this.setState({
            task:e.target.value
        })
    };
    handleUpdate(){
        this.props.todo.task = this.state.task;
        this.props.updateTodo(this.props.todo);
    }
    render() {
        let todo = this.props.todo;
        let result;
        if (this.props.isUpdating) {
            result=<div className="Todo">
                <form onSubmit={this.handleUpdate} className="Todo-edit-form">
                    <input type="text"
                           id="task"
                           name="task"
                           value={this.state.task}
                           onChange={(e)=>this.handleChange(e)}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        } else {
            result = <div className="Todo">
                <li onClick={() => this.props.toggleCheck(todo.id)}
                   className={todo.status === "done" ? "Todo-task completed" : "Todo-task"}
                   style={{textDecoration: todo.status === 'done' ? "line-through" : "none"}}>{todo.task}</li>
                <div className="Todo-buttons">
                    <button type="button" value={todo.id} onClick={this.props.editTodo}><i className="fas fa-pen"></i></button>
                    <button type="button" value={todo.id} onClick={this.props.removeTodo}><i className="fas fa-trash"></i></button>
                </div>
            </div>;
        }
        return result;
    }
}

export default Task;