import React from "react";
import Task from "./Task";

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: [
                {name: "uno", description: "desc uno", done: false},
                {name: "dos", description: "desc dos", done: false},
                {name: "tres", description: "desc tres", done: false},
                {name: "cuatro", description: "desc cuatro", done: false}
            ]
        }
    }

    render() {
        const { tasks } = this.state

        return (
            <>
                { tasks.map( ( task, key ) => ( <Task task={ task }  key={ key } /> )  ) }
            </>

        )
    }
}

export default List