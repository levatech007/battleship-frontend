import React, { Component } from 'react';
import './App.css';
import MyRoutes from './config/routes.js';
import Header from './components/Header.js';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          { MyRoutes }
           
        </div>
      </div>
    );
  }

}

export default App;
