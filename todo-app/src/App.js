import React from 'react';
import './App.css';
import TaskList from "./TaskList";

class App extends React.Component{
  render() {
    return(
        <div className="App">
            <TaskList/>
        </div>
    );
  }
}

export default App;
