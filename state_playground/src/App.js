import React from 'react';
import './App.css';
import Clicker from "./clicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from "./TableComponent";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      {/*<Clicker/>*/}
      {/*<TableComponent/>*/}
      <Lottery/>
      <Lottery title="Mini Daily" maxNum={10} maxBalls={4}/>

    </div>
  );
}

export default App;
