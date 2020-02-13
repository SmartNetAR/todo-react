import React from "react";

class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()

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
              <label htmlFor="exampleInputEmail1">Título</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripción</label>
              <input type="text" className="form-control" name="description" id="description"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Form