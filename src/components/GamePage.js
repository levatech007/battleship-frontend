import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';

class GamePage extends Component {
  constructor() {
    super();
    this.state = {
      allGuesses: ["A1", "A3", "B3", "C3", "B1", "C1", "D6", "E6", "D7", "G7", "A2", "B2"],
      clickedStartGame: false
    }
    this.onClick = this.onClick.bind(this);
    this.hasClickedToPlay = this.hasClickedToPlay.bind(this);

  }

  onClick(row, column) {
    console.log(`Clicked row ${row}, column ${column}`)
  }

  hasClickedToPlay() {
    this.setState({
      clickedStartGame: true
    });
  }

  render() {

    let gameBoard = new Array()
    let gameRow = new Array(10);
    gameRow.fill(0)
    for(let i = 0; i < gameRow.length; i++) {
      gameBoard.push(gameRow)
    }

    // const gameStarted = this.state.clickedStartGame
    // if (gameStarted) {
    //   return (
    //     <Grid />
    //   )
    // }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Stay out of hot water!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2>Your gameboard</h2>
            <div id="your-gameboard" className="gameboard">
                {gameBoard.map((oneRow, rowIdx) => {
                  return( <div className='row justify-content-md-center'>
                    {
                      oneRow.map((oneSquare, colIdx) => {
                        return( <div className='col-1 square' onClick={ () => this.onClick(rowIdx, colIdx) }></div> )
                      })
                    }
                    </div>)
                  })
                }
            </div>
          </div>
          <div className="col-md-6">
            <h2>Place your battleships!</h2>
              <p>Click the squares on your board to place your ships!</p>
              <button className="btn btn-outline-success" onClick={this.hasClickedToPlay}>Start Game</button>
          </div>
        </div>
        </div> 
        <Grid />

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
              {this.state.allGuesses.map(eachGuess => {
                return <div className="col-md-4">
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
// opponent game board
// <h2>Sink your opponent</h2>
// <div id="your-gameboard" className="gameboard">
  // {gameBoard.map((oneRow, rowIdx) => {
    // return( <div className='row justify-content-md-center'>
    // {
      // oneRow.map((oneSquare, colIdx) => {
        // return( <div className='col-1 square' onClick={ () => this.onClick(rowIdx, colIdx) }></div> )
      // })
    // }
    // </div>)
  // })
// }
// </div>

export default GamePage
