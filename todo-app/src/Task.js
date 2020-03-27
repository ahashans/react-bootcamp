import React, {Component} from 'react';

class Task extends Component {

    render() {
        let todo = this.props.todo;
        return (
            <div className="Task">

                <p onClick={()=>this.props.toggleCheck(todo.id)}
                   className={todo.status==="done"?"Todo-task completed":"Todo-task"}
                   style={{textDecoration: todo.status==='done'?"line-through":"none"}}>{todo.task}</p>

                <button type="button" value={todo.id} onClick={this.props.editTodo}>Edit</button>
                <button type="button" value={todo.id} onClick={this.props.removeTodo}>X</button>
            </div>
        );
    }
}

export default Task;