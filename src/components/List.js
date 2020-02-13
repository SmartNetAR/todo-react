import React from "react";
import Task from "./Task";

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [
                { id: 1, name: "uno", description: "desc uno", done: false},
                { id: 2, name: "dos", description: "desc dos", done: false},
                { id: 3, name: "tres", description: "desc tres", done: false},
                { id: 4, name: "cuatro", description: "desc cuatro", done: false}
            ]
        }
    }
    pendingTasks = () => {
        return this.state.tasks.filter( task => !task.done )
    }
    onChangeState = ( task ) => {
        const taskUpdated = this.state.tasks.map( taskEl => {
            if ( taskEl.id === task.id ) taskEl.done = !taskEl.done
            return taskEl
        })
        this.setState( {
            tasks: taskUpdated
        })
    }
    render() {
        // const { tasks } = this.state
        return (
            <>
                { this.pendingTasks().map( ( task, key ) => ( <Task task={ task } onChangeState={ this.onChangeState }  key={ key } /> )  ) }
            </>

        )
    }
}

export default List