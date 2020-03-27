import React, {Component} from 'react';
import {v4 as uuid} from "uuid";

class TaskForm extends Component {
    static defaultProps = {
        todo:{
            id:"",
            task:"",
            status:"",
        },

    };
    constructor(props) {
        super(props);
        this.state = {task:this.props.todo.task};
    }

    handleChange(e){
        this.setState({
            task:e.target.value
        })
    };
    handleSubmit(e){
      e.preventDefault();
      if(this.props.todo.id===""){
          let newTodo = {id:uuid(), task:this.state.task, status:"pending"};
          this.props.addTodo(newTodo);
      }
      else{
          this.props.todo.task = this.state.task;
          this.props.updateTodo(this.props.todo);
      }
      this.setState({task:""});

    };
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="task">New Todo</label>
                        <input type="text"
                                id="task"
                                name="task"
                                value={this.state.task}
                                onChange={(e)=>this.handleChange(e)}/>
                        <button type="submit">{this.props.todo.id===""?"Add":"Update"}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TaskForm;