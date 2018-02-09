import React, { Component } from 'react';
import Ship from './battleship-with-pixels.png';

/* pick whether you are using semicolons or not */

class HomePage extends Component {
  constructor() {
    super();

    this.hasClickedEnterButton = this.hasClickedEnterButton.bind(this)
  }

  hasClickedEnterButton() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games`, {
      method: "POST"
    }).then((res) => {
      return res.json()
    }).then((newEmptyGame) => {
      this.props.history.push(`/gamepage/${newEmptyGame._id}`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img id="homepage-ship" src={ Ship } alt="battleship"/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button onClick={ this.hasClickedEnterButton } className="btn btn-outline-success btn-lg">ENTER</button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
