import React from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';


// import "bootstrap" from "bootstrap";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <Form />
        </div>
        <div className="col">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
