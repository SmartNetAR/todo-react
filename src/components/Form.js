import React from "react";

class Form extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      name: "",
      description: ""
    }
  }
  handleChange = e => {
    const value = e.target.value
    const name = e.target.name

    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { name, description } = this.state
    const task = {
      name,
      description
    }
    this.props.onSubmitTask( task )
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          Nueva tarea
                </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label htmlFor="exampleInputTitle">Título</label>
              <input type="text" className="form-control" name="name" value={this.name} onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input type="text" className="form-control" name="description" value={this.description} onChange={this.handleChange}></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form