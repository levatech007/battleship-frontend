import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GamePage from './GamePage.js';
import Ship from './battleship-with-pixels.png';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      lastGameCreated: {},
      
    }

    this.hasClickedEnterButton = this.hasClickedEnterButton.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/games").then( (res) => {
      return res.json();
    }).then( (json) => {
      console.log("all the available games");
      console.log(json);
      this.setState({
        lastGameCreated: json[json.length - 1]
      })
      console.log("Last game in DB");
      console.log(this.state.lastGameCreated);
    })
  }

  hasClickedEnterButton() {
    fetch("http://localhost:8080/api/games", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p1_position: [2,5],
        p2_position: [1,3],
        p1_guesses: [3,1],
        p2_guesses: [7,3],
        game_finished: false,
      })
    }).then((res) => {
      return res.json()
    }).then((newEmptyGame) => {
      console.log("ID of game that was just created with ENTER click");
      console.log(newEmptyGame._id)
      this.setState({
        lastGameCreated: newEmptyGame
      });
      console.log("setting the last game to be the newly created game");
      console.log(this.state.lastGameCreated)
    })
    // console.log(this.state.newlyCreatedGame)

    // fetch("http://localhost:8080/api/games").then( (res) => {
    //   return res.json();
    // }).then( (json) => {
    //   console.log(json);
    //   this.setState({
    //     newlyCreatedGame: json[json.length - 1]
    //   })
    //   console.log(this.state.newlyCreatedGame);
    // })
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
