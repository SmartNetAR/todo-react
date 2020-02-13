import React from "react";
import Task from "./Task";

class List extends React.Component {
  pendingTasks = () => {
    return this.props.tasksList.filter(task => !task.done)
  }
  onChangeState = (task) => {
    this.props.onChangeTaskStatus( task )
  }
  render() {
    // const { tasks } = this.state
    return (
      <>
        {this.pendingTasks().map((task, key) => 
          (<Task task={task} onChangeState={this.onChangeState} key={key} />))}
      </>

    )
  }
}

export default List