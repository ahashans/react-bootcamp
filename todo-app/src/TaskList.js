import React, {Component} from 'react';
import TaskForm from "./TaskForm";
import Task from "./Task";
import "./TaskList.css"

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: [], isUpdating:""};
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
    }

    addTask(task) {
        this.setState({tasks: [...this.state.tasks, task]});
    }

    editTask(e) {
        let taskId = e.target.value;
        this.setState({isUpdating:taskId});
    }

    updateTask(updatedTask) {
        this.setState({tasks: this.state.tasks.filter(task => task.id === updatedTask.id ? updatedTask : task),
            isUpdating:""});
    }

    removeTask(e) {
        let taskId = e.target.value;
        this.setState({tasks: this.state.tasks.filter(task => task.id !== taskId)});
    }

    toggleCheck(taskId) {
        this.setState({
            tasks: this.state.tasks.filter(task => {
                if (task.id === taskId) {
                    task.status = task.status === "pending" ? "done" : "pending";
                }
                return task;
            })
        });
    }

    render() {
        let currUpdating = this.state.isUpdating;
        const todos = this.state.tasks.map((todo) =>
            <Task todo={todo}
                  key={todo.id}
                  toggleCheck={this.toggleCheck}
                  editTodo={this.editTask}
                  removeTodo={this.removeTask}
                  updateTodo={this.updateTask}
                  isUpdating={todo.id === currUpdating}/>);
        return (
            <div className="TaskList">
                <h1>Todo App!<span>A simple react todo list App</span></h1>
                <ul className="List">
                    {todos}
                </ul>
                <div className="Form">
                    <TaskForm addTodo={this.addTask}/>
                </div>

            </div>
        );
    }
}

export default TaskList;