import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import OutcomeModal from './OutcomeModal';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      p1_positions: [],
      p1_guesses: [],
      allGuesses: [[3,1], [0,3], [8,3], [4,3], [2,1], [7,1], [6,6], [1,6], [0,7], [4,7], [7,2], [5,2]],
      clickedStartGame: false,
      playerBoxesClicked: [],
      game_finished: false,
      outcome: '',
      score: []
    }

    this.hasClickedToPlay = this.hasClickedToPlay.bind(this);
    this.showOutcomeModal = this.showOutcomeModal.bind(this);
    this.closeOutcomeModal = this.closeOutcomeModal.bind(this);
    this.showOutcome = this.showOutcome.bind(this);
  }

  componentDidMount() {
    console.log("My game ID is:", this.props.match.params.game_id);
  }

  sendBoxClick(row, column) {
    this.setState({
      playerBoxesClicked: this.state.playerBoxesClicked.concat([[row, column]])
    })
    console.log(this.state.playerBoxesClicked);
  }

  hasClickedToPlay() {
    let currentGameID = this.props.match.params.game_id;
    fetch(`http://localhost:8080/api/games/${currentGameID}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        p1_positions: this.state.playerBoxesClicked
      })
    }).then((res) => {
      return res.json();
    }).then((updatedPlayerShips) => {
      console.log("p1_position ships updated with - ", updatedPlayerShips);
    });
    
    this.setState({
      clickedStartGame: true
    });
  }

  showOutcomeModal() {
    this.setState({
      showOutcomeModal: true
    }) 
  }

  showOutcome() {
    this.setState({
      outcome: 'Win/Lose'
    })
  }

  closeOutcomeModal() {
    this.setState({
      showOutcomeModal: false
    })
  }
  // score() {
    // var score = '';
    // for(let i = 0; i < this.state.allGuesses.length; i++) {
    //   for (let j = 0; j < this.state.p1_positions.length; j++) {
    //     if (this.state.allGuesses[i] === this.state.p1_positions[j]) {
    //       score = 'computer wins'
    //     }
    //   }
    // }
    // if (this.state.game_finished === true) {

    //   this.setState({
          
    //     })
    //   }
    // }

  render() {

    const gameStarted = this.state.clickedStartGame;
     
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Stay out of hot water!</h1>
          </div>
        </div>
        <div>
          <div>
          { this.state.game_finished ? <OutcomeModal show={ this.state.showOutcome } close={ this.closeOutcomeModal } /> : null}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Your gameboard</h2>
            <Grid sendBoxClick={this.sendBoxClick.bind(this)} />
          </div>
          {gameStarted ? (          
            <div className="col-md-6">
              <h2>Sink your enemy</h2>
              <Grid />
            </div>
            ) : (
            <div className="col-md-6">
              <h2>Place your battleships!</h2>
              <h5>Click the squares on your board to place your ships then click 'Start Game'</h5>
              <button className="btn btn-outline-success" onClick={ this.hasClickedToPlay }>Start Game</button>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2>High Scores</h2>
            <hr/>
              <ul>
                <h4>KJE - 850</h4>
                <h4>SJD - 740</h4>
                <h4>DBP - 720</h4>
                <h4>AML - 690</h4>
              </ul>
          </div>

          <div className="col-md-6">
            <h2>Guesses</h2>
            <hr/>
            <div className="row">
              {this.state.allGuesses.map((eachGuess, idx) => {
                return <div key={ idx } className="col-md-4">
                  <h3>{eachGuess}</h3>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <Link to={ '/' } className="btn btn-outline-info btn-lg">Return Home</Link>
        <Link to={ '/' } className="btn btn-outline-danger btn-lg">Quit Game</Link>
      </div>
    )
  }
}

export default GamePage
