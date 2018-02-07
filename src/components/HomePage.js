import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GamePage from './GamePage.js';
import Ship from './battleship-with-pixels.png';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      lastGameCreated: {}      
    }

    this.hasClickedEnterButton = this.hasClickedEnterButton.bind(this)
  }

  componentDidMount() {
    fetch("https://lit-gorge-27220.herokuapp.com/api/games", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_finished: false,
      })
    }).then((res) => {
      return res.json()
    }).then((newEmptyGame) => {
      this.setState({
        lastGameCreated: newEmptyGame
      });
      console.log("new empty game - ", this.state.lastGameCreated)
    })

  }

  hasClickedEnterButton() {
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img id="homepage-ship" src={Ship} alt="battleship"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to={ `/gamepage/${this.state.lastGameCreated._id}` } onClick={ () => this.hasClickedEnterButton()} className="btn btn-outline-success btn-lg">ENTER</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage

// https://static-pss-eu.wgcdn.co/shop/media/items/1c/b1/1cb113ec539d47dcb26f8d06cbb132b8.png

// https://s-media-cache-ak0.pinimg.com/originals/6b/73/5c/6b735c853ff4caed8a37816dda58ea85.jpg
