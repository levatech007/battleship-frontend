import React, { Component } from 'react';
import './App.css';
import MyRoutes from './config/routes.js';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-12">
              <h1 className="App-title">Battleship</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right">
              <a id="about-link" href="">About</a>
              <a href="">Instructions</a>
            </div>
          </div>
        </header>
        <div className='container'>
          { MyRoutes }
           
        </div>
      </div>
    );
  }

}

export default App;
