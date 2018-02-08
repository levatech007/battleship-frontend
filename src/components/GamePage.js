import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OutcomeModal from './OutcomeModal';
import PlayerGrid from './PlayerGrid';
import OpponentGrid from './OpponentGrid';
import FiveSquare from './FiveSquare.png';
import FourSquare from './FourSquare.png';
import ThreeSquare from './ThreeSquare.png';
import TwoSquare from './TwoSquare.png';
// import OutcomePage from './OutcomePage';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      game_finished: false,
      outcome: '',
      allOpponentBoxClicks: [],
      clickedStartGame: false,
      playerBoxesClicked: [],
    }

    this.hasClickedToPlay = this.hasClickedToPlay.bind(this);
    this.showOutcomeModal = this.showOutcomeModal.bind(this);
    this.closeOutcomeModal = this.closeOutcomeModal.bind(this);
    this.showOutcome = this.showOutcome.bind(this);
  }

  componentDidMount() {
    console.log("My game ID from GamePage is:", this.props.match.params.game_id);
  }

  sendBoxClick(row, column) {
    this.setState({
      playerBoxesClicked: this.state.playerBoxesClicked.concat([[row, column]])
    })
    console.log("player ships on GamePage - ", this.state.playerBoxesClicked);
  }

  hasClickedToPlay() {
    let currentGameID = this.props.match.params.game_id;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/${currentGameID}`, {
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
      // console.log("p1_position ships updated with - ", updatedPlayerShips);
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

  allOpponentBoxClicks(row, column)  {
    this.setState({
      allOpponentBoxClicks: [[row, column]].concat(this.state.allOpponentBoxClicks)
    })
    console.log("on the GamePage - ", this.state.allOpponentBoxClicks);
  }

  render() {

    const gameStarted = this.state.clickedStartGame;
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Stay out of hot water!</h1>
          </div>
        </div>
        <div>
          { this.state.game_finished ? <OutcomeModal show={ this.state.showOutcome } close={ this.closeOutcomeModal } /> : null}
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="row">
              <div className="col-1 all-letters-col">
                {letters.map((eachLetter, idx) => {
                    return <div key={ idx } className="col-12">
                      <h5 className="one-letter">{eachLetter}</h5>
                      </div>
                    })
                  }
              </div>
              <div className="col-11">
                <h2>Your gameboard</h2>
                <div className="row all-numbers-row">
                  {numbers.map((eachNumber, idx) => {
                    return <div key={ idx } className="col-1">
                              <div>
                                <h5 className="one-number">{eachNumber}</h5>
                              </div>
                            </div>
                    })
                  }
                </div>
                <PlayerGrid ref="computerTurn" gameIdFromGamePage={this.props.match.params.game_id} sendBoxClick={this.sendBoxClick.bind(this)} gameStarted={ this.state.clickedStartGame}/>
              </div>
            </div>
          </div>

          {gameStarted ? (
            <div className="col-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="col-1 all-letters-col">
                {letters.map((eachLetter, idx) => {
                    return <div key={ idx } className="col-12">
                      <h5 className="one-letter">{eachLetter}</h5>
                      </div>
                    })
                  }
                </div>
                <div className="col-11">
                  <h2 className="sink-enemy">Sink the enemy</h2>
                  <div className="row all-numbers-row">
                  {numbers.map((eachNumber, idx) => {
                      return <div className="col-1">
                                <div key={ idx }>
                                  <h5 className="one-number">{eachNumber}</h5>
                                </div>
                              </div>
                      })
                    }
                  </div>
                  <OpponentGrid gameIdFromGamePage={this.props.match.params.game_id} showOutcomeModal={this.showOutcomeModal} allOpponentBoxClicks={this.allOpponentBoxClicks.bind(this)}/>
                </div>
              </div>
            </div>
            ) : (
            <div className="col-12 col-md-12 col-lg-6">
              <h2>Place your battleships!</h2>
              <h5>Click the squares on your board to place your ships then click 'Start Game'</h5>
              <br/>
              <ul>
                <p>Carrier - <img className="squares" src={FiveSquare}/></p>
                <p>Battleship - <img className="squares" src={FourSquare}/></p>
                <p>Cruiser - <img className="squares" src={ThreeSquare}/></p>
                <p>Submarine - <img className="squares" src={ThreeSquare}/></p>
                <p>Destroyer - <img className="squares" src={TwoSquare}/></p>
              </ul>
              <br/>
              <button className="btn btn-outline-success" onClick={ this.hasClickedToPlay }>Start Game</button>
            </div>
          )}
        </div>
        <br/>
        <div className="row">
          <div className="col-12">
            <h4>Click button for opponent's guess</h4>
            <button onClick={ () => this.refs.computerTurn.opponentGuess() } className="btn btn-outline-info">Let opponent guess</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>High Scores</h2>
            <hr/>
              <ul>
                <h4>KJE - 850</h4>
                <h4>SJD - 740</h4>
                <h4>DBP - 720</h4>
                <h4>AML - 690</h4>
              </ul>
          </div>

          <div className="col-12 col-md-6">
            <h2>Guesses</h2>
            <hr/>
            <div className="row">
              {this.state.allOpponentBoxClicks.map((eachGuess, idx) => {
                return <div key={ idx } className="col-3">
                  <h4>{letters[eachGuess[0]]}-{(eachGuess[1]+1)}</h4>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <Link to={ '/' } className="btn btn-outline-primary btn-lg">Return Home</Link>
        <Link to={ '/' } className="btn btn-outline-danger btn-lg">Quit Game</Link>
      </div>
    )
  }
}

export default GamePage
