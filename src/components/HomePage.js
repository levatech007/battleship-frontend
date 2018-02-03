import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GamePage from './GamePage.js';

class HomePage extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img id="homepage-ship" src="https://static-pss-eu.wgcdn.co/shop/media/items/1c/b1/1cb113ec539d47dcb26f8d06cbb132b8.png" alt="battleship-image"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to={ './gamepage' } className="btn btn-outline-success btn-lg">ENTER</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
