import React from "react";
import Task from "./Task";

class List extends React.Component {
  pendingTasks = () => {
    return this.props.tasksList.filter(task => !task.done)
  }
  onChangeState = (task) => {
    // const taskUpdated = this.props.tasksList.map(taskEl => {
    //   if (taskEl.id === task.id) taskEl.done = !taskEl.done
    //   return taskEl
    // })
    // this.setState({
    //   tasks: taskUpdated
    // })
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