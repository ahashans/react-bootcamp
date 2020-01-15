import React from 'react';
import './App.css';
import Clicker from "./clicker";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from "./TableComponent";
import Lottery from "./Lottery";
import Flipper from "./Flipper";

function App() {
  return (
    <div className="App">
      {/*<Clicker/>*/}
      {/*<TableComponent/>*/}
      {/*<Lottery/>*/}
      {/*<Lottery title="Mini Daily" maxNum={10} maxBalls={4}/>*/}
      <Flipper/>
    </div>
  );
}

export default App;
