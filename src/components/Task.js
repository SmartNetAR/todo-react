import React from "react"

class Task extends React.Component {
  changeStatus = () => {
    this.props.onChangeState(this.props.task)
  }
  render() {
    const { name, description } = this.props.task
    return (
      <>
        <div className="card mb-3">
          <div className="card-header">
            {name}
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">{name}</h5> */}
            <p className="card-text">{description}</p>
            <button className="btn btn-primary" onClick={this.changeStatus} >Completada</button>
          </div>
        </div>
      </>
    )
  }
}

export default Task