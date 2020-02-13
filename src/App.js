import React from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';


// import "bootstrap" from "bootstrap";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "uno", description: "desc uno", done: true },
        { id: 2, name: "dos", description: "desc dos", done: false },
        { id: 3, name: "tres", description: "desc tres", done: false },
        { id: 4, name: "cuatro", description: "desc cuatro", done: false }
      ]
    }
  }
  changeTaskStatus = ( task ) => {
    const taskUpdated = this.state.tasks.map(taskEl => {
      if (taskEl.id === task.id) taskEl.done = !taskEl.done
      return taskEl
    })
    this.setState({
      tasks: taskUpdated
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col mb-3">
            <Form />
          </div>
          <div className="col">
            <List tasksList={this.state.tasks} onChangeTaskStatus={this.changeTaskStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
