import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Header;
